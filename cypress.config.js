const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localhost:3000',
    specPattern: 'cypress/integration/todo.spec.js',
  },
});