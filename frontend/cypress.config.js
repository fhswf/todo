module.exports = {
  e2e: {
    video: true,
    screenshotOnFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:run', (results) => {
        const { merge } = require('mochawesome-merge')
        const { create } = require('mochawesome-report-generator')

        merge({
          files: ['./cypress/results/*.json']
        }).then(report => {
          create(report, {
            reportDir: './cypress/reports',
            reportFilename: 'report.html'
          })
        })
      })
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true
    }
  },
};
