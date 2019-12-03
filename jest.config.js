module.exports = {
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    enzymeAdapter: "react16"
  }
};