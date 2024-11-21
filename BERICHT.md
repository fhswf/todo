# Projektbericht für die Todo Anwendung
Diese Datei enthält den Projektbericht für die Todo Anwendung. Der Bericht wird im Rahmen des Moduls `Softwarequalität` an der [Fachhoschule Südwestfalen](www.fh-swf.de) erstellt.

## Gruppenmitglieder
* Christian Peters
* Kevin Hillebrand
* Tim Tomczek

## Vorgehensweise


## Lösungen


## Probleme
### Unit-Tests benötigen eine Datenbank (TODO)
    Die Unit-Tests benötigen aktuell eine Datenbank, um die Funktionalität zu testen. Dies ist nicht optimal, da die Tests dadurch nicht mehr unabhängig voneinander sind und eher als Systemtests behandelt werden müssten. Um dieses Problem zu lösen wird die Datenbank Klasse mit Jest gemockt.

### Anwendung stürzt ab, wenn ein Todo gelöscht wird
    Wenn ein Todo gelöscht wird, stürzt die Anwendung ab. Dies sorgt dafür, dass die nachfolgenden E2E-Tests nicht mehr ausgeführt werden können. Dieses Problem wurde dadurch behoben, dass die Anwendung bei einem Absturz automatisch durch nodemon neugestartet wird. Dazu werden Events von nodemon verwendet. Dadurch können die einzelnen Tests noch ausgeführt werden. Um einen Absturz der Anwendung zu bemerken, wird die Ausgabe des npm run start Befehls in einer Log-Datei gesichert und in der CI/CD-Pipeline auch archiviert. In der Pipeline wird diese Datei zusätzlich noch nach Hinweisen auf einen Absturz durchsucht. Wird dort ein Absturz gefunden, wird der Job als fehlgeschlagen markiert.


## Ergebnisse der QS
### Gefundene Bugs
| Verhalten                                                                         | Erwartetes Verhalten                                                                                                                      |
|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Das Löschen eines Todo lässt die Anwendung abstürzen                              | Das Löschen eines Todos sollte das Todo aus der Liste und der Datenbank entfernen                                                         |
| Das Ändern des Namens eines Todos hängt den neuen Namen an den alten an           | Der Name des Todos sollte überschrieben werden                                                                                            |
| Die Anwendung verügt über keine Authentifizierung                                 | Bei dem Aufruf der Seite wird eine Anmeldemaske angezeigt. Aufrufe der Enpunkte ohne gültiges Token werden mit dem Status 401 beantwortet |
| Die Anwendung verfügt über keine Validierung ob ein gültiges Todo übergeben wurde | Ein Todo mit einem Namen der weniger als 3 Zeichen lang ist, wird abgelehnt                                                               |


