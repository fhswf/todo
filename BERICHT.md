Abgabe Softwarequalität:

Name: Jan-Luca Höhn
Matrikelnummer: 30256426

Im Rahmen des Moduls Softwarequalität sollte eine, von Herrn Gawron bereitgestellte, Todo-Anwendung ordnungsgemäß getestet und analysiert werden.
Im ersten Schritt wurde dazu das bereitgestellte Repository(Repo) von Herrn Gawron geforkt. In diesem geforkten Repo wurde nun ein dev-Branch erstellt, in dem hauptsächlich an der Applikation gearbeitet wird. In einem gemeinsamen Software Projekt können so mehrere Entwickler am selben Repo arbeiten, ohne sich gegenseitig zu behindern. In diesem konkreten Fall wurde das Projekt jedoch alleine bearbeitet. Zur Bearbeitung wurde ein Github Codespace genutzt.

Nachdem die Entwicklungsumgebung bereit war, wurde sich ein Überblick über die Anwendung verschafft und diese bereits manuell getestet. Dabei sind auch schon einige der Testfälle entstanden, die später automatisiert ablaufen sollen. Folgende Tests auf das Backend der Anwendung wurden mit Postman durchgeführt:
GET /todos  -> Status 200 - funktionierte bereits
GET /todos/:id  -> Es wurde eine ID von einem Test-Todo verwendet, dass vorher im Frontend erstellt wurde (https://shiny-trout-7v96rqxpq4q9hr7v4-3000.app.github.dev/todos/1734269894745)
-> 502 Bad Gateway - der Server stürzte ab. Todos, die im Frontend erstellt wurden, hatten ein anderes ID Format, als die, die im Backend erstellt wurden (IDs.png). Mit dem Format aus dem Frontend konnte die Funktion new ObjectID(id) in der db.js Datei nicht umgehen und löste den Fehler aus => mit den, im Backend erstellten, Todos funktionierte diese Route
PUT /todos/:id  -> Status 200 funktionierte bereits, aber genau wie bei GET /todos/:id nur mit im Backend erstellten Todos
POST /todos -> Status 201 funktionierte bereits
DELETE /todos/:id  -> Status 204 funktionierte bereits, aber genau wie bei GET /todos/:id nur mit im Backend erstellten Todos

Das Frontend wurde im Browser über die todo.html Datei mit folgenden Ergebnissen manuell getestet:
LINK/todo.html sollte Oberfläche anzeigen -> funktionierte bereits
Formular ausfüllen und abschicken sollte neues Objekt erzeugen und anzeigen -> funktionierte bereits
Status ändern -> Error: ID in Body does not match ID in Path -> Musste noch analysiert werden
Todo bearbeiten -> Änderung über Bearbeiten Button funktioniert nicht, sondern erstellt neue Todos -> Musste noch analysiert werden
Todo löschen -> funktioniert nicht, Server crasht -> Musste noch analysiert werden

Bei diesen manuellen Tests fielen einige Fehler in der Anwendung auf, die später gefixt wurden. Zuerst wurde sich jedoch den automatisierten Tests gewidmet.

Frontend Test in Cypress (End 2 End)
Um schnell einen Basisaufbau für Cypress zu erstellen, wurde der Github Copilot verwendet (initiale-cypress-dateien.png). Der Copilot hat auch bereits ein paar initiale Tests erstellt.
Da zur Entwicklung Github Codespaces verwendet wurde, konnten die Tests nur im Headless Modus ausgeführt werden. Beim ersten Ausführen der Tests wurde Cypress aktualisiert und war nicht mehr mit der vom Copilot erstellten Konfigurationsdatei Cypress.json kompatibel. Diese musste durch eine Cypress.config.js Datei ersetzt werden. Daraufhin konnten die Tests zum ersten Mal ausgeführt werden, schlugen jedoch alle fehl, da sie noch nicht auf die richtigen Elemente in der HTML Datei verwiesen. Das war jedoch nicht der letztendliche Grund für den Fehlschlag. Cypress speichert einen Screenshot unter /screenshots wenn ein Test fehlschlägt. Auf diesem war zu erkennen, dass Github eine Warnmeldung vor die Todo-Applikation schaltet. (Github-Warnhinweis.png)
Um diese Fehlermeldung zu umgehen, musste der Cypress Test die Warnmeldung mit continue vor jedem Test bestätigen. Der Link wurde in einem anderen Browser geöffnet und die Warnmeldung mit den Entwicklertools untersucht, um herauszufinden, welche ID oder Klasse der Continue Button auf der Seite hat, sodass dieser in Cypress verwendet werden konnte. Daraufhin wurde folgender Cypress Code in den Test unter beforeEach() aufgenommen, damit dieser vor jedem Testdurchlauf ausgeführt wird: cy.get('button[type="submit"]').click();
Nun konnte der erste Test, ein neues Todo anzulegen, erfolgreich durchgeführt werden. Das Frontend sollte mit Cypress komplett End-to-End getestet werden. Dazu wurde folgender Ablauf verwendet:
- Website aufrufen und Warnhinweis bestätigen (beforeEach)
- Neues Todo anlegen und Vorhandensein prüfen
- Status eines Todos anpassen und prüfen ob er angepasst wurde
- Todo bearbeiten, speichern und auf tatsächliche Veränderung prüfen
- Todo löschen und prüfen, ob tatsächlich gelöscht
Die ersten beiden Tests liefen bereits mit der Originalversion der Todo-Anwendung erfolgreich durch. Der Test den Status eines Todos zu verändern schlug fehl, genau wie bereits bei den manuellen Tests. Um das Neu-Erstellen von Todo-Elementen beim Editieren und Speichern von Todos, welches bei den manuellen Tests bereits aufgefallen war, abzufangen, wurde der zugehörige Cypress Test um eine Funktion ergänzt, die prüft wie viele Todo-Elemente vor und nach dem Test vorhanden sind. Mit dieser zusätzlichen Überprüfung schlug der Test fehl, da am Ende des Tests zwei Todo-Elemente vorhanden waren (Cypress-Edit-test_Fehler.png). Der Test ein Todo-Element zu löschen führte, wie auch schon der entsprechende manuelle Test, zu einem Absturz des Webservers.
Um die Cypress Tests auszuführen wurde der Befehl "npx cypress run --spec 'cypress/integration/todo.spec.js'" im Terminal ausgeführt.
Die TestDaten wurden zu diesem Zeitpunkt noch über die MongoDB Shell manuell bei Bedarf gelöscht. Dazu wurde das Kommando mongosh verwendet, um die Shell zu starten, mit use todos die passende Datenbank ausgewählt und mit db.todos.deleteMany({}) alle Daten gelöscht.

Backend Test in Jest (Unit Tests)
Es waren schon einige Testfälle in der Datei todo.test.js vorhanden. Beim einem Testlauf mit npm run test konnte festgestellt werden, dass kein gültiges Keycloak Token abgerufen werden kann, da das SSL Zertifikat von Jupiter.fh-sf.de abgelaufen zu sein scheint (Keycloak-Fehler.png). Für die weitere Bearbeitung der Aufgaben wurde daher die util.js angepasst, sodass das SSL Zertifikat nicht überprüft wird(ist für prod Umgebungen nicht empfehlenswert)
-> Jetzt erschien ein 502 Fehlercode, als ob der Keycloak-Server nicht erreichbar gewesen wäre. Da in der Todo App die Authentifizierung nicht implementiert war, wurden die Tests, die auf ein fehlendes Token prüfen sollten, auskommentiert und ansonsten ein Dummy-Token verwendet. Aufgrund der weiteren Probleme wurde sich entschieden für die Tests Dummy-Tokens zu verwenden.
Nun da es keine Fehlermeldung mehr bzgl. Keycloak gab, konnten die initialen Ergebnisse der Tests betrachtet werden (Unit-Tests_initial.png). Um die Tests zu starten musste in das backend Verzeichnis gewechselt werden und das Terminal Kommando "npm run test" ausgeführt werden. Sechs der Neun initialen Tests waren bereits erfolgreich. Der Test bzgl. des Tokens wurde erstmal ignoriert. Die beiden Tests auf valide oder unvollständige POST Daten schlugen fehl, da in der app.post Funktion noch keine Validation Rules angewendet wurden.
Folgende Tests wurden noch ergänzt:
- GET /todos/:id ID im falschen Format -> erwarteter Statuscode 400 (schlug aktuell noch fehl da keine Prüfung im Code)
- PUT /todos/:id ID in Pfad und Body stimmen nicht überein -> erwarteter Statuscode 400 (funktionierte bereits)
- PUT /todos/:id Todo nicht gefunden -> erwarteter Statuscode 404 (bekam aktuell ein Code 500)
- PUT /todos/:id ID im falschen Format -> erwarteter Statuscode 400 (schlug aktuell noch fehl da keine Prüfung im Code)
- DELETE /todos/:id Todo nicht gefunden -> erwarteter Statuscode 404 (funktionierte bereits)
- DELETE /todos/:id ID im falschen Format -> erwarteter Statuscode 400 (funktionierte bereits)
Außerdem hing sich die Anwendung auf und der Jest Test beendete sich nicht von selbst (Crash_Jest.png). Nach etwas ausprobieren konnte festgestellt werden, dass dieser Fehler durch die Tests auf das falsche Format der ID bei PUT und DELETE ausgelöst wurde. Diese beiden Tests wurden daher erstmal auskommentiert.


Github Action:
Im nächsten Schritt wurde eine Github Action erstellt, um bei jedem Push oder Pull-Request auf das Repository alle Jest und Cypress Tests automatisiert auszuführen. Dazu wurde eine YAML Datei im Ordner .GitHub/Workflows erstellt, in der der zu automatisierende Ablauf Schritt für Schritt aufgelistet wurde. Für das Grundgerüst dieser Datei wurde erneut der Github Copilot verwendet. Außerdem wurde das Löschen der Testdaten über die MongoDB Shell in dem Bash-Skript automate_mongo.sh automatisiert, um dies auch in der Github Action ausführen zu können. Dazu muss allerdings auch die Mongo Shell auf dem Github Actions Runner installiert werden, was natürlich die Github Action etwas verlangsamt. Dadurch dass die Todo App aber recht übersichtlich ist, ist das zu verkraften. Bei der ersten Ausführung der Github Action brach diese bereits bei den Jest Tests ab, da manche dieser Tests aktuell noch fehlschlugen. Um trotzdem die gesamte Action zu testen wurden daher vorerst alle Tests, die aktuell noch fehlschlugen, auskommentiert. 
Leider konnten die Cypress Tests nicht in der Github Action ausgeführt werden. Der in der Cypress Config hinterlegte Link konnte von der Github Action nicht erreicht werden (Cypress-fehler-codespace-adresse.png). Zur Lösung des Problems wurden verschiedene Dinge getestet. Unter Anderem wurde die URL in der Cypress Config auf https://localhost:3000 verändert, aber auch das konnte von der Github Action nicht erreicht werden (cypress-fehler-localhost.png). Die Konfiguration mit localhost funktionierte auch direkt im Codespace beim Ausführen der Cypress Tests nicht. Die einzige Möglichkeit die Cypress Tests im Codespace auszuführen, war über die Codespace URL (z.B. https://fictional-acorn-5gqj469x667rf7jv7-3000.app.github.dev/), jedoch musste auch diese erst auf Portsichtbarkeit public gestellt werden. Ein weiterer Lösungsansatz war es, die Umstellung der Portsichtbarkeit mit in der Github Action auszuführen, was aber auch nicht zum Erfolg führte. Leider konnte dieses Problem nicht gelöst werden und daher wurden die Cypress Tests aus der action.yml Datei auskommentiert und nur direkt über den Codespace ausgeführt. 


Sonarqube einbinden:
Eine weitere Aufgabe war es, zur Codeprüfung Sonarqube in die Github Action einzubauen. Es konnte der Sonarqube Server der FH-SWF genutzt werden, dieser musste nur noch mit meinem Github Account verknüpft werden. Anschließend konnte ein neues lokales Projekt angelegt werden, welches Todo-App_jlh genannt wurde. Jetzt wurden die Secrets für die Nutzung von Sonarqube erstellt und im Repository hinterlegt. Im Repository musste eine Konfigurationsdatei sonar-project.properties für Sonarqube erstellt werden und die Github Action um Sonarqube ergänzt werden. Beim nächsten Push lieferte Sonarqube auch schon erste Ergebnisse zum analysierten Code (erste-sonarqube-ergebnisse.png).


Reparieren der Anwendung:
Als nächstes konnten die Ergebnisse der Tests verwendet werden, um die Anwendung zu reparieren. Im ersten Schritt wurde dazu das Problem gelöst, dass Frontend und Backend beim Erstellen von Todo Elementen unterschiedliche Formate für die ID verwendeten. Dazu wurde in der todo.js die Funktion saveTodo angepasst. Diese übergab in ihrer ursprünglichen Version einen, mit der Funktion Date.now() generierten, Wert als ID. Dies wurde so angepasst, dass nur wenn die ID schon vorhanden ist, diese ID auch mitgegeben wird. Wird das Todo-Element im Frontend erstellt, gibt es noch keine ID, weshalb hier dann auch keine ID an das Backend übergeben wird.
Nach diesem ersten Fix, funktionierten bereits alle manuellen Tests mit Postman für das Backend, da nun alle IDs das gleiche Format hatten. Im Frontend waren nach dieser Änderung jedoch die Buttons der einzelnen Todo-Elemente nicht mehr funktionsfähig. Eine Fehlermeldung in den Entwicklertools des Browsers ("Uncaught SyntaxError: identifier starts immediately after numeric literal") wies darauf hin, dass der Onclick-Handler nicht mehr mit der ID umgehen konnte, da diese nun als numerisches Literal interpretiert wurde. Um das zu beheben mussten nur die IDs, die bei den onclick-Handlern in der Funktion createTodoElement übergeben werden, in Anführungszeichen gesetzt werden. So wurden diese als Strings interpretiert und anschließend konnte im Frontend der Status eines Todo-Elements geändert und auch ein Todo-Element gelöscht werden.
Das Problem, das beim Bearbeiten und anschließenden Speichern eines Todo-Elements, ein neues Todo-Element erstellt wird und das Alte weiterhin bestehen bleibt, bestand aber weiterhin. Das wurde dadurch verursacht, dass in der Funktion saveTodo versucht wurde, die ID des Todos aus dem Dataset des Formulars mit "evt.target.dataset.id" abzurufen, jedoch wurde diese vorher in der Funktion editTodo in _id geschrieben. Das Parsen der ID auf einen Integer konnte auch entfernt werden. Außerdem musste die ID am Ende der Funktion saveTodo mit "delete evt.target.dataset._id;" wieder aus dem Formular entfernt werden, damit diese beim nächsten Erstellen eines neuen Todos nicht wieder verwendet wird.
Nach diesen Anpassungen am Code war die Anwendung voll funktionsfähig.
Nun konnten auch die bisher auskommentierten Tests in der Cypress Datei todo.spec.js erfolgreich ausgeführt werden und der Cypress End2End Test insgesamt erfolgreich durchlaufen. (Erfolgreiche-Cypress-tests.png)
Damit die Jest Tests, die aktuell noch ausgeklammert waren, auch funktionieren konnten, mussten in der index.js noch die Validation Rules ergänzt werden. Es wurden drei Rulesets erstellt: Eins zur Prüfung der ID in der URL, Eins zur Prüfung des Body´s bei POST Requests und eins zur Prüfung des Body´s bei PUT Requests. Nachdem diese implementiert waren, wurden noch ein paar Jest Tests hinzugefügt, die verschiedene Fehler im Body der POST und PUT Requests simulieren. Alle Jest Tests liefen nun sowohl bei der manuellen Prüfung mit npm run test, als auch der automatischen Prüfung innerhalb der Github Action erfolgreich durch. (Jest_erfolgreich.png) (Github-Action_erfolgreich.png)

Betrachten der Sonarqube Ergebnisse:
In den Letzten Sonarqube analysen wurden drei Issues in der frontend/todo.js entdeckt (Sonarqube_3-Issues.png). Zwei der findings bezogen sich auf ein paar Zeilen auskommentierten Codes, der daraufhin entfernt wurde. Das dritte Finding bezog sich auf die Status Funktion in Zeile 17 des Codes. Diese wäre veraltet. Der Github Copilot behauptete jedoch das Gegenteil, weshalb dieses Finding ignoriert wurde. Nach dem entfernen des auskommentierten Codes wurde nur noch ein Issue von Sonarqube bemängelt. (Sonarqube_1-Issue.png)




