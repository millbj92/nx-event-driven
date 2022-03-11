const path = require('path');
const os = require('os');
const { spawn } = require('child_process');
const opn = require('opn');
const { argv } = require('yargs');

const { getRemotes } = require('./remote-management');

let numberOfAppsReady = 0;

const serveApp = (app, numberOfAppsToServe) => {
  const webpackConfig = 'webpack.config.js';
  const webpackDevServer = path.join(
    __dirname,
    '..',
    'node_modules',
    'webpack-dev-server',
    'bin',
    'webpack-dev-server.js'
  );
  const webpackArgs = [
    webpackDevServer,
    `--config=${path.join(__dirname, webpackConfig)}`,
  ];
  const stdio = ['pipe', 'pipe', 'pipe'];

  // If this is not a Windows machine, add ipc
  if (os.platform() !== 'win32') {
    stdio.push('ipc');
  }

  const wds = spawn('node', webpackArgs, {
    stdio,
    env: {
      name: app,
      NODE_ENV: 'development',
      PATH: process.env.PATH,
    },
  });

  wds.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  wds.stderr.on('data', (data) => {
    console.log(`${data}`);
  });

  wds.on('error', (err) => {
    console.log(`Failed to start webpack dev server: ${err}`);
  });

  wds.on('message', (message) => {
    message === 'ready' && numberOfAppsReady++;

    const readyForLiftoff = numberOfAppsReady === numberOfAppsToServe;

    if (readyForLiftoff) {
      console.log(`\nIGNITION SUCCESSFUL\n`);

      opn('http://localhost:3000');
    } else {
      console.log(`\n${String(app).toUpperCase()} HAS BEEN BUILT\n`);
    }
  });
};

(() => {
  const { apps, appOnly, all } = argv;
  let appsToServe = null;

  if (all) {
    appsToServe = Object.keys(getRemotes());
  } else {
    appsToServe = apps ? apps.split(',') : [];

    if (!appOnly) appsToServe.push('host');
  }

  appsToServe.forEach((app) => {
    serveApp(app, appsToServe.length);
  });
})();
