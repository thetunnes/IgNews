module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTest"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnviroment: 'jsdom'
}