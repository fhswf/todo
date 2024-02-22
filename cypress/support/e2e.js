import "cypress-localstorage-commands";

beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!')
    cy.login()
})

Cypress.Commands.add('login', () => { 
    const keycloakConfig = {
        baseUrl: 'https://jupiter.fh-swf.de/keycloak',
        realm: 'webentwicklung',
        clientId: 'todo-backend',
    };

    const tokenEndpoint = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`;

    cy.request({
      method: 'POST',
      url: tokenEndpoint,
      body: {
        'grant_type': 'password',
        'client_id': keycloakConfig.clientId,
        'username': 'public',
        'password': 'todo',
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },  
    })
    .its('body')
    .then(body => {
    cy.setLocalStorage("jwt", body.access_token);
    cy.log(body)
    })
  
  })

  
