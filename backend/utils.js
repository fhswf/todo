import axios from 'axios';
import keycloak from '../keycloak.json'


async function getKeycloakToken() {
    const keycloakConfig = {
        baseUrl: 'https://jupiter.fh-swf.de/keycloak',
        realm: 'webentwicklung',
        clientId: 'todo-backend',
    };

    const tokenEndpoint = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`;

    try {
        const response = await axios.post(tokenEndpoint,
            {
                'grant_type': 'password',
                'client_id': keycloakConfig.clientId,
                'username': keycloak.username,
                'password': keycloak.password,
            },
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });

        return response.data.access_token;
    } catch (error) {
        console.error('Fehler beim Abrufen des Keycloak-Tokens', error);
        return null;
    }
}

export default getKeycloakToken