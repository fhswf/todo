# README_Aufgabe2

## Teilnehmer
   - [Dominik Bock](https://github.com/DoBo91)          -Matrikel Nr. 30074561
   - [Sebastian Schmidt](https://github.com/DrDigits)   -Matrikel Nr. 10047882


## Vorgehensweise zur Lösung der Aufgabenstellung


   - Schrittweise die Anforderungen der [Aufgabe](https://github.com/fhswf/softwarequalitaet/tree/main/Exercises/CI_ToDo) umgesetzt
   - [SonarQube](https://hopper.fh-swf.de/sonarqube/dashboard?id=todo_DoBo_SeSch) eingebunden
        - Manuelles Projekt angelegt und mit dem GITHUB Repository verbunden
        - Die benöitgten Keys als Secrets in GITHUB hinterlegt (aus der Anweisung von der Verbindung von SonarQube zu Github)
        - Root Cert als Variable in GITHUB hinterlegt (Aus der Aufgabenstellung)
   - die [Build.yml](./github/workflows/build.yml) und die [testsuite.yml](./github/workflows/testsuite.yml) erstellt
        - die Build.yml enthält die Verbindung und Infos für Sonarqube damit die Daten nach jedem push in branch übertragen werden. Diese wurde anhand der Doku erstellt
        - die Testsuite.yml führt nach jedem push und pull request auf dem main branch mit den Kommandos -npm install und -npm test die backend Tests durch. 
   - Korrekturen anhand der Analyseergebnisse von Sonarqube vorgenommen (Security Review vorgenommen und besätigt, sowie die Bugs entfernt und die Issues durch das Wort ToDo als fehlerhaft markiert
   - einen Test ergänzt, welcher die Aktualisierung des Status eines ToDos über den Status-Button überprüft
   - Fehler behoben gemäß testcases
   - Bericht erstellt

## Schwierigkeiten

  - Verbindung von Github zu SonarQube herstellen (s. auch nächster Punkt)
  - Die Coverage(Unit Tests) von Sonarqube konnten wir leider nicht so anpassen, dass Sonarqube das Protokoll annimmt und erkennt. Istanbul-Tool und lcov.info haben keine Abhilfe geschaffen.
  - fails bei den testcases und Behebung durch Zuhilfenahme der gängigen Entwicklerplattformen wie stackoverflow 

### Weitere Infos s. [Bericht](./Bericht.md)
