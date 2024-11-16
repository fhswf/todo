describe('Navigation Tests', () => {
    it('should navigate to the About page', () => {
      cy.visit('/');
      cy.get('nav').contains('About').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('contain', 'About Us');
    });
  
    it('should display a 404 page for invalid routes', () => {
      cy.visit('/non-existent-page', { failOnStatusCode: false });
      cy.get('h1').should('contain', '404');
    });
  });