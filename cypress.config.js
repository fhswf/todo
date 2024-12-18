const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://fictional-acorn-5gqj469x667rf7jv7-3000.app.github.dev/todos',
    specPattern: 'cypress/integration/todo.spec.js',
  },
});