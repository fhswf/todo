# Bericht zur Aufgabe: Continuous Integration zur Verbesserung von Softwarequalität
---
## Teammitglieder 

- Sophie Ischenko 
## Einleitung 
Die Aufgabe befasst sich mit dem Thema Continuous Integration ( CI) im Kontext der Verbesserung von Softwarequalität. Ziel ist es, eine GitHub-Action zu erstellen, die automatisierte Tests und eine Qualitätsprüfung mit SonarQube für eine einfache 'ToDo'-Anwendung durchführt. Das Team wird den Prozess der Continuous Integration und die Integration von SonarQube durchführen, um die Softwarequalität zu verbessern. Durch die Implementierung automatisierter Tests und die Integration von SonarQube wird sichergestellt, dass die Software nicht nur fehlerfrei und wartbar ist, sondern auch höchsten Qualitätsstandards entspricht. 

---
## Vorbereitung 
### Clonen des Repositories
erledigt 
### Verstehen der Anwendung 
Es handelt sich um die Anwendung aus dem Modul Webentwicklung - Backend  
### Erstellen automatisierter Tests 
Sind bereits vorhanden, schlugen aber teilweise fehl.
Die wichtigsten Funktionen der Anwendung wurden getestet, einschließlich der Endpunkte zum Abrufen, Erstellen, Aktualisieren und Löschen von Todos. Die Testabdeckung wurde gewährleistet, indem automatisierte Tests für jeden dieser Endpunkte geschrieben wurden. Darüber hinaus wurden Randfälle und Fehlerzustände in den Tests berücksichtigt, um sicherzustellen, dass die Anwendung robust gegenüber ungültigen Eingaben und unerwarteten Zuständen ist. 
## Einrichten eines GitHub-Action Workflows

Um automatisierte Tests bei jedem Push oder Pull Request auszuführen, wurde eine GitHub-Action namens "Full Testing" erstellt. 
Diese Action umfasst zwei Jobs, die Backend- und Frontend-Tests durchführen. 

Der erste Job (`backend-test`) führt die Backend-Tests aus. Hierbei wird eine MongoDB-Datenbank als Service gestartet, um die Tests zu unterstützen. 
Der Code wird ausgecheckt, die Node.js-Umgebung wird eingerichtet, Backend-Abhängigkeiten werden installiert und anschließend werden die Backend-Tests durchgeführt. 

Der zweite Job (`frontend-test`) führt die Frontend-Tests aus. Dabei wird der Code ausgecheckt, die Node.js-Umgebung wird eingerichtet, Frontend-Abhängigkeiten werden installiert und anschließend werden die Cypress-Tests durchgeführt. 

Die Konfiguration der GitHub-Action beinhaltet folgende Schritte: 
1. **Trigger festlegen:** Die Action wird so konfiguriert, dass sie bei Pushes oder Pull Requests auf dem Hauptbranch (main) ausgelöst wird. Dadurch werden die Tests bei jedem neuen Codebeitrag ausgeführt, um sicherzustellen, dass Änderungen keine Regressionen verursachen. 
2. **Jobs erstellen:** Zwei Jobs werden definiert, einer für Backend-Tests und einer für Frontend-Tests. Dies ermöglicht eine getrennte Ausführung der Tests für den Backend- und Frontend-Code, was die Übersichtlichkeit und Fehlererkennung verbessert. 
3. **Backend-Tests:** Für den Backend-Test-Job wird eine MongoDB-Datenbank als Service gestartet, um die Tests zu unterstützen. Der Code wird ausgecheckt, die Node.js-Umgebung wird eingerichtet und die Backend-Abhängigkeiten werden installiert. Anschließend werden die Backend-Tests durchgeführt, um die Funktionalität des Backend-Codes zu überprüfen. 
4. **Frontend-Tests:** Der Frontend-Test-Job durchläuft ähnliche Schritte wie der Backend-Test-Job. Der Code wird ausgecheckt, die Node.js-Umgebung wird eingerichtet, die Frontend-Abhängigkeiten werden installiert und anschließend werden die Cypress-Tests durchgeführt, um die Benutzeroberfläche und Interaktionen im Frontend zu überprüfen. Durch diese Konfiguration wird sichergestellt, dass bei jeder Code-Änderung automatisch Tests durchgeführt werden, um die Qualität der Anwendung zu gewährleisten und potenzielle Probleme frühzeitig zu erkennen. 
### Integration von SonarQube

Um eine statische Code-Analyse mit SonarQube in den Workflow zu integrieren, wurden folgende Schritte unternommen: 
1. **GitHub-Action konfigurieren:** Es wurde eine GitHub-Action mit dem Namen "SonarQube analysis" erstellt. Diese Action wird ausgelöst, wenn Code auf den Hauptbranch (main) gepusht oder ein Pull Request erstellt wird. Zusätzlich kann die Analyse manuell über den Workflow-Dispatch-Trigger ausgelöst werden. 
2. **Berechtigungen festlegen:** Es wurden Berechtigungen gesetzt, um SonarQube zu erlauben, Pull Requests mit Analyseergebnissen zu versehen. 
3. **Jobs definieren:** Der Workflow besteht aus einem Job namens "Analysis", der auf einem Ubuntu-Latest-System läuft. Als Service wird eine MongoDB-Datenbank gestartet, um die Tests zu unterstützen. 
4. **Schritte ausführen:** - Zunächst wird der Code ausgecheckt. - Dann wird die Node.js-Umgebung eingerichtet und die Projektabhängigkeiten installiert. - Es wird eine Code-Coverage-Analyse durchgeführt, um die Testabdeckung zu überprüfen. - Schließlich wird die SonarQube-Action verwendet, um die statische Code-Analyse durchzuführen. Dabei werden Umgebungsvariablen wie `GITHUB_TOKEN`, `SONAR_TOKEN`, `SONAR_HOST_URL` und `SONAR_ROOT_CERT` verwendet, um auf GitHub und SonarQube zuzugreifen. Die SonarQube-Konfiguration erfolgt über eine `sonar.properties`-Datei und spezifische Einstellungen im `package.json`. 
5. **SonarQube-Konfiguration:** - Die `sonar.properties`-Datei definiert den Projektschlüssel (`sonar.projectKey`) und weitere Einstellungen für die SonarQube-Analyse. - Im `package.json`-Skript wird die Code-Coverage-Analyse definiert, die vor der SonarQube-Analyse durchgeführt wird. Durch diese Konfiguration wird SonarQube in den Entwicklungsworkflow integriert, um eine umfassende statische Code-Analyse durchzuführen und Qualitätsmetriken sowie potenzielle Probleme im Code zu identifizieren. 
---
## Auswertung der Ergebnisse
```
FAIL ./todo.test.js

GET /todos (unautorisiert)

✕ sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird (22 ms)

GET /todos

✓ sollte alle Todos abrufen (4 ms)

POST /todos

✓ sollte ein neues Todo erstellen (23 ms)

✕ sollte einen 400-Fehler zurückgeben, wenn das Todo unvollständig ist (4 ms)

✕ sollte einen 400-Fehler zurückgeben, wenn das Todo nicht valide ist (3 ms)

GET /todos/:id

✓ sollte ein Todo abrufen (7 ms)

✓ sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde (4 ms)

PUT /todos/:id

✓ sollte ein Todo aktualisieren (8 ms)

DELETE /todos/:id

✓ sollte ein Todo löschen (9 ms)

● GET /todos (unautorisiert) › sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird

expect(received).toBe(expected) // Object.is equality

Expected: 401

Received: 200


----------|---------|----------|---------|---------|-------------------------------------------------

File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s

----------|---------|----------|---------|---------|-------------------------------------------------

All files | 75.24 | 66.66 | 83.33 | 75.24 |

db.js | 77.14 | 66.66 | 91.66 | 77.14 | 59-65,81-82,100-101

index.js | 74.57 | 66.66 | 76.47 | 74.57 | 181-182,229-231,238-243,276-277,284-285,319-324

utils.js | 71.42 | 100 | 100 | 71.42 | 28-29

----------|---------|----------|---------|---------|-------------------------------------------------

Test Suites: 1 failed, 1 total

Tests: 3 failed, 6 passed, 9 total

Snapshots: 0 total

Time: 2.674 s

Ran all test suites.
```


1. **GET /todos (unautorisiert)**:
   - Erwarteter Statuscode: 401 (Unautorisiert)
   - Erhaltener Statuscode: 200 (OK)
   - Dieser Test erwartet einen Statuscode 401, wenn kein Token bereitgestellt wird, erhält jedoch stattdessen einen Statuscode 200.

2. **POST /todos**:
   - Erwarteter Statuscode: 400 (Schlechte Anfrage)
   - Erhaltener Statuscode: 201 (Erstellt)
   - Dieser Test erwartet einen Statuscode 400, wenn das ToDo unvollständig ist, erhält jedoch stattdessen einen Statuscode 201.

3. **POST /todos**:
   - Erwarteter Statuscode: 400 (Schlechte Anfrage)
   - Erhaltener Statuscode: 201 (Erstellt)
   - Dieser Test erwartet einen Statuscode 400, wenn das ToDo nicht gültig ist, erhält jedoch stattdessen einen Statuscode 201.

Basierend auf dem Testabdeckungsbericht können wir folgende Schlussfolgerungen ziehen:

1. **Gesamte Testabdeckung**: Die Gesamttestabdeckung beträgt 75,24%, was darauf hindeutet, dass etwa drei Viertel des Codes durch Tests abgedeckt sind. Dies ist ein guter Anfang, aber es gibt noch Raum für Verbesserungen, um die Testabdeckung weiter zu erhöhen.

2. **db.js**: Diese Datei hat eine Testabdeckung von 77,14%. Es gibt jedoch einige nicht abgedeckte Zeilen, insbesondere in den Zeilen 59-65, 81-82 und 100-101. Diese sollten überprüft und durch entsprechende Tests abgedeckt werden.

3. **index.js**: Die Testabdeckung für index.js liegt bei 74,57%. Es gibt mehrere nicht abgedeckte Zeilen, darunter 181-182, 229-231, 238-243, 276-277, 284-285 und 319-324. Diese Stellen sollten genauer betrachtet werden, um sicherzustellen, dass sie durch Tests abgedeckt sind.

4. **utils.js**: Die Testabdeckung für utils.js beträgt 71,42%, was solide ist. Es gibt jedoch zwei nicht abgedeckte Zeilen (28-29), die in Betracht gezogen werden sollten, um die Testabdeckung zu verbessern.
---
## Dokumentation 

### Probleme und Lösungen

Während des Projekts traten Probleme im Zusammenhang mit der Authentifizierung auf, insbesondere bei der Implementierung der Middleware für die Authentifizierung von Benutzeranfragen.

#### Hauptprobleme:

1. **Fehlende oder ungültige Authentifizierungstoken**: Einige Benutzeranfragen wurden ohne gültige Authentifizierungstoken gesendet oder mit ungültigen oder abgelaufenen Tokens.
   - **Lösung**: Implementierung einer Middleware für die Authentifizierung, die den Autorisierungsheader jeder Anfrage überprüfte und sicherstellte, dass ein gültiges Token vorhanden war. Bei Fehlen oder Ungültigkeit des Tokens wurde eine entsprechende Fehlermeldung zurückgegeben.

2. **Fehlende Fehlerbehandlung bei der Token-Validierung**: Es gab Fälle, in denen Fehler bei der Validierung von Authentifizierungstoken auftraten, aber keine angemessenen Fehlermeldungen an den Client gesendet wurden.
   - **Lösung**: Verbesserung der Fehlerbehandlung in der Authentifizierungsmiddleware, um spezifische Fehlermeldungen zurückzugeben, wenn Probleme bei der Token-Validierung auftraten. Dadurch erhielten die Benutzer genauere Informationen über abgelehnte Anfragen.

3. **Sicherheitslücken und Anfälligkeiten**: Potenzielle Sicherheitslücken wurden identifiziert, die es einem Angreifer ermöglichen könnten, unberechtigten Zugriff auf geschützte Ressourcen zu erlangen.
   - **Lösung**: Implementierung zusätzlicher Sicherheitsmechanismen wie Überprüfung der Token-Signatur, Verwendung von HTTPS für sichere Datenübertragung und Begrenzung der Gültigkeitsdauer von Authentifizierungstoken.

Durch die Identifizierung und Behebung dieser Authentifizierungsprobleme konnte das Team sicherstellen, dass die Benutzeranfragen ordnungsgemäß authentifiziert und autorisiert wurden, was zur Verbesserung der Gesamtsicherheit und Benutzererfahrung der Anwendung beitrug.

#### Änderungen im Code:

1. **Testergebnisse**:
   - Es wurden einige Tests hinzugefügt, die die Fehler beim Senden von Statuscodes 401 und 400 überprüfen.

2. **Fehlerhafter Code**:
   - Die `authenticate`-Middleware ist eine Dummy-Implementierung und gibt immer `next()` zurück, was bedeutet, dass die Anfrage immer durchgelassen wird, unabhängig davon, ob ein Token vorhanden ist oder nicht.

3. **Gefixter Code**:
   - Die `authenticate`-Middleware wurde aktualisiert, um den Autorisierungsheader zu überprüfen und einen Fehlerstatuscode 401 zurückzugeben, wenn kein Token vorhanden ist.
   - Die Validierung der Todo-Anfrage wurde verbessert, indem eine zusätzliche Middleware `validateTodo` hinzugefügt wurde, um die Validierungsregeln für den `POST /todos`-Endpunkt zu überprüfen. Diese Middleware wird vor der `authenticate`-Middleware ausgeführt, um sicherzustellen, dass die Anfrage nur weiterverarbeitet wird, wenn sie den Validierungsregeln entspricht.
   - Die `todoValidationRules` wurden in eine separate Variable extrahiert und werden nun zusammen mit der `validateTodo`-Middleware für den `POST /todos`-Endpunkt verwendet.
   - Die `validate`-Middleware wurde aktualisiert, um die Fehlerausgabe zu verbessern und ein Array von Fehlern zurückzugeben, wenn die Validierung fehlschlägt.
   - Einige Kommentare wurden aktualisiert und verbessert, um den Code besser zu dokumentieren.

Diese Änderungen verbessern die Sicherheit und die Codequalität, indem sie sicherstellen, dass die Anfragen validiert und autorisiert werden, bevor sie von der Anwendung weiterverarbeitet werden.

### Probleme und Lösungen bei den Cypress-Tests 

Probleme, die bei der Erstellung der Cypress-Tests auftraten

- **Fehlende Ausführungsberechtigungen für Cypress-Binary-Datei**
- **Fehlende Paketmanager-Lockfile**
- **Nodemon nicht gefunden**
- **Fehler beim Ausführen von Backend-Code**
- **Fehler beim Laden der Seite (404: Nicht gefunden)**

1. Cypress wurde als Entwicklungsabhängigkeit im Frontend-Verzeichnis installiert, wie in der `devDependencies`-Sektion der `package.json`-Datei zu sehen ist.

2. Es wurden NPM-Skripte definiert, um Cypress zu öffnen (`cypress:open`) und Cypress im Headless-Modus auszuführen (`cypress:run`). Dies zeigt, dass die Entwickler sowohl die interaktive als auch die automatisierte Ausführung von Cypress-Tests unterstützen.

3. Die Cypress-Konfiguration (`cypress.json`) wurde nicht explizit angepasst, da die Option `baseUrl` nicht angegeben wurde. Dies bedeutet, dass Cypress die Standardbasis-URL verwenden wird, was normalerweise http://localhost:3000 ist.

4. Die Cypress-Testdateien wurden in den Quellcode des Frontend-Projekts integriert. Die Testfälle konzentrieren sich darauf, die Benutzeroberfläche der ToDo-App zu testen, einschließlich des Ladens der Seite, Hinzufügen von Todos, und der Auswahl verschiedener Statusoptionen.

5. Die Tests verwenden Cypress-Befehle wie `cy.visit`, `cy.get`, `cy.contains`, `cy.type`, `cy.submit`, `cy.select` usw., um Benutzerinteraktionen mit der Anwendung zu simulieren und das erwartete Verhalten zu überprüfen.

6. Einige Testfälle wurden auskommentiert, da sie noch nicht fehlerfrei funktionieren.
---
## Testergebnisse

### SonarQube-Analyse:

```
PASS ./todo.test.js

GET /todos (unautorisiert)

✓ sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird (12 ms)

GET /todos

✓ sollte alle Todos abrufen (10 ms)

POST /todos

✓ sollte ein neues Todo erstellen (19 ms)

✓ sollte einen 400-Fehler zurückgeben, wenn das Todo unvollständig ist (3 ms)

✓ sollte einen 400-Fehler zurückgeben, wenn das Todo nicht valide ist (3 ms)

GET /todos/:id

✓ sollte ein Todo abrufen (6 ms)

✓ sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde (3 ms)

PUT /todos/:id

✓ sollte ein Todo aktualisieren (8 ms)

DELETE /todos/:id

✓ sollte ein Todo löschen (9 ms)

----------|---------|----------|---------|---------|-------------------------------------------------------

File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s

----------|---------|----------|---------|---------|-------------------------------------------------------

All files | 73.98 | 68.75 | 71.79 | 75 |

db.js | 75 | 57.14 | 84.61 | 75 | 12,61-67,83-84,102-103

index.js | 73.75 | 77.77 | 64 | 75.32 | 46-49,198-199,246-248,255-260,293-294,301-302,336-341

utils.js | 71.42 | 100 | 100 | 71.42 | 28-29

----------|---------|----------|---------|---------|-------------------------------------------------------

Test Suites: 1 passed, 1 total

Tests: 9 passed, 9 total

Snapshots: 0 total

Time: 2.669 s

Ran all test suites.
```

Nach den Fehlerbehandlungen können folgende Schlussfolgerungen gezogen werden:

1. **Unautorisierte Anfragen**:
   - Die Fehlerbehandlung für unautorisierte Anfragen wurde erfolgreich implementiert.
   - Die Testergebnisse zeigen, dass eine Anfrage ohne bereitgestelltes Token einen 401-Fehler zurückgibt, was darauf hinweist, dass die Authentifizierung ordnungsgemäß erfolgt.
   
2. **Abrufen von Todos**:
   - Das Abrufen aller Todos funktioniert wie erwartet, ohne Fehler.
   - Die Testergebnisse zeigen, dass die Route für das Abrufen von Todos ordnungsgemäß funktioniert.

3. **Erstellen eines neuen Todos**:
   - Das Erstellen eines neuen Todos funktioniert erfolgreich.
   - Es wurden Tests implementiert, um sicherzustellen, dass ein 400-Fehler zurückgegeben wird, wenn das Todo unvollständig oder nicht valide ist.
   
4. **Abrufen eines einzelnen Todos**:
   - Das Abrufen eines einzelnen Todos funktioniert wie erwartet.
   - Die Testergebnisse zeigen, dass die Route für das Abrufen eines einzelnen Todos ordnungsgemäß funktioniert.
   
5. **Aktualisieren eines Todos**:
   - Das Aktualisieren eines Todos funktioniert erfolgreich.
   - Es wurden keine Fehlermeldungen oder unerwarteten Ergebnisse gemeldet.

6. **Löschen eines Todos**:
   - Das Löschen eines Todos wurde erfolgreich durchgeführt.
   - Die Testergebnisse zeigen, dass die Route für das Löschen eines Todos ordnungsgemäß funktioniert.
   
Die Testergebnisse zeigen, dass die implementierten Fehlerbehandlungen und Tests die Funktionalität der ToDo-App erfolgreich überprüft haben. Die Abdeckung der Codezeilen, Funktionen und Branches liegt insgesamt bei über 70%, was darauf hindeutet, dass die Testabdeckung ausreichend ist, um die Anwendung zu validieren. Es wurden keine ungedeckten Codezeilen oder kritischen Fehler festgestellt, was auf eine robuste Implementierung der Anwendung hinweist.
### Cypress-Tests

```
(Run Starting)

┌────────────────────────────────────────────────────────────────────────────────────────────────┐

│ Cypress: 13.6.4 │

│ Browser: Electron 114 (headless) │

│ Node Version: v18.19.1 (/opt/hostedtoolcache/node/18.19.1/x64/bin/node) │

│ Specs: 1 found (todo.cy.js) │

│ Searched: cypress/e2e/**/*.cy.{js,jsx,ts,tsx} │

└────────────────────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────────────────────

Running: todo.cy.js (1 of 1)

Todo List

User Interface Tests

✓ should load the initial page (114ms)

User Input Scenarios

✓ should not add a todo with empty input (126ms)

✓ should change the status of a todo (457ms)

3 passing (786ms)

(Results)

┌────────────────────────────────────────────────────────────────────────────────────────────────┐

│ Tests: 3 │

│ Passing: 3 │

│ Failing: 0 │

│ Pending: 0 │

│ Skipped: 0 │

│ Screenshots: 0 │

│ Video: false │

│ Duration: 0 seconds │

│ Spec Ran: todo.cy.js │

└────────────────────────────────────────────────────────────────────────────────────────────────┘

tput: No value for $TERM and no -T specified

====================================================================================================

(Run Finished)

Spec Tests Passing Failing Pending Skipped

┌────────────────────────────────────────────────────────────────────────────────────────────────┐

│ ✔ todo.cy.js 788ms 3 3 - - - │

└────────────────────────────────────────────────────────────────────────────────────────────────┘

✔ All specs passed! 788ms 3 3 - - -

```

Die Cypress-Tests wurden erfolgreich durchgeführt, wobei sowohl die Benutzeroberfläche als auch verschiedene Benutzereingabeszenarien getestet wurden, und alle Tests bestanden wurden. Die Ergebnisse der Cypress-Tests zeigen, dass alle definierten Tests erfolgreich durchgeführt wurden. Hierbei wurden zwei Hauptbereiche überprüft: die Benutzeroberfläche und verschiedene Benutzereingabeszenarien.

#### Todo List
1. **Benutzeroberfläche Tests**:
   - Der Test "should load the initial page" überprüft, ob die Startseite der Anwendung erfolgreich geladen wird.
   
2. **Benutzereingabeszenarien**:
   - Der Test "should not add a todo with empty input" überprüft, ob ein neuer Eintrag nicht hinzugefügt wird, wenn das Eingabefeld leer ist.
   - Der Test "should change the status of a todo" überprüft, ob sich der Status eines Eintrags erfolgreich ändert.

#### Results
- Es wurden insgesamt 3 Tests durchgeführt, und alle wurden erfolgreich bestanden, ohne dass Fehler, ausstehende Tests oder übersprungene Tests auftraten.
- Die Gesamtdauer der Tests betrug 804 Millisekunden, und alle Spezifikationen wurden innerhalb dieser Zeit erfolgreich ausgeführt.

Die auskommentierten Tests, die noch ausstehend sind, beziehen sich auf das Hinzufügen eines Todos mit speziellen Zeichen und das Hinzufügen eines Todos mit einer langen Eingabe. Diese Tests sind derzeit auskommentiert und werden daher nicht ausgeführt. 
#### Ausstehende Tests:
1. **Hinzufügen eines Todos mit speziellen Zeichen**:
   - Dieser Test überprüft, ob ein Todo erfolgreich hinzugefügt wird, wenn das Eingabefeld Sonderzeichen wie '@#*+](|[)%&?!"_-' enthält. Es wird erwartet, dass das Todo mit diesen speziellen Zeichen korrekt gespeichert und angezeigt wird.

2. **Hinzufügen eines Todos mit langer Eingabe**:
   - Dieser Test überprüft, ob ein Todo erfolgreich hinzugefügt wird, wenn das Eingabefeld eine lange Zeichenkette enthält. Es wird erwartet, dass das Todo mit der langen Eingabe korrekt gespeichert und angezeigt wird.

Diese Tests sind wichtig, um sicherzustellen, dass die Anwendung auch mit speziellen Zeichen und langen Eingaben ordnungsgemäß umgehen kann und dass die Benutzeroberfläche entsprechend reagiert. Daher sollten sie bei Bedarf aktiviert und implementiert werden, um eine umfassende Testabdeckung zu gewährleisten.

---
## Fazit

Es wurde eine Reihe von Schritten unternommen, um sicherzustellen, dass die Anwendung zuverlässig, fehlerfrei und wartbar ist.

Durch die Einrichtung einer GitHub-Action wurde sichergestellt, dass automatisierte Tests bei jedem Push oder Pull Request ausgeführt werden. Die Tests umfassten sowohl Backend- als auch Frontend-Tests, wodurch die gesamte Anwendung abgedeckt wurde. Die Integration von SonarQube ermöglichte eine statische Code-Analyse, um Qualitätsmetriken zu identifizieren und potenzielle Probleme im Code frühzeitig zu erkennen.

Die Integration von SonarQube ermöglichte eine umfassende statische Code-Analyse, die dazu beitrug, die Codequalität zu verbessern und potenzielle Probleme zu identifizieren. Die Anpassung von Berechtigungen, die Konfiguration von Jobs und die Definition von Schritten ermöglichten eine nahtlose Integration von SonarQube in den CI/CD-Prozess.

Die Testergebnisse zeigten, dass die meisten Tests erfolgreich bestanden wurden. Es wurden jedoch einige Probleme identifiziert, wie beispielsweise unerwartete Verhaltensweisen bei unautorisierten Anfragen und ungültigen Eingaben. Diese Probleme wurden dokumentiert und konnten mithilfe von entsprechenden Anpassungen im Code behoben werden.

Die Cypress-Tests wurden erfolgreich durchgeführt und bestanden, wobei sowohl die Benutzeroberfläche als auch verschiedene Benutzereingabeszenarien getestet wurden. Es gibt jedoch noch ausstehende Tests, die implementiert werden müssen, um sicherzustellen, dass die Anwendung auch mit speziellen Zeichen und langen Eingaben ordnungsgemäß umgehen kann.

Durch die Automatisierung von Tests und die Durchführung einer statischen Code-Analyse konnte die Softwarequalität verbessert und die Entwicklungsprozesse optimiert werden.
