import { defineConfig } from 'cypress'

const PORT = process.env.PORT || 3000;

export default defineConfig({
    e2e: {
        baseUrl: `http://localhost:${PORT}`,
    },
    env: {
        auth0_username: "public",
        auth0_password: "todo",
        auth0_domain: "https://jupiter.fh-swf.de/keycloak/realms/webentwicklung",
        auth0_audience: "account",
        auth0_scope: "openid email profile",
        auth0_client_id: "todo-backend",
      },
})