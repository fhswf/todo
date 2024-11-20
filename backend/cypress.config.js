import { defineConfig } from 'cypress'

const PORT = process.env.PORT || 3000;

export default defineConfig({
    e2e: {
        baseUrl: `https://localhost:${PORT}`,
        supportFile: false,
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true
    },
})
