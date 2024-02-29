# Abgabe Gruppe TKKG

## Mitglieder:
Tim Halle
Konstantin Jasny

## Vorgehen
1 - Erster Arbeitsschritt war das schreiben der Backend- und Cypress Tests
        Gleichzeitig konnten vom anderen Gruppenmitglied die Github Actions für die Backend- und Cypress Test erstellet werden.
        Der Test der Authentifizierung in Cypress musste auf einen späteren Zeitpunkt verschoben werden, da diese Funktion noch nicht implementiert war.

2 - Auf Basis der Testergebnisse Behebung der einzenlen Fehler in der Web Anwendung

2.1 - Anpassung der Authentizierung im Backend (Benötigt für weitere Test)
        Zunächst Probleme mit der Überprüfung des Tokens. Nach einigem probieren konnten wir einen falschen Öffentlichen Schlüssel als Fehler identifzieren.

2.2 - Anpassung der Validierung
        Die Überprüfung der Übergebenenen Daten musste angepasst werden um die benötigten Fehlermelduzng bei Fehlerhaften Eingaben zu erzeugen.

2.3 Integration der Authentifizierung im Frontend
        Um das Frontend in vollen Umfang testen zu können, versuchten wir die Authentifizierung über den Keycloack Server zunächst zu implementieren. 
        Hier gab es ein Problem, welches wir lange nicht lösen könnten. 
        Wird das Frontend aufgerufen erfolgt korrekter Weise der redirect auf den Keycloak Server, dieser
        quittiert die Anfrage jedoch mit der Fehlermeldung "invalid redirect URI". Nach einiger Recherche und Probieren stellten wir fest das dieser Fehler bei nahezu jeder falschen Konfiguration der URI auftritt und wenig Aufschluss über den eigentlichen Fehler gibt. Nach sehr langen probieren und recherchieren stellten wir fest, dass der Fehler durch einen Codespace in der redirect URI ausgelöst wurde.
        Nachdem wir die Anwendung lokal ausführten funktionierte die Authentifizierung nahezu problemlos. 
        Im Anschluss konnten wir die Cypress Tests für die Authentifizierung anpassen.

3 - Anlegen des Sonarqube Projektes (todo_tkkg)

3.1 - erstellen der Sonarqube Action

3.2 - Integration von Code Coverage mit Jest und Sonarqube


3.3 - Integration von Code Coverage mit Cypress und Sonarqube
        Hier stellte sich eine Herausforderung, welche wir nicht lösen konnten. Da Cypress keine native Unterstüzung einer Codecoverage Analyse bietet, mussten entsprechende Plugins installiert werden.
        Wir fanden heraus das Istanbul, nyc sowie babel sich hierfür eigeneten. Allerdings gelang es uns nicht mittels nyc eine Code Analyse durchzuführen. Wir konnten lediglich die Analyse in Cypress verlinken und nach und vor einem Test die Coverage abrufen.
        Allerdings schagen die Tests im Moment daher auch fehl da keine Coverage bestimmt werden kann.

3.4 - Überarbeitung der Anwendung mit Ergebnissen von Sonarqube

4 - Letzter Check und Abgabe




