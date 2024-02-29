Alena Felde: 

Forgehensweise: Repository forken, in Visual Studio öffnen. Anwendung ansehen, wählen passenden Test-Framework, Test-Cases schreiben und prüfen. 
Als Framework wurd Cypress ausgewählt, da er gut für E2E Tests mit Javascript passt.

Probleme hatte ich überall, von Anwendung ins Laufen bringen, bis die passende yml. Datei für Actions schreiben. 
Ich hatte vorher mit Docker nicht gearbeitet, deswegen fand ich Aufgabe äußerst schwierig. 
Die Lösung für Probleme habe ich geoogelt. 

Sonarqube konnte ich nicht einrichten, da ich mich nicht autorizieren konnte. Fehlermeldung: You're not authorized to access this page. Please contact the administrator. Reason: 'alena-fel' must be a member of at least one organization: 'fhswf'

Ergebnisse von den Tests: 

Laut Actions: 
1) Frontend Tests-Aufbau der Webseite
       status des Todos angezeigt:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `button.status`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:23:28)

  2) Frontend Tests-Aufbau der Webseite
       datum der Todos angezeigt:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `div.due`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:27:22)

  3) Frontend Tests-Aufbau der Webseite
       button Bearbeiten vorhanden:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `button.edit`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:31:26)

  4) Frontend Tests-Aufbau der Webseite
       button Löschen vorhanden:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `button.delete`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:35:28)

  5) Fronted Tests - Actions mit Todos
       Todo bearbeiten:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `#todo-65dce9eef19ba9a851b88597 button.edit`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:60:7)

  6) Fronted Tests - Actions mit Todos
       Todo Status über Button bearbeiten:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `div#todo-65dce9eef19ba9a851b88596`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:72:7)

  7) Fronted Tests - Actions mit Todos
       sollte eine Aufgabe in der Liste löschen:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `#todo-65dce9eef19ba9a851b88596 button.delete`, but never found it.
      at Context.eval (webpack://todo/./cypress/e2e/spec.cy.js:78:7)
Hier wurde mehrere Tests bei mir local durchlaufen.  Die Test - Actions mit Todos weisen Fehler auf, diese mussen im Code behoben worden. In meisten Fällen sind die Buttons nicht anklickbar.

Für die Backend waren Test mit Jest: 
In den Code muss man Ausnahmen definieren. 

FAIL ./todo.test.js
  GET /todos (unautorisiert)
    ✕ sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird (22 ms)
  GET /todos
    ✓ sollte alle Todos abrufen (5 ms)
  POST /todos
    ✓ sollte ein neues Todo erstellen (22 ms)
    ✕ sollte einen 400-Fehler zurückgeben, wenn das Todo unvollständig ist (4 ms)
    ✕ sollte einen 400-Fehler zurückgeben, wenn das Todo nicht valide ist (3 ms)
  GET /todos/:id
    ✓ sollte ein Todo abrufen (6 ms)
    ✓ sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde (4 ms)
  PUT /todos/:id
    ✓ sollte ein Todo aktualisieren (7 ms)
  DELETE /todos/:id
    ✓ sollte ein Todo löschen (9 ms)

  ● GET /todos (unautorisiert) › sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird

    expect(received).toBe(expected) // Object.is equality

    Expected: 401
    Received: 200

      13 |         const response = await request(app).get('/todos'); // Kein Authorization-Header
      14 |
    > 15 |         expect(response.statusCode).toBe(401);
         |                                     ^
      16 |         expect(response.body.error).toBe('Unauthorized');
      17 |     });
      18 | });

      at Object.toBe (todo.test.js:15:37)

  ● POST /todos › sollte einen 400-Fehler zurückgeben, wenn das Todo unvollständig ist

    expect(received).toBe(expected) // Object.is equality

    Expected: 400
    Received: 201

      57 |             .send(newTodo);
      58 |
    > 59 |         expect(response.statusCode).toBe(400);
         |                                     ^
      60 |         expect(response.body.error).toBe('Bad Request');
      61 |     });
      62 |

      at Object.toBe (todo.test.js:59:37)

  ● POST /todos › sollte einen 400-Fehler zurückgeben, wenn das Todo nicht valide ist

    expect(received).toBe(expected) // Object.is equality

    Expected: 400
    Received: 201

      74 |             .send(newTodo);
      75 |
    > 76 |         expect(response.statusCode).toBe(400);
         |                                     ^
      77 |         expect(response.body.error).toBe('Bad Request');
      78 |     });
      79 | }); 0

      at Object.toBe (todo.test.js:76:37)

Test Suites: 1 failed, 1 total
Tests:       3 failed, 6 passed, 9 total
Snapshots:   0 total
Time:        3.075 s
Ran all test suites.

Zeitlich habe ich jetzt nicht geschafft, die Fehler zu beheben und vollständigen Bericht zu schreiben. 
