
Name: Marc Freiwald
30081307


Webanwendung-Laufzeitumgebung

Das Repository wurde von github in einen Docker Dev Container geklont.
Dadurch konnte mit Visual Studio Code gearbeitet werden.
Die Webanwendung lies sich im Browser starten.


Testautomatisierung

Für das End-to-end-Testing wurde cypress als Ansatz gewählt.
Eine erste Testreihe wurde erstellt.

Probleme:
Das Einbinden von Skripts über die "package.json"-Datei erlaubt über jest das starten der Test-Suite, aber der Versuch, andere Skripte zu starten führt bisher zu einem "Permission denied"-Fehler.

Das Starten der Test-Suite über einen "run test"-Eintrag in einem github-Action-Workflow schlägt bisher fehl.

Sonarqube

Die Integration mit Sonarcube wurde gemäß der Anleitung https://github.com/fhswf/softwarequalitaet/tree/main/Exercises/CI_ToDo durchgeführt.

Das Ausführen eines Sonarqube-Tests, ausgelöst durch einen git push hat funktioniert.
Die Sonarqube-Analyse hat im Backend und Frontend jeweils einen Bug angezeigt.


