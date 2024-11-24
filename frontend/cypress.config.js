module.exports = {
  e2e: {
    videos: true,
    screenshotOnFailure: true,
    reporter: "cypress-sonarqube-reporter",
    reporterOptions: {
      outputDir: "frontend/cypress/results"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
