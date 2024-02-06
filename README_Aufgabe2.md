# Bericht

## Teilnehmer
Prathees Kumaravel          -Matrikel Nr. 30248993

## GitHub und SonarQube Repo

## [GitHub](https://github.com/Pikay93/todo)

## [SonarQube](https://hopper.fh-swf.de/sonarqube/project/information?id=todo_pk_SQ)

[![Coverage](https://hopper.fh-swf.de/sonarqube/api/project_badges/measure?project=todo_pk_SQ&metric=coverage&token=sqb_4028052f1e65242d81df048f14c2e725ddb4cb17)](https://hopper.fh-swf.de/sonarqube/dashboard?id=todo_pk_SQ)

https://hopper.fh-swf.de/sonarqube/api/project_badges/measure?project=todo_pk_SQ&metric=coverage&token=sqb_4028052f1e65242d81df048f14c2e725ddb4cb17

## Vorgehensweise
- Anforderungen aus der [Aufgabe](https://github.com/fhswf/softwarequalitaet/tree/main/Exercises/CI_ToDo) umgesetzt
- [SonarQube](https://hopper.fh-swf.de/sonarqube/project/information?id=todo_pk_SQ) eingebunden
    - GitHub Action SonarQube workflow erstellt
    - Die benöitgten Keys und Variables als Secrets und Variables in GITHUB hinterlegt (aus der Anweisung von der Verbindung von SonarQube zu Github)
    - Root Cert als Variable in GITHUB hinterlegt (Aus der Aufgabenstellung)
- die [build.yml](./github/workflows/build.yml) und die [sonarqube.yml](./github/workflows/sonarqube.yml) erstellt
    - Init build.yml wurde aus SonarQube entnommen und mit Internetrecherche weiter ausgebaut
    - die sonarqube.yml führt nach jedem push und pull request auf dem main branch die steps npm install und npm test durch
- Coderefacotring aus dem SonarQube report erledigt (Bugs und Security Review)
- Test ergänzt
- Fehler behoben gemäß testcases
- Bericht.md und ReadMe.md erstellt


## Herausforderungen
- Confgig erstellt für die Credentials der Datenbank
- Fehlerhafte Code Smells durch das Wort "Todo" beseitigt
- ungenutzte Pakete entfernt
- Bugs bereinigt und gesäubert
