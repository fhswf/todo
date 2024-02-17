# Aufgabe 2: Testautomatisierung

## Gruppenmitglieder:
- Felix Weßollek

## Vorgehen:
- Überblick über Anwendung verschafft
- Codespace gestartet
- Bereits vorhandene Tests ausgeführt
- Code angepasst, bis vorhandene Tests erfolgreich waren

## Schwierigkeiten:
- Ausführen der Anwendung lokal nicht möglich, fehlende Anleitung
    - *Lösung: Codespace genutzt*
- Authentifizierung funktioniert nicht
    - Lösungsansätze:
        - Alternative Middleware nutzen
            - mit Passport experimentiert, funktioniert
        - ChatGPT um Hilfe gebeten -> Ergebnisse durchwachsen
        - Public Key fest hinterlegt, falls Probleme mit Keycloak in Verbindung mit Codespaces bestehen
    - undefined bei Authentifizierung anstatt "Unauthorized"
        - Lösungsansätze:
            - versucht den Authorization Header im Test explizit auf '' zu setzen -> ohne Erfolg
            - versucht anstatt auf !token, auf token === undefined zu prüfen -> kein Erfolgf
            - Test für Middleware implementiert, um Konfiguration zu prüfen 
                - Lösungsansätze von ChatGPT funktionierten nicht, Fehlersuche mit ChatGPT und Google aussichtslos
            - selbes Problem bei Nutzung von Passport
        - *Lösung: "Unauthorized" wurde als "message" gesendet, nicht aber als "error". JWT Strategy wurde angepasst und es funktionierte.*

