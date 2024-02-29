# ToDo-Anwendung

## Gruppenmitglieder
- Roman Knjaskow
- Mike Görzen
- Florian Hees

# Dokumentation

## Vorgehensweise
Zu Beginn haben wir eine Kopie des ursprünglichen GitHub-Repositories erstellt. Nach Fertigstellung, haben wir die bestehende Anwendung sowie den dazugehörigen Code analysiert, um ein besseres Verständnis dafür zu entwickeln. Notwendig war dies unter anderem dadurch, dass wir gemäß der ersten Aufgabe automatisierte Tests erstellen sollten. Diese automatisierten Tests konnten in ihrer Breite nur bedacht, geplant und gewählt werden, durch das entsprechend zuvor angeeignete Verständnis der Anwendung. Aufgrund dieser Vorgehensweise, begannen wir vorerst mit der konzeptionellen Zusammenfassung aller wichtigen Testfälle und erstellten schließlich folgende Liste:
![image](https://github.com/fhswf/todo_roflme/assets/60848726/9281c3c1-5d29-4169-b46d-f89f5a1d59df)

Nach Erstellung dieser Liste der Testfälle, erfolgte die anschließende Umsetzung jener zu Code. Es ist anzumerken, dass einige dieser Testfälle bereits in der Datei vorhanden waren.

## Die gewählten Lösungen
- Konzeptionelle Erstellung einer Auflistung für Testfälle
- Umwandlung der konzeptionellen Auflistung der Testfälle zu Code, inklusive Überarbeitung und Reparatur der bereits bestehenden Testfälle
- Einrichtung einer GitHub-Action zur automatischen Durchführung der Testfälle
- Anlegen eines SonarQube Projektes für die anschließende Integration in eine GitHub-Action
- Auswertung der Ergebnisse
- Erstellung der Dokumentation

## Probleme und wie sie gelöst wurden
Die automatisierten Tests zu erstellen schien vorübergehend als Herausforderung. In der Datei waren bereits einige vorgefertigten Testfälle enthalten, von denen jedoch die meisten nicht wie gewünscht funktionierten. Beim Hinzufügen unserer eigenen definierten Testfälle, mussten daher auch die bestehenden überarbeitet und repariert werden. 

Auch die Integration von SonarQube erwies sich schwieriger als erwartet. Ursprünglich erstellten wir SonarQube außerhalb des FH-Repositories, wodurch unser Repository dort nicht als Projekt angelegt werden konnte. Die Lösung dessen bestand darin, das Projekt auf die Organisation fhswf zu übertragen. Diese Änderung führte jedoch dazu, dass Secret und Variablen nicht mehr eingetragen werden konnten, was ein neues Problem bildete. Hierbei bestand die Lösung darin, das Original-Repository fhswf/todo zu forken und das fehlerhafte Repository in das neue zu mergen. Zusätzlich musste ein neues Projekt in SonarQube angelegt werden. Diese Schritte ermöglichten es, das Secret und die Variablen hinzuzufügen. Trotzalledem muss erwähnt werden, dass dieser Prozess das Hinzufügen des neuen Schlüssels in die sonar-project.properties-Datei erforderte, da der vorherige nun nicht mehr verwendbar war.

## Ergebnisse der automatisierten Tests und SonarQube-Analysen
Sowohl die automatisierten Tests als auch die SonarQube-Analyse werden bei jedem Commit und Pull-Request durchgeführt. Die Ergebnisse fallen äußerst positiv aus. Insgesamt laufen alle 13 Tests erfolgreich durch. Folgend ist ein Beispiel eines automatisierten Durchlaufs der Tests:

### GET /todos (unautorisiert)
- ✓ sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird (12 ms)
### POST /todos (unautorisiert)
- ✓ sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird (11 ms)
### PUT /todos/:id (unautorisiert)
- ✓ sollte einen 401-Fehler zurückgeben, wenn ein fehlerhaftes Token bereitgestellt wird (24 ms)
### DELETE /todos/:id (unauthorisiert)
- ✓ sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird (3 ms)
### GET /todos
- ✓ sollte alle Todos abrufen (5 ms)
### GET /todos/:id
- ✓ sollte ein Todo abrufen (8 ms)
- ✓ sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde (3 ms)
### POST /todos
- ✓ sollte ein neues Todo erstellen (4 ms)
- ✓ sollte einen 400-Fehler zurückgeben, wenn das Todo unvollständig ist (4 ms)
### PUT /todos/:id
- ✓ sollte ein Todo aktualisieren (8 ms)
- ✓ sollte einen 400-Fehler zurückgeben, falls das Todo unvollständig ist (6 ms)
- ✓ sollte einen 400-Fehler zurückgeben, wenn das Todo ungültig ist (6 ms)
### DELETE /todos/:id
- ✓ sollte ein Todo löschen (10 ms)

Auch die SonarQube-Analyse hat positive Ergebnisse mit sich gebracht. Finden lässt sich diese unter folgendem Link:
https://hopper.fh-swf.de/sonarqube/dashboard?id=fhswf_todo_roflmi_AY3xGLRYWNlYFiIpzZUr
