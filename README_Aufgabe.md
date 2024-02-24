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
        Um das Frontend in vollen Umfang testen zu können, versuchten wir die Authentifizierung pber den Keycloack Server zunächst zu implementieren. 
        Hier gab es ein Problem, welches wir bis zum Ende nicht lösen könnten. 
        Wird das Frontend aufgerufen erfolgt korrekter Weise der redirect auf den Keycloak Server, dieser
        quittiert die Anfrage jedoch mit der Fehlermeldung "invalid redirect URI". Nach einiger Recherche und Probieren stellten wir fest das dieser Fehler bei nahezu jeder falschen Konfiguration der URI auftritt. 
        Da wir nach mehrstündigen Probieren keine Lösung finden konnten und keinerlei Fortschritte machten, schrieben wir Ihnen eine Email mit der Bitte nach Unterstüzung. Leider erhielten wir keine Antwort, weshalb wir uns dazu entschieden
        diese Funktion nicht zu implementieren.

3 - Anlegen des Sonarqube Projektes (todo_tkkg)

3.1 - erstellen der Sonarqube Action

3.2 - integration von Code Coverage mit Jest und Sonarqube

3.3 - Überarbeitung der Anwendung mit Ergebnissen von Sonarqube

4 - Letzter Check und Abgabe




