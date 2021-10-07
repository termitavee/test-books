module.exports = {
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/__tests__/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],

  testPathIgnorePatterns: ['<rootDir>/__tests__/jest.setup.js', '<rootDir>/__tests__/test-util.tsx'],
  moduleDirectories: [
    'node_modules', // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
};
