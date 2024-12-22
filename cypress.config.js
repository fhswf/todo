const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fictional-acorn-5gqj469x667rf7jv7-3000.app.github.dev',
    specPattern: 'cypress/integration/todo.spec.js',
  },
});