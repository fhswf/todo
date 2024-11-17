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
    Die Unit-Tests benötigen aktuell eine Datenbank, um die Funktionalität zu testen. Dies ist nicht optimal, da die Tests dadurch nicht mehr unabhängig voneinander sind. Um dieses Problem zu lösen wird die Datenbank gemockt.


## Ergebnisse der QS
### Gefundene Bugs
| Verhalten | Erwartetes Verhalten                                                              |
| --- |-----------------------------------------------------------------------------------|
| Das Löschen eines Todo lässt die Anwendung abstürzen | Das Löschen eines Todos sollte das Todo aus der Liste und der Datenbank entfernen |
| Das Ändern des Namens eines Todos hängt den neuen Namen an den alten an | Der Name des Todos sollte überschrieben werden                                    |
