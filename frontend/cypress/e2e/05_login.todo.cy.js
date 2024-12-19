describe('Todo App', () => {
  it('check if checkLogin is state 401', () => {
    cy.intercept('GET', '/todos', {
      statusCode: 401,
      body: {}
    }).as('getTodos');

    cy.visit('http://127.0.0.1:3000/todo.html');

    cy.wait('@getTodos').then((interception) => {
      expect(interception.response.statusCode).to.eq(401);
    });
  });
});
