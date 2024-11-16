module.exports = {
  e2e: {
    videos: true,
    screenshotOnFailure: true,
    reporter: 'mochawesome', // Optional: Mochawesome-Reporter für detaillierte Ergebnisse
    reporterOptions: {
      reportDir: 'cypress/results', // Ordner für Berichte
      overwrite: false, // Verhindert das Überschreiben von bestehenden Berichten
      html: false, // HTML-Berichte deaktivieren
      json: true // JSON-Berichte aktivieren
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
