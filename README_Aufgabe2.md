# ToDo-Anwendung

Gruppenmitglieder:
- Roman Knjaskow
- Mike Görzen
- Florian Hees

# Dokumentation

## Vorgehensweise

Zu Beginn haben wir eine Kopie des ursprünglichen GitHub-Repositories erstellt. Nach Fertigstellung, haben wir die bestehende Anwendung sowie den dazugehörigen Code analysiert, um ein besseres Verständnis dafür zu entwickeln. Notwendig war dies unter anderem dadurch, dass wir gemäß der ersten Aufgabe automatisierte Tests erstellen sollten. Diese automatisierten Tests konnten in ihrer Breite nur bedacht, geplant und gewählt werden, durch das entsprechend zuvor angeeignete Verständnis der Anwendung. Aufgrund dieser Vorgehensweise, begannen wir vorerst mit der konzeptionellen Zusammenfassung aller wichtigen Testfälle und erstellten schließlich folgende Liste:
![image](https://github.com/fhswf/todo_roflme/assets/60848726/9281c3c1-5d29-4169-b46d-f89f5a1d59df)

Nach Erstellung dieser Liste der Testfälle, erfolgte die anschließende Umsetzung jener zu Code. Es ist anzumerken, dass einige dieser Testfälle bereits in Datei vorhanden waren.



## Die gewählten Lösungen
- Konzeptionelle Erstellung einer Auflistung für Testfälle
- Umwandlung der konzeptionellen Auflistung der Testfälle zu Code, inklusive Überarbeitung und Reparatur der bereits bestehenden Testfälle
- Einrichtung einer GitHub-Action zur automatischen Durchführung der Testfälle
- Erstellung eines SonarQube Accounts für die anschließende Integration des SonarQube
- Hinzufügen der 
- Auswertung der Ergebnisse
- Erstellung der Dokumentation


## Probleme und wie sie gelöst wurden

Die automatisierten Tests zu erstellen schien vorübergehend als Herausforderung. In der Datei waren bereits einige vorgefertigten Testfälle enthalten, von denen jedoch die meisten nicht wie gewünscht funktionierten. Beim Hinzufügen unserer eigenen definierten Testfälle, mussten daher auch die bestehenden überarbeitet und repariert werden. 

Auch die Integration von SonarQube sollte sich anfangs schwieriger gestaltet als geplant. 

- Nicht im FH Repository gewesen, dadurch in SonarQube Projekt nicht anlegbar
Lösung dafür war das bestehende Projekt zunächst auf die Organisation fhswf zu übertragen - folge daraus war dass wir das Secret und die Variablen nicht eintragen konnten. Nach einem Fork funktioniert des jedoch.


## Ergebnisse der automatisierten Tests und SonarQube-Analysen
