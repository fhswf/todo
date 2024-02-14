# Aufgabe 2: Testautomatisierung

Gruppe: 

- [Dominik Fladung](https://github.com/dominikfladung)
- [Timo Köster](https://github.com/TimoKoester)

## Vorgehensweise

- Schrittweise die Anforderungen der Aufgabe umgesetzt
- SonarQube eingebunden
  - Keys als Secrets hinterlegt
- Korrekturen anhand der Analyseergebnisse vorgenommen
- Aufgrund von Auth-Problemen diesen Test zunächst entfernt
- Abhängigkeiten upgedatet
- Testabdeckung erhöht
  - Hierbei wurde das Swagger-Schema als Grundlage für die Tests verwendet. Es wird direkt anhand des Schemas validiert
- Autorisierung implementiert
- Code aufgeräumt
- Bericht erstellt
- Fehlerbehebung erstellen des Coverage-Berichts, damit dieser in Sonarqube eingebunden werden kann. 

## Schwierigkeiten

- Unterschiede zwischen Dokumentation und der NPM-Version von `express-validator`. Dies konnte durch ein Update auf 7.0.0 behoben werden. `checkExact` und `checkSchema` waren bei der Implementierung sehr hilfreich.
- Einrichtung der Actions: Hierbei hatten wir anfangs Schwierigkeiten zu definieren wann genau diese ausgeführt werden. Durch etwas probieren und lesen der Dokumentation konnten wir dies jedoch lösen.
- Erstellung und Einbindung des Coverage an Sonarqube. Hier war vorher nicht bewusst, dass der Coverage erst erstellt und dann übertragen werden muss. 
