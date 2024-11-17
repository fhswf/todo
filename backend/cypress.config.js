import { defineConfig } from 'cypress'

const PORT = process.env.PORT || 3000;

export default defineConfig({
    e2e: {
        baseUrl: `http://localhost:${PORT}`,
        supportFile: false,
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        video: true,
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.name === 'chrome') {
                    launchOptions.args.push('--lang=de');
                    return launchOptions;
                }
            })
        }
    },
})
