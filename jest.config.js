module.exports = {
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    enzymeAdapter: "react16"
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};