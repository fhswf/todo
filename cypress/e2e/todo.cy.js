describe('manage todos', () => {
  it('create a todo', () => {
    cy.visit('http://localhost:3000/todo.html')
    cy.get('#todo').type('New Todo!')
    cy.get('input[type=submit]').click()

    cy.wait(1000).then(() => {
      cy.get('.todo .title').should('contain', 'New Todo!')
    })
  })
})