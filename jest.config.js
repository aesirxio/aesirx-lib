// Ensure environment variables are read.
require('dotenv').config();

module.exports = {
  roots: ['<rootDir>/src'],
  testTimeout: 20000,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTests.js'],
  globalSetup: '<rootDir>/src/__test__/globalSetup.js',
  testEnvironment: 'node',
};
