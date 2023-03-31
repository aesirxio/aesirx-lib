// Ensure environment variables are read.
require('dotenv').config();

module.exports = {
  roots: ['<rootDir>/src'],
  testTimeout: 20000,
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  globalSetup: '<rootDir>/test/globalSetup.js',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      babel: true,
      tsConfig: 'tsconfig.json',
    },
  },
};
