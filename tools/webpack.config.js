
const path = require('path');
const crypto = require('crypto');
const { hashElement } = require('folder-hash');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const tsconfig = require('../tsconfig.base.json');
const package = require('../package.json');
const { getRemote, getRemotes } = require('./remote-management');
const fs = require('fs');

const envVars = process.env;
const {
    mode = 'development',
        npm_config_showFileNames: showFilenames = false,
        npm_config_skipMin: skipMin = false,
        npm_config_writeToDisk: writeToDisk = false
} = envVars;
const devMode = mode === 'development';
const allDependencies = {...package.dependencies, ...package.devDependencies };

/*
Example output:
    react: { singleton: true, requiredVersion: '17.0.2' }
*/

const getSharedNpmLibraries = () => {
    return Object.fromEntries(Array(
        'react',
        'react-dom',
        'styled-components',
        /*
        If you take out the following line and investigate your
        network traffic while toggling between Application 1 & 2,
        you will notice that a JS file looking like
        `node_modules_styled-system_theme-get...` gets loaded twice.
        This indicates the file is not being shared via federated modules.
        */
        '@styled-system/theme-get'
    ).map((lib) => {
        const singletons = ['react', 'react-dom', 'styled-components'];

        if (singletons.includes(lib)) {
            return [lib, {
                singleton: true,
                requiredVersion: allDependencies[lib]
            }];
        }

        return [lib, allDependencies[lib]];
    }));
};

/*
Example output:
    '@microfrontend-demo/design-system/components': {
        version: '6wDxWeZ+hG0Dp6wUHuipPqPzE10=',
        requiredVersion: '6wDxWeZ+hG0Dp6wUHuipPqPzE10='
    }
*/
const getSharedCustomLibraries = async() => {
    const hashOptions = {
        folders: { exclude: ['.*', 'node_modules', '__tests__'] },
        files: { include: ['*.js', '*.json', '*.ts', '*.tsx'] }
    };

    const libs = await Promise.all(
        Object.entries(tsconfig.compilerOptions.paths).map(async({ 0: key, 1: value }) => {
            const libPath = path.resolve(__dirname, '..', value[0]);
            const hashInfo = await hashElement(libPath, hashOptions);
            const versionBasedOffHash = hashInfo.hash;

            return [key, {
                version: versionBasedOffHash,
                requiredVersion: versionBasedOffHash
            }];
        })
    );

    return Object.fromEntries(libs);
};

const getFederatedPlugin = async(remoteName) => {
    const customSharedLibs = await getSharedCustomLibraries();
    const npmSharedLibs = getSharedNpmLibraries();

    if (remoteName === 'main') {
        return [
            new ModuleFederationPlugin({
                name: 'main',
                library: { type: 'window', name: 'main' },
                filename: 'remoteEntry.js',
                remotes: {
                    'home': 'home',
                    'profile': 'profile',
                    'state': 'state',
                    'messages': 'messages'
                },
                shared: {
                    ...customSharedLibs,
                    ...npmSharedLibs
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `../apps/${remoteName}/ui/public/index.html`),
                templateParameters: () => {
                    return {
                        mode
                    };
                }
            }),
            new DefinePlugin({
                REMOTE_INFO: JSON.stringify(getRemotes()),
                MODE: JSON.stringify(mode)
            })
        ];
    }

    return [
        new ModuleFederationPlugin({
            name: remoteName,
            library: { type: 'window', name: remoteName },
            filename: `${remoteName}/remoteEntry.js`,
            exposes: {
                '.': path.resolve(__dirname, `../apps/${remoteName}/ui/src`)
            },
            shared: {
                ...customSharedLibs,
                ...npmSharedLibs
            }
        }),
    ];
};

const baseConfig = async() => {
    const remoteName = process.env.name;
    const port = Object.values(getRemote(remoteName))[0];
    const plugins = await getFederatedPlugin(remoteName);

    return {
        mode,
        entry: path.resolve(__dirname, `../apps/${remoteName}/ui/src/index`),
        output: {
            uniqueName: remoteName,
            path: path.resolve(__dirname, `../apps/dist`),
            chunkFilename: (devMode || showFilenames) ? `${remoteName}/[name].js` : `${remoteName}/[contenthash].js`,
            filename: (devMode || showFilenames) ? `${remoteName}/[name].js` : `${remoteName}/[contenthash].js`,
            
        },
        devtool: 'source-map',
        optimization: {
            minimize: (devMode ? false : !skipMin),
            moduleIds: 'named',
            chunkIds: 'named'
        },
        resolve: {
            extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
            alias: Object.fromEntries(
                Object.entries(tsconfig.compilerOptions.paths).map(({ 0: key, 1: value }) => [key, path.resolve(__dirname, '..', value[0])])
            )
        },
        module: {
            rules: [{
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.jsx?$/,
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [require.resolve('@babel/preset-react')],
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        devServer: {
            hot: true,
            // server: {
            //     // type: 'https',
            //     // options: {
            //     // key: fs.readFileSync(path.resolve(__dirname, '../certs/sociium.io+4-key.pem')),
            //     // cert: fs.readFileSync(path.resolve(__dirname, '../certs/sociium.io+4.pem')),
            //     // ca: fs.readFileSync(path.resolve(__dirname, '../certs/rootCA.pem')),
            //     // }
            // },
            devMiddleware: {
                writeToDisk: Boolean(writeToDisk)
            },
            port,
            client: {
                overlay: false,
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            historyApiFallback: true,
            onListening: (server) => {
                server.compiler.hooks.done.tap('done', () => {
                    setImmediate(() => {
                        process.send && process.send('ready');
                    });
                });
            }
        },
        plugins
    };
};

module.exports = baseConfig;