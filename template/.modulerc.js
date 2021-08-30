module.exports = {
  name: 'module0',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App',
  },
  remotes: {
    module1: `module1@http://localhost:3001/remoteEntry.js`,
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
};
