module.exports = {
  e2e: {
    videos: true,
    screenshotOnFailure: true,
    reporter: "cypress-sonarqube-reporter",
    reporterOptions: {
      outputDir: "cypress/results"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
