describe('todo app update tests', () => {
  let todoItemUpdate = {
    id: '',
    title: 'cypress-update',
    date: '2024-01-01',
    state: 0, // open
    stateText: 'offen',
  }

  beforeEach( () => {
    // visit the application before each test
    cy.visit('http://127.0.0.1:3000/todo.html');
  });

  it('update todo state to "in progress" from button', () => {
    // add update todo
    cy.get('#todo-form input#todo').type(todoItemUpdate.title);
    cy.get('#todo-form input#due').type(todoItemUpdate.date);
    cy.get('#todo-form select#status').select(todoItemUpdate.state);
    cy.get('#todo-form input[type="submit"]').click();

    // check if the new element exists
    cy.get('#todo-list').should('contain', todoItemUpdate.title);

    // get id of the new element
    cy.get('#todo-list .todo').last().invoke('attr', 'id')
    .then((id) => {
      cy.log('get id of todo item: ' + id);
      todoItemUpdate.id = id;

       // set the new element to "in progress"
      cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.status').click();

      // check if the element is marked as "in progress"
      todoItemUpdate.stateText = 'in Bearbeitung';
      todoItemUpdate.state = 1;
      cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.status').should('have.text', todoItemUpdate.stateText);
    });
  });

  it('update todo state to "finished" from button', () => {
    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // set the new element to "finished"
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.status').click();

    // check if the element is marked as "finished"
    todoItemUpdate.stateText = 'erledigt';
    todoItemUpdate.state = 2;
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.status').should('have.text', todoItemUpdate.stateText);
  });

  it('update todo check form load', () => {
    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // edit the element
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

    // check if the form is loaded correctly
    cy.get('#todo-form input#todo').should('have.value', todoItemUpdate.title);
    cy.get('#todo-form input#due').should('have.value', todoItemUpdate.date);
    cy.get('#todo-form select#status').should('have.value', todoItemUpdate.state);
  });

  it('check list count after update', () => {
    let childrenCount = 0;

    // get the number of todos
    cy.get('#todo-list').children().its('length').then((length) => {
        cy.log('count todo items' + length);
        childrenCount = length;

        // check if the element exists
        cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

        // edit the element
        cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

        // submit changes
        cy.get('#todo-form input[type="submit"]').click();

        // check if the list count is the same
        cy.get('#todo-list').children().should('have.length', childrenCount);
      });
  });

  it('update todo date to "2024-12-01" formular', () => {
    todoItemUpdate.date = '2024-12-01';

    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // edit the element
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

    // update date
    cy.get('#todo-form input#due').type(todoItemUpdate.date);

    // submit changes
    cy.get('#todo-form input[type="submit"]').click();

    // check if the element was changed
    cy.get(`#todo-list #${todoItemUpdate.id} .due`).should('have.text', new Date(todoItemUpdate.date).toLocaleDateString());
  });

  it('update todo text to "cypress-update-updated" formular', () => {
    todoItemUpdate.title = 'cypress-update-updated';

    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // edit the element
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

    // update text
    cy.get('#todo-form input#todo').type('-updated');

    // submit changes
    cy.get('#todo-form input[type="submit"]').click();

    // check if the element was changed
    cy.get(`#todo-list #${todoItemUpdate.id} .title`).should('have.text', todoItemUpdate.title);
  });

  it('update todo state to "open" formular', () => {
    todoItemUpdate.state = 0;
    todoItemUpdate.stateText = 'offen';

    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // edit the element
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

    // update state
    cy.get('#todo-form select#status').select(todoItemUpdate.state);

    // submit changes
    cy.get('#todo-form input[type="submit"]').click();

    // check if the element was changed
    cy.get(`#todo-list #${todoItemUpdate.id} button.status`).should('have.text', todoItemUpdate.stateText);
  });

  it('update todo state to "at work" formular', () => {
    todoItemUpdate.state = 1;
    todoItemUpdate.stateText = 'in Bearbeitung';

    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // edit the element
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

    // update state
    cy.get('#todo-form select#status').select(todoItemUpdate.state);

    // submit changes
    cy.get('#todo-form input[type="submit"]').click();

    // check if the element was changed
    cy.get(`#todo-list #${todoItemUpdate.id} button.status`).should('have.text', todoItemUpdate.stateText);
  });

  it('update todo state to "finished" formular', () => {
    todoItemUpdate.state = 2;
    todoItemUpdate.stateText = 'erledigt';

    // check if the element exists
    cy.get(`#todo-list #${todoItemUpdate.id}`).should('exist');

    // edit the element
    cy.get(`#todo-list #${todoItemUpdate.id}`).find('button.edit').click();

    // update state
    cy.get('#todo-form select#status').select(todoItemUpdate.state);

    // submit changes
    cy.get('#todo-form input[type="submit"]').click();

    // check if the element was changed
    cy.get(`#todo-list #${todoItemUpdate.id} button.status`).should('have.text', todoItemUpdate.stateText);
  });
});