const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testMatch: ['<rootDir>/tests/*.test.(ts|tsx)'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
};
