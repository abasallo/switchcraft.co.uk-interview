const mongodbPreset = require('@shelf/jest-mongodb/jest-preset');
const tsPreset = require('ts-jest/jest-preset');

const config = {
  ...mongodbPreset,
  ...tsPreset,
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.spec.json"
    }
  }
};

module.exports = config;
