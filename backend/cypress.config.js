import { defineConfig } from 'cypress'
import require from 'requirejs'

const PORT = process.env.PORT || 3000;

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config)
            // include any other plugin code...
      
            // It's IMPORTANT to return the config object
            // with any changed environment variables
            return config
          },
        baseUrl: `http://localhost:${PORT}`,
        codeCoverage: {
            url: `http://localhost:${PORT}/__coverage__`,
          },
    },
})

