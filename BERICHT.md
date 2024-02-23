Name: Sascha Bongardt  
Abgabe für das Fach Softwarequalität  
WiSe 2023/2024

Bericht zur Aufgabe: Continuous Integration zur Verbesserung von Softwarequalität

Generelle Vorgehensweise:
Bei dieser Aufgabe sollten Tests fürs Front- und Backend erstellt und über Github-Actions automatisiert werden.
Insbesondere bei End2End-Tests bestehen somit potenzielle Fehlerquellen im Front- und Backend, bei der Authentifizierung sowie im Code für die Github-Actions.
Um Fehler möglichst gut eingrenzen zu können, bin ich die Aufgabe schrittweise angegangen und habe zuerst damit angefangen, das Backend zu bearbeiten.

In der todo.test.js waren bereits ein paar Testfälle vorgegeben, für die ich im ersten Schritt schon mal eine Github-Action angelegt habe. 
Hier konnte ich weitgehend den Code übernehmen, den wir in der Gruppenarbeit im Unterricht erstellt haben, so dass diese erste Github-Action recht schnell eingerichtet war.
Lediglich die Funktion für den checkout des Repositories musste auf checkout@v4 umgestellt werden. 

Die automatischen Tests haben dann erste Hinweise darauf geliefert, wo noch Änderungen vorgenommen werden müssen.
Der Testfall für die Authentifizierung ist wie erwartet fehlgeschlagen, da die entsprechende Middleware noch leer war. 
Ein paar der anderen Testfälle sind aufgrund von Fehlern in den Backend-Funktionen oder aufgrund fehlender Eingabeüberprüfung gescheitert.

Da ich nicht schon zu Beginn zusätzliche Fehlerquellen durch fehlerhafte Authentifizierung einbauen wollte, habe ich im nächsten Schritt erst einmal
die Fehler in den POST- und PUT-Methoden behoben, eine Middleware zur Validierung eingebaut und die Regeln zur Eingabevalidierung erweitert. 
Die index.js enthielt bereits ein Swagger-Schema für die Eingabewerte, an dem ich mich für die Validierunsgregeln orientiert habe.
Da einer der Tests vorsieht, dass die übermittelten Objekte keine überschüssigen Attribute beinhalten, habe ich für die ValidationRules die ```checkExact()```-Funktion
verwendet, die immer dann einen Fehler ausgibt wenn Attribute übermittelt werden, die nicht in den ValidationRules enthalten sind. Das funktioniert soweit gut, hat
bei mir aber erst zu ein bisschen Verwirrung geführt, als plötzlich alle Tests für die PUT-Befehle fehlgeschlagen sind. Die ```checkExact()```-Funktion prüft offenbar nicht nur den
Request-Body sondern auch die Parameter des Requests, die bei PUT-Befehlen eine Id enthalten. Da dies in den ValidationRules nicht enthalten ist,
wurden alle PUT-Befehle als fehlerhaft erkannt. Mit einer Anpassung des ```checkExact()```-Befehls in ```checkExact([], { locations: ['body'] })``` ließ sich das Problem
aber beheben.

Nach der Erweiterung der Validierungsregeln habe ich zusätzliche Tests für das Backend erstellt, um sicherzustellen, dass die Validierung jetzt wie gewünscht
funktioniert. Da die POST und PUT-Methoden die gleichen Validierungsregeln nutzen, habe ich mich dazu entschieden, die Validierung hauptsächlich mit einer Reihe von 
Tests für die POST-Befehle zu überprüfen. Bei den PUT-Befehlen werden die Validierungsregeln dann nur noch stichprobenartig getestet.

Nach dem Erstellen dieser Tests und der Korrektur aller auftretenden Fehler, schlug nur noch der Test für die Authentifizierung fehl, da ein fehlendes Token bislang keinen
401-Fehler auslöst. Als nächstes habe ich daher mit passport und passport-jwt eine Authentifizierungs-Middleware erstellt. Das Secret für die Tokens habe ich noch in 
meinen alten Unterlagen aus dem Webentwicklungs-Backend-Kurs gefunden, so dass ich schon mal eine zum Token passende passport-Strategie einrichten konnte. Nach mehreren Versuchen
und Änderungen wurde das Token vom Keycloak-Server zutreffend von der authenticate-Middleware erkannt, so dass jetzt alle Backend-Tests erfolgreich waren.

Sobald der erste Test für die Authentifizierung erfolgreich war, habe ich für die anderen Routen ebenfalls Tests erstellt, mit denen die passende Reaktion auf
fehlerhafte oder fehlende Tokens überprüft wird. Die Tests für die GET-Route testen dabei beide denkbaren Fallkonstellationen (Token fehlerhaft oder Token nicht vorhanden).
Da die anderen Routen die gleiche Middleware nutzen, wird hier dann immer nur noch eine der beiden Fehlerquellen geprüft. Die grundsätzliche Funktionsfähigkeit der Middleware 
wird bereits durch die Tests zur GET-Route überprüft, so dass es bei den anderen Routen eher darum geht zu prüfen, ob die Middleware erfolgreich in diese Routen eingebunden ist.

Anmerkung zu den jest-Tests: Es kommt manchmal vor, dass die jest-Tests scheitern, weil es bei der Ausführung zu einer Zeitüberschreitung kommt. Ich habe leider nicht herausgefunden, was diese Zeitüberschreitung auslöst. Normalerweise werden die einzelnen Tests in wenigen 100ms ausgeführt, manchmal brauchen sie aber anscheinend mehr als 5000ms und werden dann abgebrochen. Tritt dieser Fehler auf, reicht es regelmäßig aus, den Test noch einmal manuell anzustoßen. Der nächste Test funktioniert dann im Regelfall wieder normal und liefert zutreffende Testergebnisse. 

Mit den erfolgreichen Tests zur Authentifizierung waren die Arbeiten im Backend erst einmal abgeschlossen, so dass ich als nächstes zum Frontend übergegangen bin.

Um das Frontend testen zu können, habe ich im Backend eine neue Route für localhost:3000/ angelegt, mit der die todo.html aufgerufen werden kann.
Dann habe ich den Server im Github Codespace gestartet und das Frontend erst einmal von Hand getestet. 
Die Authentifizierung im Backend habe ich für diese Tests erst einmal wieder abgeschaltet um die möglichen Fehlerquellen möglichst gering zu halten.

Hierbei sind die folgenden Probleme aufgefallen:
- Das Anlegen von Objekten scheitert, da die ans Backend übergebene ID eine Zahl und kein String ist. Der Datensatz erfüllt damit nicht die Anforderungen der Validate-Middleware.  
&rarr; ```saveTodo()```-Funktion angepasst, so dass die Id als String übermittelt wird
- Die Id der Objekte wird beim Klick auf Ändern nicht richtig erkannt, das Frontend sendet immer nur POST-Befehle und nie PUT-Befehle.  
&rarr; Die Erkennung der ID scheiterte daran, dass in ```saveTodo()``` auf ```evt.target.dataset.id``` zugegriffen wurde, im dataset ist die ```id``` aber als ```_id``` hinterlegt.
   Bestehende ToDos wurden daher nicht als solche erkannt, wodurch das Frontend immer davon ausgegangen ist, dass ein neues Objekt per POST-Befehl erstellt werden muss.
   Nach der Anpassung des Variablennamens von ```id``` zu ```_id``` ist das Problem nicht mehr aufgetreten.
- Ein Erstmaliges Anlegen von Objekten ist jetzt zwar möglich, beim Ändern oder Löschen fordert die Datenbank dann aber eine gültige 24 stellige ID, über die die Objekte nicht verfügen.
  Neue Ids werden im Frontend über die ```date()```-Funktion erzeugt und haben damit nicht die von MongoDB geforderte Länge von 24 Zeichen.  
&rarr; Statt mit ```date()``` eine eigene Id im Frontend zu erzeugen, habe ich das Frontend so umgebaut, dass beim Anlegen eines neuen Objekts einfach keine Id ans Backend übermittelt wird.
   MongoDB vergibt so selbst eine Id, die in der Antwort auf den POST-Request mitgeteilt wird und dann im todos-Array gespeichert werden kann.
- Neue Objekte werden jetzt mit gültigen Ids angelegt. Beim Klick auf Bearbeiten wird nun aber der Fehler ausgegeben, dass eine Variable mit einer Zahl beginnt. Die neu
  erstellten Objekte lassen sich daher nicht ändern, da sie beim Klick auf den Button nicht in die Eingabefelder übernommen werden.  
&rarr; Die Buttons enthielten den Befehl ```onclick="editTodo(${todo._id}).``` Hier fehlten dem Programm Anführungszeichen um den Variablennamen. Solange die Id noch im Frontend
   selbst erstellt wurde und nur aus einer Zahl bestand, konnte die Id bei der Erstellung des Buttons ohne Anführungszeichen angegeben werden. 
   Da MongoDB jedoch Strings aus Zahlen und Buchstaben als Id verwendet, wurde die Id vom Programm jetzt offenbar als Variablenbezeichnung interpretiert.
   Nach einer Änderung in ```onclick="editTodo('${todo._id}')``` trat der Fehler nicht mehr auf. Die Buttons für das Ändern des Status und fürs Löschen des ToDos wurden entsprechend angepasst.

Nach diesen Fehlerbehebungen ließen sich neu erstellte Objekte im Frontend jetzt fehlerfrei von Hand ändern und löschen. Die Statusänderung funktioniert ebenfalls.

Nächstes Ziel war das Erstellen von Tests mit Cypress. Diese sollten nach Möglichkeit, so wie die Backend-Tests, ein JWT-Token anfordern, das dann im Frontend
für die Authentifizierung verwendet werden kann.

Erst einmal habe ich nur einen einfachen Cypress-Test erstellt, der nur prüfen sollte, ob sich die ToDo-Anwendung erfolgreich öffnen lässt. 
Hier ging es hauptsächlich darum zu testen, ob ich die Cypress-Tests überhaupt richtig angelegt habe.

Nachdem sich dieser Test erfolgreich ausführen ließ, habe ich das Frontend so angepasst, dass ein JWT-Token aus dem LocalStorage des Browsers ausgelesen wird.
Danach habe ich Cypress so eingerichtet, dass vor jedem Test, so wie schon bei den Tests fürs Backend, erst einmal ein passendes Token angefordert wird.

Um zu testen, ob das Anfordern des Tokens, dessen Speicherung im LocalStorage und der Abruf des Tokens im Frontend funktionieren, habe ich dann einen 
einfachen Test zum Erstellen eines neuen ToDos geschrieben. Nach einer Weile hat der Test soweit funktioniert, so dass ich weitere Tests zum Ändern und Löschen von ToDos 
eingebaut habe. Das Einzige was nicht getestet wird, ist das Verhalten des Frontends, wenn man über kein Token verfügt. 
Im Frontend ist für diesen Fall zwar eine Weiterleitung auf eine Loginseite vorgesehen, ich habe im Frontend aber leider keine Möglichkeit gefunden, das benötigte Token über einen Login vom Keycloak-Server abzurufen.
Jeder Versuch aus dem Frontend heraus eine Anfrage an den Keycloak-Server zu schicken scheiterte daran, dass diese Anfragen als Verstoß gegen die Cross Origin Resource Sharing-Policy verstanden und entsprechend abgelehnt wurden. Front und Backend setzen daher voraus, dass der Nutzer der Software bereits über das passende Token verfügt oder es sich selbst 
beim passenden Keycloak-Server anfordern kann. Möchste man das Frontend ohne Token von Hand testen, muss vorher die authenticate-Middleware im Backend auskommentiert werden,
so dass diese den Request einfach direkt per ```next()```-Befehl an die nächste Middleware weiterreicht.

Da ich die Tests bisher alle über "npm start test" manuell angestoßen habe, bestand der nächste Schritt darin, die Tests als Github-Action zu automatisieren.

Die größte Schwierigkeit hierbei war, dass in dieser Github-Action sowohl der Server als auch die Tests gestartet werden mussten. Startet man den Server in der Github Action einfach über ```npm run start``` werden danach keine weiteren Schritte ausgeführt, da der Server ab dem Zeitpunkt dauerhaft läuft und der Arbeitsschritt aus Sicht der Action somit nie abgeschlossen wird. Die Dokumentation zur Cypress-Action ist aber zum Glück recht umfangreich und enthielt Beispiele, wie man hintereinander sowohl den Server als auch die Tests starten kann, selbst wenn die Dateien dafür, wie in meinem Fall, in verschiedenen Ordnern liegen.  
Die Cypress-Tests laufen jetzt alle erfolgreich, wichtig ist jedoch, dass die todos-Datenbank für die Anwendung leer ist, wenn die Tests gestartet werden. Existieren mehrere ToDos kann es sonst dazu kommen, dass Cypress nicht genau feststellen kann, welches der Todos angewählt und weiter bearbeitet werden soll. Ich habe versucht, das Problem zu beheben, indem ich erst das ToDo mit dem passenden Namen suche und Cypress dann über die ```siblings()```-Funktion nur auf dessen Ebene nach dem Button zum Ändern oder Löschen des ToDos suchen lasse, jedoch kommt es weiterhin vor, dass bei der Suche mehrere Objekte aus der ToDo-Liste angewählt werden, wodurch für die folgenden Testschritte nicht mehr klar ist, welches ToDo bearbeitet werden soll. 
Die Cypress-Tests sind so gestaltet, dass sie hinter sich wieder aufräumen (das ToDo wird mit den Tests nacheinander angelegt, geändert und zum Schluss wieder gelöscht), so dass die Datenbank grundsätzlich vor jedem Test leer ist, sofern nicht vorher von Hand Eintragungen in der Datenbank vorgenommen wurden. 

Nach den bisherigen Schritten sind Front- und Backend jetzt funktionsfähig und werden bei jedem Commit durch automatische Github-Actions überwacht.
Ich bin daher zum letzten Teil der Aufgabe übergegangen und habe eine Github-Action für die automatische Prüfung mit SonarQube ins Repository integriert.

Die SonarQube-Integration an sich lief mit den Erläuterungen in der Aufgabenstellung und den Hinweisen zur Projekterstellung innerhalb der SonarQube-Instanz recht einfach ab.
Beim ersten Versuch hatte ich noch eins der benötigten GITHUB-SECRETS und VARS nicht richtig eingerichtet, danach stand der Überprüfung durch SonarQube aber nichts mehr im Weg.
Das Projekt in SonarQube hat die Bezeichnung: toDo_SaBo

Das erste SonarQube-Ergebnis hat 2 Bugs, 3 Security Hotspots und 53 Code Smells ausfindig gemacht.  
Bugs: 
- Hinter einem der Jest-Testfälle stand eine 0 mit der SonarQube verständlicherweise nicht viel anfangen konnte. 
- Zudem hat SonarQube darauf hingewiesen, dass im ```<html>```-Tag in der todo.html die Angabe der Sprache fehlt.    
&rarr; Diese beiden Fehler waren wenig gravierend und ließen sich entsprechend schnell beheben.

Security Hotspots:
- Das Passwort für den Zugriff auf das Keycloak-Token stand sowohl in der utils.js und der e2e.js im Klartext und stellte somit ein Sicherheitsrisiko dar.  
&rarr; Diesen Fehler habe ich behoben, indem ich Nutzernamen und Passwort für den Zugriff auf den Keycloak-Server in eine eigene keycloak.json-Datei augelagert habe, die von der
utils.js und der e2e.js ausgelesen wird. Im Quellcode ist jetzt nur noch der Name der .json_Datei statt der Zugangsdaten im Klartext zu finden.
- Weiterhin hat SonarQube vorgeschlagen, den Befehl ```app.disable("x-powered-by");``` in die index.js aufzunehmen, um weniger Einzelheiten über die Implementierung der App preiszugeben.  
&rarr; Den Befehl habe ich entsprechend in den Code aufgenommen und damit dann auch das letzte der drei festgestellten Sicherheitsrisiken behoben.

Code Smells:
- SonarQube hat an mehreren Stellen festgestellt, dass importierte Module nicht genutzt werden und der import-Befehl somit entfernt werden kann. 
- Zudem gab es in der todo.js des Frontends eine Stelle, an der aufgrund eines throw-Befehls ein Fehler erwartet wurde, der aber tatsächlich nie geworfen wurde.  
&rarr; Diese Probleme ließen sich leicht durch das Entfernen der entsprechenden Zeilen beheben.
- Weiterhin hat SonarQube zwei Hinweise dazu ausgegeben, dass in der todo.js das Attribut ```status``` verwendet wird, welches seit einer Weile deprecated ist.  
&rarr; Hierbei handelte es sich um ein falsch erkanntes Problem, da in der todo.js einfach nur ein Array die Bezeichnung ```status``` hat. 
Es handelt sich somit nicht um das deprecated ```status```-Attribut der Windows-Klasse von dem SonarQube ausgegangen ist. 
Ich habe die beiden Hinweise daher in SonarQube mit einer entsprechenden Begründung als false positive markiert. 
- Die weiteren Code-Smells bezogen sich auf Kommentare, die das Wort ToDo enthalten, da SonarQube hier davon ausgeht, dass es sich um Platzhalter für noch nicht implementierte Funktionen handelt. In diesem Fall handelte es sich aber durchgehend um Kommentare, die einfach nur die Funktionsweise der ToDo-Anwendung beschreiben.  
&rarr; Ich habe diese Hinweise entsprechend alle markiert und mit passender Begründung ebenfalls als false positive markiert.

Nach diesen Schritten zeigt SonarQube nun keine größeren Probleme mehr an. Das Einzige was jetzt noch angezeigt wird, sind Duplications. 
Hierbei handelt es sich um Codeabschnitte aus der todo.test.js, die sich schlicht deswegen doppeln, weil die Testfälle oft einen ähnlichen Aufbau haben.
Hier ist also nichts weiter zu veranlassen.

Mit der Integration von SonarQube und dem Beheben der von SonarQube aufgezeigten Probleme ist die Aufgabe jetzt soweit abgeschlossen.
Die Anwendung verfügt über ein funktionierendes Front- und Backend und wird durch automatische jest-, cypress- und SonarQube-Github-Actions überprüft.
Die Ergebnisse der letzten jest und cypress-tests sind als Bilder im Ordner Testergebnisse zu finden. 
Dort finden sich auch Ordner mit den Ergebnissen der ersten SonarQube-Analyse, sowie den SonarQube-Ergebnissen nach dem Beheben der von SonarQube aufgezeigten Fehler.








