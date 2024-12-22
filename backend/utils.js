import axios from 'axios';
import qs from 'qs';
import https from 'https';


async function getKeycloakToken() {
    if (process.env.TEST_MODE === 'true') {
        // Geben Sie einen Dummy-Token zurück, wenn der Testmodus aktiviert ist
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    }
    const keycloakConfig = {
        baseUrl: 'https://jupiter.fh-swf.de/keycloak',
        realm: 'webentwicklung',
        clientId: 'todo-backend',
    };

    const tokenEndpoint = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`;

    // Ignoriere SSL-Zertifikate
    const agent = new https.Agent({  
        rejectUnauthorized: false
    });

    try {
        const response = await axios.post(tokenEndpoint,
            qs.stringify({
                'grant_type': 'password',
                'client_id': keycloakConfig.clientId,
                'username': 'public',
                'password': 'todo',
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                httpsAgent: agent, // Ignoriere SSL-Zertifikate
            });

        return response.data.access_token;
    } catch (error) {
        console.error('Fehler beim Abrufen des Keycloak-Tokens', error);
        return null;
    }
}

export default getKeycloakToken