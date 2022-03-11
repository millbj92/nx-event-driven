const workspace = require('../workspace.json');

const STARTING_PORT = 3000;

const getRemotes = () => {
  return Object.fromEntries(
    Object.entries(workspace.projects)
      .filter(({ 1: value }) => value.includes('ui'))
      .map(({ 0: key }, index) => [key, STARTING_PORT + index])
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
