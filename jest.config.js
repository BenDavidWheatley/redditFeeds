module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Customize setup
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy" // Mock CSS/SCSS imports
    },
  };
  