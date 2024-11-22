describe('Responsive Design Tests', () => {
    const viewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1280, height: 720 },
    ];
  
    viewports.forEach((viewport) => {
      it(`should render correctly on ${viewport.name}`, () => {
        cy.viewport(viewport.width, viewport.height);
        cy.visit('/todo.html');
        cy.get('#todo').should('be.visible');
        cy.get('#due').should('be.visible');
        cy.get('#status').should('be.visible');
      });
    });
  });
