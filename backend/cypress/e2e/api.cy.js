describe('API Tests', () => {
    it('should fetch and display data from API', () => {
      cy.intercept('GET', '/api/data', { fixture: 'data.json' }).as('getData');
      cy.visit('/data');
      cy.wait('@getData');
      cy.get('.data-item').should('have.length', 3);
      cy.get('.data-item').first().should('contain', 'Item 1');
    });
  
    xit('should handle API errors gracefully', () => {
      cy.intercept('GET', '/api/data', { statusCode: 500 }).as('getDataError');
      cy.visit('/data');
      cy.wait('@getDataError');
      cy.get('.error-message').should('contain', 'Failed to load data');
    });
  });
