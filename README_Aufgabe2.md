# Aufgabe 2: Testautomatisierung

Gruppe: 

- [Dominik Fladung](https://github.com/dominikfladung)
- [Timo Köster](https://github.com/TimoKoester)

## Vorgehensweise

- Schrittweise die Anforederungen der Aufgabe umgesetzt
- SonarQube eingebunden
- Korrekturen anhand der Analyseergebnisse vorgenommen
- Aufgrund von Auth-Problemen, diesen Test erstmal entfernt
- Updaten der Abhängigkeiten
- Testabdeckung erhöht
  - Hierbei wurde das Swagger-Schema als Grundlage für die Tests verwendet. Es wird direkt anhand des Schemas validiert. 
- Autorisierung implementiert
- Aufräumen des Codes
- Bericht erstellt

## Schwierigkeiten

- Unterschiede zwischen Dokumentation und der NPM-Version von `express-validator`. Dies konnte durch ein Update auf 7.0.0 behoben werden. `checkExact` und `checkSchema` waren bei der implementierung sehr hilfreich.
- Einrichtung der Actions: Hierbei hatten wir Anfangs schwierigkeiten, zu definieren, wann genau diese Ausgeführt werden. Durch etwas probieren und lesen der Dokumentation konnten wir dies jedoch lösen.