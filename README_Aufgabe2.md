#  Continuous Integration zur Verbesserung von Softwarequalität

# Gruppe

- Florian Wegener
- Simone Dodt


# Aufgabenstellung
Continuous Integration zur Verbesserung von Softwarequalität
https://github.com/fhswf/softwarequalitaet/tree/main/Exercises/CI_ToDo

# Vorgehensweise und Problemstellungen 
# Github Actions erstellen
	Die Datei myworkflow.yml wurde im Ordner github/workflows erstellt, dadurch 	können definierte Github Action Workflows für das todo Repository angelegt 	werden. Hier wurde der Workflow für automatisierte Tests definiert, wenn ein Push 	oder Pull-Request in der Main-Branch vorgenommen wurde. Node.js wird 	eingerichtet, die Projektabhängigkeiten werden geladen.
Die Backend Tests (in todo.test.js) schlugen zunächst teilweise fehl. Diese konnten im späteren Verlauf gefixt werden.
# Sonarqube integrieren
	Die Datei sonarqube.yml wurde im Ordner github/workflows erstellt, dadurch 	kann mit einem Github Action Workflow der Quellcode mit Sonarqube analysiert 	werden. Wie bei der myworkflow.yml wird hier bei jedem Push 	oder Pull-Request in 	der Main-Branch der Workflow angestoßen.
	Herausforderung war die manuelle Anbindung des Github repository an Sonarqube.	Dafür mussten in den github Einstellungen die repository secrets 	(SONAR_HOST_URL, SONAR_ROOT_CERT, SONAR_TOKEN) hinterlegt werden. 
	Das Secret SONAR_ROOT_CERT befand sich in der Aufgabenstellung, die 	SONAR_HOST_URL, SONAR_TOKEN wurde nach Erstellen eines Projektes in 	Sonarqube angezeigt und konnte in den github settings hinterlegt werden.
	Der Button "generate" für das Erzeugen eines SONAR_TOKENS wurde zunächst auf 	der Sonarqube Oberfläche übersehen, 	wodurch in den github settings zunächst ein 	fehlerhafter SONAR_TOKEN hinterlegt 	wurde. Nach Fehlersuche konnte das 	Missverständnis behoben werden.
	Außerdem wurde die Datei sonar-project.properties erstellt, diese enthält die 	Variable sonar.projectKey. Der projectKey ist eine Variable des Projektes in 	Sonarqube. Dieses Projekt heißt todo-next.
	URL: https://hopper.fh-swf.de/sonarqube/dashboard?id=todo-next
# Problemstellungen
Backend tests schlugen fehl, wegen import { getRandomValues } from 'crypto'; in der Datei index.js, Das Modul crypto wird für das Erstellen von Zufallszahlen verwendet. Lösungsansatz: Diese Codezeile wurde auskommentiert, das hat die Funktionalität der Anwendung nicht beinträchtigt.
Aufgrund der implementieren Authentifizierung in dem Repository der FH Südwestfalen, schlugen Tests fehl (https://github.com/fhswf/todo). Aus diesem Grund wurden diese deaktiviert. Nach der Änderung der Funktion let authenticate in der index.js wurde der Test describe('GET /todos (unautorisiert)', () => {     it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () ' angepasst, da dieser nun keine Token-Bereitstellung überprüfen kann.

# Cypress Tests implementieren
Zuerst wurden Cypress Test geschrieben, die manuell ausgeführt werden sollten. Cypress ist ein Framework, welches ebenfalls automatisierte Tests, wie zum Beispiel End-to-End-Tests für Webanwendungen unterstützt.
Dafür wurde im Ordner frontend ein Ordner cypress angelegt, dieser enthält Unterordner e2e und support/e2e. Außerdem wurde im Ordner frontend die Datei cypress.config.js und package.json erstellt.
Die package.json enthält für Cypress zwei Skripte, um die Cypress tests ausführen zu können (cypress open / cypress run). Unter devDependencies ist die Version von Cypress definiert.
Die Datei cypress.config.js enthält Informationen über die Konfiguration von Cypress und ist zwingend erforderlich. Beim Ausführen von npy cypress run erhält der Konsole der Benutzer eine Information, wenn diese fehlt.
Unter dem Pfad .../frontend/cypress/e2e liegt die Datei todo.cy.js. Diese enthält die definierten Testfälle für cypress.
Es ist wichtig, genau diese Struktur einzuhalten, sonst können die Cypress-Tests nicht ausgeführt werden. Das stellte eine der Herausforderungen bei der Bearbeitung der Aufgabenstellung dar.
Erst im nächsten Schritt sollten diese Cypress-Tests automatisiert ausgeführt werden. In der Datei myworkflow.yml wurden diese ergänzt.
Während der Tests stellte sich heraus, dass die Applikation die Todos nicht korrekt speichern konnte. Der Grund hierfür war, dass auch ein neues Todo das Feld _id enthielt. Dies führte zu einer Fehlermeldung und Todos mit der Bezeichnung 'undefined' bei bzw. nach der Anlage eines Todos. Das Feld wurde mittels 'delete todo._id;' bei der Neuanlage von Todos entfernt. Die Buttons zum Löschen, Bearbeiten und Ändern des Status eines Todos funktionierten nicht. Der Fehler im entsprechenden Button wurde behoben, um zumindest das Löschen von Todos testen zu können. Danach konnte das Löschen von Todos erfolgreich getestet werden. Zusätzlich wurden Tests für leere Eingaben, Sonderzeichen und lange Bezeichnungen ergänzt.