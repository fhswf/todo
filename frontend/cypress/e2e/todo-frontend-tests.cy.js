describe('Todo List', () => {
    it('Adds a new todo', () => {
     cy.visit('/todo.html'); 
     it('loads the initial page', () => {
      cy.contains('h1', 'Todo Liste')
    })

    it('allows users to add a new todo', () => {
      cy.get('#todo').type('Neues Todo von Cypress')
      cy.get('#due').type('2025-01-01')
      cy.get('#status').select('offen')
      cy.get('form').submit()
      cy.contains('.todo .title', 'Neues Todo von Cypress')
  })

});
});


describe('UI Tests', () => {
  it('changes the status of a todo', () => {
    cy.visit('/todo.html');
  
    cy.get('#status').select('offen');
    cy.get('#status').should('have.value', '0');
    cy.get('#status').select('in Bearbeitung');
    cy.get('#status').should('have.value', '1');
    cy.get('#status').select('erledigt');
    cy.get('#status').should('have.value', '2');
  });
});



describe('Form Input Test - Normal Input', () => {
  it('Adds a new todo', () => {
   cy.visit('/todo.html'); 
   it('loads the initial page', () => {
    cy.contains('h1', 'Todo Liste')
  })

  it('allows users to add a new todo', () => {
    cy.get('#todo').type('Neues Todo von Cypress1234')
    cy.get('#due').type('2025-02-02')
    cy.get('#status').select('offen')
    cy.get('form').submit()
    cy.contains('.todo .title', 'Neues Todo von Cypress1234')
    cy.contains('.todo .due', '2025-02-02')
  })
});
});

describe('Form Input Test - Empty Input', () => {
  it('Adds a new todo', () => {
   cy.visit('/todo.html'); 
   it('loads the initial page', () => {
    cy.contains('h1', 'Todo Liste')
  })

  it('allows users to add a new todo', () => {
    cy.get('#todo').clear();
    cy.get('#due').clear();
    cy.get('#status').select('offen')
    cy.get('form').submit()
    cy.get('.todo .title').should('not.contain', ''); 
    
  })
});
});

describe('Form Input Test - Special Characters', () => {
  it('Adds a new todo', () => {
   cy.visit('/todo.html'); 
   it('loads the initial page', () => {
    cy.contains('h1', 'Todo Liste')
  })

  it('allows users to add a new todo', () => {
    cy.get('#todo').type('!@#$%^&*()_+');
    cy.get('#due').type('2024-12-31');
    cy.get('#status').select('erledigt');
    cy.get('#todo-form').submit();
    cy.get('.todo .title').should('contain', '!@#$%^&*()_+');
    
  })
});
});

describe('Todo deletion', () => {
  it('Adds a new todo', () => {
    cy.visit('/todo.html'); 
    it('loads the initial page', () => {
     cy.contains('h1', 'Todo Liste')
   })
  it('should delete a todo', () => {
      cy.get('#todo').type('Todo delete')
      cy.get('#due').type('2025-02-02')
      cy.get('#status').select('offen')
      cy.get('form').submit()

      cy.contains('.title', 'Todo delete').siblings('.actions').find('.delete').click();

      // Überprüfe, ob der Todo-Eintrag nach dem Löschen nicht mehr auf der Seite ist
      cy.get('.title').contains('Todo delete').should('not.exist');
  })
});
});