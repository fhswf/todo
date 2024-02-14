# Projektbericht

## Projektteilnehmer
- Patrick Uhlke - 30181830
## Projektübersicht

Das Ziel dieses Projektes war es, eine einfache "ToDo" Anwendung mit einer Continuous Integration (CI) Pipeline zu implementieren, die automatisierte Tests und statische Codeanalyse mit SonarQube durchführt. Die Anwendung wurde entwickelt, um es den Benutzern zu ermöglichen, ihre täglichen Aufgaben zu verwalten, mit Funktionen zum Hinzufügen, Aktualisieren und Löschen von ToDos.

## Technologien und Werkzeuge
- Node.js
- MongoDB
- Jest für Backend-Tests
- GitHub Actions für CI/CD
- SonarQube für statische Codeanalyse
- Express.js für das Backend
- Vanilla JavaScript für das Frontend
- Docker für die MongoDB-Integration

## Herausforderungen und Lösungen
### Aufbau der Continuous Integration Pipeline

**Herausforderung:** Eine der ersten Herausforderungen war die Einrichtung einer Continuous Integration (CI) Pipeline, die automatische Tests und statische Codeanalyse bei jedem Push oder Pull Request durchführt.

**Lösung:** Die Lösung bestand in der Verwendung von GitHub Actions, um eine CI Pipeline zu konfigurieren. Dies beinhaltete die Erstellung einer `.github/workflows` YAML-Datei, in der die Schritte zur Installation von Abhängigkeiten, zur Durchführung von Tests und zur Durchführung der statischen Codeanalyse mit SonarQube definiert wurden. Besonderes Augenmerk wurde auf die Konfiguration der MongoDB-Dienste gelegt, um sicherzustellen, dass die Tests gegen eine echte Datenbank laufen.

### Integration von SonarQube

**Herausforderung:** Die Integration von SonarQube zur Durchführung von statischen Code-Analysen erwies sich als kompliziert, insbesondere die Konfiguration der Umgebungsvariablen und die Sicherstellung, dass SonarQube mit dem GitHub-Repository kommunizieren kann.

**Lösung:** Die Lösung bestand darin, eine `sonar-project.properties`-Datei im Wurzelverzeichnis des Projekts zu erstellen und die notwendigen Umgebungsvariablen (`SONAR_TOKEN`, `SONAR_HOST_URL`) als Geheimnisse in den GitHub-Repository-Einstellungen zu definieren. Dies ermöglichte eine sichere Kommunikation zwischen der CI-Pipeline und der SonarQube-Instanz.

https://hopper.fh-swf.de/sonarqube/dashboard?id=fhswf_todo_pu_AY19fAZsWNlYFiIpzZCM

### Herausforderungen und Lösungsansätze (Fortsetzung)
### Integration von Keycloak zur Authentifizierung

**Herausforderung:** Die Integration von Keycloak zur Verwaltung der Authentifizierung stellte eine große Hürde dar. Trotz korrekter Konfiguration schlugen Tests fehl, da die Authentifizierungstoken nicht wie erwartet generiert oder validiert wurden. Dies führte dazu, dass bestimmte Funktionen, die eine Authentifizierung erforderten, in den automatisierten Tests nicht korrekt ausgeführt werden konnten.

**Lösung:** Nach mehreren Versuchen und Überprüfung der Dokumentation wurde entschieden, die Keycloak-Integration vorübergehend aus den Tests auszuschließen. Dies war eine pragmatische Entscheidung, um den Fortschritt nicht weiter zu behindern und den Fokus auf andere Aspekte der CI-Pipeline und Codequalität zu legen. Die Authentifizierungslogik wurde in den Tests durch Mocking ersetzt, um eine isolierte Überprüfung der Funktionalität ohne externe Abhängigkeiten zu ermöglichen. 

### Automatisierte Backend-Tests

**Herausforderung:** Eine weitere Herausforderung war die Implementierung von automatisierten Tests für das Backend, insbesondere die Erstellung von Tests, die mit der MongoDB Datenbank interagieren.

**Lösung:** Die Lösung bestand in der Verwendung von Jest zusammen mit dem `mongodb-memory-server`, um eine In-Memory-Version von MongoDB für Testzwecke zu verwenden. Dies ermöglichte das Schreiben von Tests, die Datenbankoperationen in einer isolierten Umgebung ausführen, ohne die Produktionsdatenbank zu beeinträchtigen. Die Tests wurden so konfiguriert, dass sie vor dem Start der CI-Pipeline ausgeführt wurden.

### Konfiguration von Cypress in einem Projekt ohne package.json im Frontend

**Herausforderung:** Die größte Herausforderung war die Konfiguration und Ausführung der Cypress Tests in einem Frontend ohne eigene package.json Datei, da es sich um einfaches Vanilla JavaScript handelte.

**Lösung:** Um dieses Problem zu lösen, entschied ich mich, Cypress und seine Abhängigkeiten in das Frontend-Verzeichnis zu integrieren, einschließlich der Erstellung einer eigenen package.json. Diese Anpassung ermöglichte es mir, Cypress in einer konventionelleren Struktur zu verwenden und die Integration in CI/CD-Pipelines wie GitHub Actions zu vereinfachen.

### GitHub Actions Workflow Konfiguration

**Herausforderung:** Ein weiteres Problem trat bei der Konfiguration des GitHub Actions Workflows auf, die fehlschlug, da eine package.json im Frontend-Verzeichnis erwartet wurde.

**Lösung:** Ich konnte das Problem beheben, indem ich eine package.json in das Frontend-Verzeichnis einfügte und den Workflow so anpasste, dass die Abhängigkeiten korrekt installiert und die Tests ausgeführt wurden. Ich stellte sicher, dass der Workflow den Frontend-Server korrekt startet und auf dessen Verfügbarkeit wartet, bevor die Cypress-Tests ausgeführt werden.

### Cypress Tests fehlgeschlagen

**Herausforderung:** Einige Cypress-Tests schlugen fehl, da die erwarteten Elemente nicht innerhalb der vorgegebenen Zeit gefunden wurden, was auf Timing-Probleme und fehlende Daten hindeutete.


## Schlussfolgerung

Das Projekt war eine ausgezeichnete Gelegenheit, praktische Erfahrungen bei der Entwicklung einer Full-Stack-Anwendung und beim Aufbau einer Continuous Integration Pipeline zu sammeln. Es unterstrich die Bedeutung von automatisierten Tests und statischer Codeanalyse zur Verbesserung der Codequalität und Zuverlässigkeit der Anwendung. Obwohl es Herausforderungen gab, boten diese wertvolle Lernerfahrungen in der Problembehandlung und im Umgang mit modernen Entwicklungswerkzeugen und -praktiken. Zukünftige Projekte würden von einer noch tieferen Integration von Test- und Analysewerkzeugen profitieren, um eine noch robustere und fehlerfreie Anwendung zu gewährleisten.