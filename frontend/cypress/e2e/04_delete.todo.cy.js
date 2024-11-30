describe('To-Do App', () => {
  beforeEach( () => {
    // Besuche die Anwendung vor jedem Test
    cy.visit('http://localhost:3000/todo.html');
  });

  it('delete todo', () => {
    const newItem = 'delete me';

    // To-Do hinzufügen
    cy.get('#input').type(newItem);
    cy.get('input[type="submit"]').click();

    // Lösche das Element
    cy.contains(newItem).parent().find('.delete').click();

    // Überprüfen, ob das Element gelöscht wurde
    cy.get('.todo-list').should('not.contain', newItem);
  });
});