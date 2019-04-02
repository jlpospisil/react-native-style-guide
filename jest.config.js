module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
};
