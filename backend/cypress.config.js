import { defineConfig } from 'cypress'

const PORT = process.env.PORT || 5500;

export default defineConfig({
    e2e: {
        baseUrl: `http://localhost:${PORT}`,
        supportFile: false,
    },
})
