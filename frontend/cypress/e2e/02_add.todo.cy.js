describe('todo app add tests', () => {
  let todoItemAdd = {
    id: 0,
    title: 'cypress-add',
    date: '2024-01-01',
    dateText: '01/01/2024',
    state: 0, // open
    stateText: 'offen',
  }

  before(() => {
    // Setzen Sie eine globale Variable
    Cypress.env('todoItemAdd', {
      title: 'cypress-add',
      date: '2024-01-01',
      state: 'offen', // Text für den Status
      stateText: 'offen',
    });
  });

  beforeEach( () => {
    // visit the application before each test
    cy.visit('http://127.0.0.1:3000/todo.html');
  });

  it('create todo cypress-add', () => {
    // add new todo
    cy.get('#todo-form input#todo').type(todoItemAdd.title);
    cy.get('#todo-form input#due').type(todoItemAdd.date);
    cy.get('#todo-form select#status').select(todoItemAdd.state);
    cy.get('#todo-form input[type="submit"]').click();

    // check if the new element exists
    cy.get('#todo-list .due').last().invoke('text').then((text) => {
      const dateText = text.trim();
      const date = new Date(dateText);
      const expectedDate = new Date(todoItemAdd.date);

      // check if the date is correct
      expect(date.toLocaleDateString()).to.equal(expectedDate.toLocaleDateString());
    });

    cy.get('#todo-list .title').should('contain', todoItemAdd.title)
    cy.get('#todo-list .status').should('contain', todoItemAdd.stateText);
  });

  it('check form reset', () => {
    // check if the form is reset
    cy.get('#todo-form input#due').should('have.value', '2024-12-04');
    cy.get('#todo-form select#status').should('have.value', '0');
    cy.get('#todo-form input#todo').should('have.value', '');
  });

  it('should not create empty todo', () => {
    // add empty todo
    cy.get('#todo-form input[type="submit"]').click();

    // check if the element was not added
    cy.get('#todo-list').children().filter((index, element) => {
      return Cypress.$(element).text().trim() === '';
    }).should('have.length', 0);
  });
});