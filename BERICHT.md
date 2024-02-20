## Mitglieder
- Niclas Leroy
- Marius Waterkotte

## Vorbereitung

Wir begannen damit, das Repository des Projekts https://github.com/fhswf/todo zu klonen und lokal einzurichten. Dabei haben wir uns dafür entschieden, in unserer Gruppe von zwei Personen zu arbeiten, um effizienter arbeiten zu können.
Nach dem erfolgreichen Klonen haben wir die Arbeitsweise des vorhandenen Codes analysiert, um ein besseres Verständnis für die Struktur und die wichtigsten Funktionen der Anwendung zu bekommen. Dies ermöglichte es uns, gezieltere Entscheidungen während des Entwicklungsprozesses zu treffen.

## Erstellung automatisierter Tests

Als nächstes haben wir uns auf die Erstellung automatisierter Tests konzentriert. Dabei haben wir uns auf wichtige Funktionen der Anwendung konzentriert und Tests für diese entwickelt.
Wir haben verschiedene Unit-Tests für das Backend entwickelt.
Ein spezieller Testfall, den wir implementiert haben, war der Test für die Aktualisierung des Status eines ToDos über den Status-Button, der absichtlich fehlschlagen sollte, um sicherzustellen, dass unser Testprozess robust genug ist.

## Einrichten einer GitHub-Action

Wir haben eine GitHub-Action erstellt, um automatisierte Tests bei jedem Push oder Pull Request auszuführen. Dabei haben wir sicherheitshalber auch MongoDB als zusätzlichen Service hinzugefügt, um sicherzustellen, dass unsere Tests erfolgreich durchgeführt werden können.

## Integration von SonarQube

Nachdem die automatisierten Tests erfolgreich waren, haben wir uns auf die Integration von SonarQube konzentriert, um eine Code-Analyse durchzuführen. Wir haben ein Projekt in der bereitgestellten SonarQube-Instanz erstellt und die GitHub-Action entsprechend angepasst, um die Analyse nach den Tests durchzuführen.
Hierbei haben wir uns an vorhandenen Ressourcen orientiert und die erforderlichen Umgebungsvariablen und Zertifikate korrekt konfiguriert, um eine reibungslose Integration zu gewährleisten.

## Auswertung der Ergebnisse

Wir haben die Ergebnisse der automatisierten Tests und die Berichte von SonarQube gründlich analysiert. Dabei haben wir festgestellt, dass einige Fehler aufgetreten sind, die wir anschließend behoben haben, bevor wir den Prozess erneut durchgeführt haben, um sicherzustellen, dass die Qualität der Software verbessert wurde.
Ein großes Problem, weleches uns sehr viel Zeit gekostet hat war die Authentifizierung des Users. Letzendlich haben wir eine Notlösung implementeirt, da uns der SECRET_KEY nicht gestellt wurde und wir nicht weiter machen konnten.
Zusätzlich hatten wir das Problem, dass anfangs die Tests nicht gestartet werden konnten. Durch hinzufügen des Präfix "cross-env" in dem "test"-Befehl, welcher in der package.json angelegt wurde, konnten wir dieses Problem ebenfalls beheben.

## Dokumentation

Abschließend haben wir unsere Arbeit in einem Bericht dokumentiert. Dabei haben wir unsere Vorgehensweise, die gewählten Lösungen, alle aufgetretenen Probleme und deren Lösungen sowie die Ergebnisse der Tests und Analysen ausführlich beschrieben.

## Fazit

Insgesamt war die Bearbeitung der Praktikumsaufgabe eine lehrreiche Erfahrung, die es uns ermöglicht hat, unsere Kenntnisse in den Bereichen Continuous Integration, automatisierte Tests und Code-Qualitätsprüfung zu vertiefen. Dabei konnten wir Tools, wie GitHub-ACtion und SonarQube kennenlernen und erste Erfahrungen hiermit sammeln. Wir haben gelernt, wie wichtig es ist, einen strukturierten Ansatz zu verfolgen und effektiv als Team zusammenzuarbeiten, um komplexe Probleme zu lösen und qualitativ hochwertige Software zu entwickeln.