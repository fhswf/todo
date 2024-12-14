module.exports = {
  e2e: {
    video: true,
    screenshotOnFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:run', (results) => {
^       // NOt implemented yet
      })
    },
  },
};
