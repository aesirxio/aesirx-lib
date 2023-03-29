// Ensure environment variables are read.
require('dotenv').config();

module.exports = {
  roots: ['<rootDir>/src'],
  testTimeout: 20000,
  setupFilesAfterEnv: ['<rootDir>/__test__/setupTests.js'],
  globalSetup: '<rootDir>/__test__/globalSetup.js',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      babel: true,
      tsConfig: 'tsconfig.json',
    },
  },
};
