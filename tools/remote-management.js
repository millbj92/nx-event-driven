const workspace = require('../workspace.json');

const STARTING_PORT = 3000;

const portMappings = [
  {
    name: 'main',
    port: 3002
  },
  {
    name: 'home',
    port: 3001,
  },
  {
    name: 'profile',
    port: 3000,
  }
]

const getRemotes = () => {
  return Object.fromEntries(
    Object.entries(workspace.projects)
      .filter(({ 1: value }) => value.includes('ui'))
      .map(({ 0: key }, index) => [key, portMappings.find(x => x.name === key).port])
  );
};

const getRemote = (name) => {
  return Object.fromEntries(
    Object.entries(getRemotes()).filter(({ 0: key }) => key === name)
  );
};

module.exports = {
  getRemotes,
  getRemote,
};
