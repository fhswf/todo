module.exports = {
  e2e: {
    video: true,
    screenshotOnFailure: true,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)

      return config;
    },
  },
};
