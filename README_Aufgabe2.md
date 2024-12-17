# Ausarbeitung Softwarequalität
Wintersemester 2024/25 <br>
Fachhochschule Südwestfalen<br>
Angewandte Informatik

Termin
--------------------------------
    16.11.2024
--------------------------------

## Team
Robin Wessel<br>
Tobias Höh

## Dozent
Prof. Dr. Gawron

# Aufgabe
> **Siehe:** https://github.com/fhswf/softwarequalitaet/tree/main/Exercises/CI_ToDo

## Erledigte Aufgaben

 - [x] Fork des Repositories
 - [x] Verstehen der ToDo Anwendung (Front- und Backend)
 - [x] Erstellung von Testfällen mit Cypress
 - [x] Github Action bei jedem Push oder Pull Request erstellen
    - MongoDB als zusätzlichen Service hinterlegen
 - [x] Integration SonarQube
 - [x] Auswertung Ergebnisse

# Vorgehensweise
## Erstellen des Forks
Zuerst wurde ein neues Github Repositiory in Form eines Forks vom original Repository erstellt. Dies dient dazu, dass sowohl das Team als auch jedes einzelne Teammitglied unabhängig von einander arbeiten können.

## Aufteilen der Aufgaben
Im nächsten Schritt haben wir die Aufgaben gleichmäßig unter den Teammitgliedern 
aufgeteilt.  
  
Tobias Höh:
- Erstellen der Tesfälle
- Dokumentation  
  
Robin Wessel:  
- Einrichtung des Github Workflows
- Einrichtung des Sonarqube Projektes
- Einrichtung der Cypress Umgebung

## Anlegen der Testfälle
Die Testfälle wurden als e2e Tests für das Cypress Framework angelegt. Es wurde sich aufgrund des Frameworks und der Anforderungen der Aufgabenstellung auf die e2e Tests beschränkt. Unittests im Backend wurden daher vernachlässigt.  
  
Da es keine spezifizierten Anforderungen an die App gab, musste sich der aktuelle Zustand der App angeschaut werden und die Anforderungen und damit zusammenhängend die Testfälle abgeleitet werden. Um Systematsich die Testfälle zu ermitteln und anschließend zu strukturieren wurden die Tests nach dem QUAD Schema angelegt.
- **Q**uery
- **U**pdate
- **A**dd
- **D**elete
  
Der Query Bereich wurde durch die Generellen Tests und durch die Ergebnis Prüfung abgehandelt. Für die übrigen Tests wurde jeweils eine Datei pro Operation angelegt. Innerhalb dieser wird ggf. unterschieden ob die Dateien über den jeweiligen Button klick herein kommen oder über das Formular eingegeben werden.

## Erstellen des Github Workflows
Um die Tests automatisiert durchzuführen wurde ein neuer Github workflow angelegt. Dieser besteht zuerst nur aus dem einen job zum Testen der Anwendung. 
Für diesen Job werden die verschiedenen Berechtigungen angegeben, sowie der Container in dem der Workflow gestartet wird (hier ubuntu) inkl. den mongodb Service und seiner Ports.
    
Der Workflow ist so konfigureirt, dass dieser immer bei einem push oder nach einen Pull-Request auf den main Branch durchgeführt wird.
    
Dieser Job beinhaltet nun verschiedene Steps mit unterschiedlichen Aufgaben.
- Auschecken des Codes/Repositorys
    - Hierfür wurde die Checkout Action verwendet
- Installieren der Abhängigkeiten des Backends
- Installieren der Abhängigkeiten des Frontends
    - Das Installieren der Abhängigkeiten für Front- und Backend wird mithilfe des npm install commands durchgeführt.
- Instrumentierung des Frontends zur Codecoverage
    - Hier wird nur der npm run prepare command ausgeführt
- (Backend-)Server starten
    - Zum starten des Servers wird das npm run starttest command mit dem & Zusatz verwendet, damit der Server nach dem ausführen des Steps nicht beendet wird. Außerdem wird der Port des Servers noch angegeben.
- Tests inkl. Coverage ausführen
    - Um die Tests und Coverage auszuführen wird der npm test command verwendet
- Sonarqube Scan ausführen
    - Für Sonarqube wird die sonarqube-scan-action verwendet. Diese bekommt die entsprechenden Tokens/Secrets um den Zugriff zwischen Sonarqube und Github zu erlauben.
- Artefakte hochladen und bereitstellen
    - Die Artefakte werden durch die upload-artifact Action hochgeladen. Hierfür werden die Ordner angeben welche hochgeladen werden sollen.
- Workflow bei fehlgeschlagenen Tests als Fehlerhaft markieren
    - Hier wird nur das Ergebnis des Steps für die Tests abgefragt und ausgwertet.

## Projekt Einrichtung
### NPM Commands Übersicht
#### Backend
- start
    - Zum starten der Anwendung durch nodemon
- starttest
    - Setzt die Enviremont Variable IS_TESTING auf true
    - IS_TESTING dient zur Umschaltung des Ordners im Server, ob die instrumentierte bzw. nicht instrumentierte Version verwendet werden soll.
    - Nodemon starten für die index.js

#### Frontend
- test
    - Führt den Cypress npm Command aus
    - Erstellt den Coverage Report
- cypress
    - Führt die Cypress Tests aus
- instrument
    - Instrumentiert das Frontend in das Verzeichnis "instrumented"
- copy-html
    - Kopiert die html Dateien in das "instrumented" Verzeichnis, damit diese verfügbar sind.
- copy-css
    - Kopiert die css Dateien in das "instrumented" Verzeichnis, damit diese verfügbar sind.
- prepare
    - Führt das npm Command copy-html, copy-css und instrument aus.

### Sonarqube
Für Sonarqube wurden die Projektinformationen konfiguriert sowie welche Dateien ignoriert werden sollen. Um die Codecoverage auszuwerten wurde der Pfad zum Bericht konfiguriert, sowie die Pfade zu den Test Dateien. 

### Cypress
Für die e2e Test wurde Cypress verwendet. Hierzu musste das entsprechende nom Paket installiert werden. Außerdem musste die Initaliserung des Projektes Lokal ohne Codespaces erfolgen, da sonst die UI des Cypress nicht starten konnte. Das Cypress wurde so konfiguriert, dass es bei Fehlern Screenshots und Videos erstellt. Außerdem wird ein Codecoverage Bericht zur verwendung im Sonarqube erstellt.

#### Instrumentierung
Damit ein Codecoverage Bericht erstellt werden kann muss der Code instrumentiert werden. Hier zu wurde nyc inkl. Instanbul installiert. Damit dies korrekt funktioniert wurden die oben beschriebenen Commands definiert, sodas die instrumentierte Version im Verzeichnis "instrumented" liegt.  
  
```
"scripts": {
    "test": "npm run cypress && nyc report --reporter=lcov",
    "cypress": "npx cypress run",
    "instrument": "npx nyc instrument --compact=false ./src ./instrumented",
    "copy-html": "copyfiles -u 1 './src/*.html' ./instrumented",
    "copy-css": "copyfiles -u 1 './src/*.css' ./instrumented",
    "prepare": "npm run copy-html && npm run copy-css && npm run instrument"
 
},
```
Außerdem wurde eine "nycrc.json" angelegt um nur die benötigten Dateien in die Instrumentierung einzuschließen und den Bericht im richtigen Format auszugeben.
```
{
  "include": ["src/**/*.js"],
  "exclude": ["node_modules", "coverage", "cypress", "*.config.js"],
  "reporter": ["lcov"],
  "all": true,
  "compact": false
}
```

### Codecoverage
Für die Codecoverage wurde das "@cypress/code-coverage" plugin verwendet. Dieses wird in die "cypress.config.js" eingefügt.
```
setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)

      return config;
},
```
Durch den Report Command nach dem durchführen der tests wird dann der entsprechende Coverage Bericht erstellt.

# Probleme und Lösungen
- Cypress lies sich nicht ausführen, dies war der Tatsache geschuldet, dass wir die Anwendung über Codespaces laufen lassen.
    - Die Einrichtung musste lokal erfolgen, nach der Einrichtung konnte in Codespaces  weitergearbeitet werden.
- Beim Testen vom Datum musste auf die Berechnung geachtet werden (heute + 3 Tage)
- Die Codecoverage vom Frontend wird nicht automatisch durchgeführt
    - Die Einrichtung muss händisch erfolgen und wird mit Instanbul/nyc zur Intrumentasierung durchgeführt. Für das Cypress ist die Einrichtung des Codeccoverage mit Hilfe des @cypress/code-coverage Plugins erfolgt.
    - Hierfür musste der Code im Frontend in ein src Verzeichnis verschoben werden um in einen neuen Ordner die instrumentierte Variante zu haben und nicht seinen Code zu über schreiben.
- Worfkflow bricht bei fehlerhaften Tests ab und führt keine weiteren Schritte aus.
    - Um dies zu verhindern wurde der Test-Schritt so konfiguriert das dieser bei einem Fehler nicht abbricht. Dafür wurde am Ende als letzter Schritt ein Prüfung des Status implementiert.
- "Todos" im Komentar wurden als Fehler im Sonarqube gewertet
    - Gelöst durch neu Formulierung des Komentars

# Ergebnisse
## Testabdeckung
[![Coverage](https://hopper.fh-swf.de/sonarqube/api/project_badges/measure?project=todo_rwth&metric=coverage&token=sqb_7d58a4280bee96408a117fcdab10ab5d608043cb)](https://hopper.fh-swf.de/sonarqube/dashboard?id=todo_rwth)

## Wichtige Erkenntnisse aus SonarQube-Berichten.
- Die Testabdeckung ist ein wichtiger indikator für die Vollständigkeit der Tests
- Die Validierung des Codes trägt zu einer besseren Struktur des Codes bei.
- Die Übersicht zwischen neuen und den gesamten Code hilft bei der sorgfalt Erstellung der Tests
- Anzeige von doppelten Code hilft bei der Strukturierung und Modularisierung des Codes
