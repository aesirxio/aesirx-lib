// Ensure environment variables are read.
require('dotenv').config();

module.exports = {
  roots: ['<rootDir>/src'],

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
