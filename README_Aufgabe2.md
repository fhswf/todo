# README_Aufgabe2

## Teilnehmer
   - [Dominik Bock](https://github.com/DoBo91)          -Matrikel Nr. 30074561
   - [Sebastian Schmidt](https://github.com/DrDigits)   -Matrikel Nr.


## Vorgehensweise zur Lösung der Aufgabenstellung


   - Schrittweise die Anforderungen der Aufgabe umgesetzt
   - [SonarQube](https://hopper.fh-swf.de/sonarqube/dashboard?id=todo_DoBo_SeSch) eingebunden
        - Manuelles Projekt angelegt und mit dem GITHUB Repository verbunden
        - Die benöitgten Keys als Secrets in GITHUB hinterlegt (Aus der Anweisung von der Verbindung von SonarQube zur Github)
        - Root Cert als Variable in GITHUB hinterlegt (Aus der Aufgabenstellung)
   - die [Build.yml](./github/workflows/build.yml) und die [testsuite.yml](./github/workflows/testsuite.yml) erstellt
         - die Build.yml enthält die Verbindung und Infos für Sonarqube damit die Daten nach jedem push in branch übertragen werden. Diese wurde Anhand der Doku erstellt
         - die Testsuit.yml führt nach jedem push und pull request auf dem master branch mit den Kommandos -npm install und test die backend Test durch. 
   - Korrekturen anhand der Analyseergebnisse von Sonarqube vorgenommen (Security Review vorgenommen und besätigt, sowie die Bugs entfernt und die Issues durch das Wort ToDo als Fehlerhaft makiert
   - einen Test ergänzt, welcher die Aktualisierung des Status eines ToDos über den Status-Button überprüft
   - die Files so angepasst, damit die ganzen Testcases durchliefen
   - Bericht erstellt

## Schwierigkeiten

  - Die Coverage(Unit Tests) von Sonarqube konnten wir leider nicht so anpassen, das Sonarqube das Protokoll annimmmt und erkennt
