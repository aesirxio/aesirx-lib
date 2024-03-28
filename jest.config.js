// Ensure environment variables are read.
require('dotenv').config();

module.exports = {
  roots: ['<rootDir>/src'],
  testTimeout: 20000,
  globalSetup: '<rootDir>/test/globalSetup.js',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      babel: true,
      tsConfig: 'tsconfig.json',
    },
  },
};
