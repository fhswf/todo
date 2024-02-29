
describe('Erreichbarkeit Webseite', () => {
  it('seite aufrufen', ()  => {
    cy.visit('http://localhost:3000/todo.html');
    cy.title().should('eq', 'Todo Liste');
  })
})

beforeEach( () => {
  cy.visit('http://localhost:3000/todo.html');
})

describe('Frontend Tests-Aufbau der Webseite', () => {
  it('zeigt Titel', () => {
    cy.get('h1').should('contain', 'Todo Liste');
  });

  it('zeigt Liste der Todos', () => {
    cy.get('#todo-list').should('be.not.empty');
  });
  
  it('status des Todos angezeigt', () => {
    cy.get('button.status').should('be.visible');
  });
  
  it('datum der Todos angezeigt', () => {
    cy.get('div.due').should('be.visible');
  });
  
  it('button Bearbeiten vorhanden', () => {
    cy.get('button.edit').should('contain', 'Bearbeiten');
  });

  it('button Löschen vorhanden', () => {
    cy.get('button.delete').should('contain', 'Löschen');
  }); 

  it('überprüft, ob todo-input hat entsprechenden placeholder', () => { 
    cy.get('input#todo').should('have.attr', 'placeholder', 'Neue Aufgabe');
  })

  it('form für hinzufügen von neue todo ist vorhanden', () => { 
    cy.get('form#todo-form.new-todo').should('be.visible');
  })

});

describe('Fronted Tests - Actions mit Todos', () => {

  it('eine neue todo hinzufügen', () => {
    cy.get('input#todo').type('Tisch auswählen');
    cy.get('input#due').type('2024-10-20');
    cy.get('select#status').select('offen');
    cy.get('input[type="submit"]').click();

    cy.get('#todo-list').should('contain', 'Tisch auswählen');
  });

  it('Todo bearbeiten', () => {
    cy.get('#todo-65dce9eef19ba9a851b88597 button.edit').click();
    cy.get('#todo-65dce9eef19ba9a851b88597 input#todo').type('Übung 5 machen');
    cy.get('#todo-65dce9eef19ba9a851b88597 input#due').type('2024-06-01');
    cy.get('#todo-65dce9eef19ba9a851b88597 select#status').select('in Bearbeitung');
    cy.get('#todo-65dce9eef19ba9a851b88597 input[type="submit"]').click();

    cy.get('#todo-65dce9eef19ba9a851b88597 div.title').should('have.text', 'Übung 5 machen');
    cy.get('#todo-65dce9eef19ba9a851b88597 div.due').should('have.text', '2024-06-01');
    cy.get('#todo-65dce9eef19ba9a851b88597 button.status').should('have.text', 'in Bearbeitung');
  });

  it('Todo Status über Button bearbeiten', () => {
    cy.get('div#todo-65dce9eef19ba9a851b88596').find('button.status').click();

    cy.get('div#todo-65dce9eef19ba9a851b88596').find('button.status').should('not.have.text', 'erledigt').and('not.have.text', 'in Bearbeitung');
  });

  it('sollte eine Aufgabe in der Liste löschen', () => {
    cy.get('#todo-65dce9eef19ba9a851b88596 button.delete').click();

    cy.get('#todo-65dce9eef19ba9a851b88596').should('not.exist');
  });
});

describe('Todo API', () => {
  // Basis-URL der API
  const apiBaseUrl = 'http://localhost:3000/todo.html';

  it('holt alle Todos', function () {
    cy.request({
      url: apiBaseUrl,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('holt ein Todo per ID', function () {
    const testTodoId = '65dce9eef19ba9a851b88596';
    cy.request({
      url: `${apiBaseUrl}/${testTodoId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('_id', testTodoId);
    });
  });

  it('erstellt ein neues Todo', function () {
    const newTodo = {
      title: 'Neues Todo',
      due: '2023-01-01T00:00:00.000Z',
      status: 0,
    };
    cy.request({
      method: 'POST',
      url: apiBaseUrl,
      body: newTodo,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newTodo);
    });
  });

  it('aktualisiert ein Todo', function () {
    const todoToUpdate = {
      _id: '65dce9eef19ba9a851b88597',
      title: 'Aktualisiertes Todo',
      due: '2023-01-02T00:00:00.000Z',
      status: 1,
    };
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}/${todoToUpdate._id}`,
      body: todoToUpdate,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(todoToUpdate);
    });
  });

  it('löscht ein Todo', function () {
    const todoToDeleteId = '65dce9eef19ba9a851b88596';
    cy.request({
      method: 'DELETE',
      url: `${apiBaseUrl}/${todoToDeleteId}`,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
