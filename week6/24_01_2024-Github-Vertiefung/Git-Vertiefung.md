Branches anlegen und wechseln

git branch -> Zeigt alle vorhanden branches an. (\* ist wo man sich gerade befindet)
git branch BurgerMenu -> legt einen neune branch an.
git checkout BurgerMenu -> wechselt zu einen neuen branch
git checkout -b BurgerMenu2 -> legft einen neune branch BurgerMenu2 an und wechselt dahin
git branch -d BurgerMenu2 -> Löscht den branch BurgerMenu2
Ablauf eines Merges (Zusammenführung zweier branches.)

git checkout main -> Wechselt zum main branch (Davor muss man sich auf den main branch befinden)
git merge BurgerMenu -> Versucht den main Branch mit den BurgerMenu Branch zusammenzuführen
a. git add . b. git commit -m "merge branch" c. git push
git branch -d BurgerMenu -> Löscht den branch
Commits zurück gehen

git log --oneline -> id raussuchen wo man zurück will
git checkout 3290492 . -> man geht auf den alten stand zurück
git add .
git commit -m "back"
git push
Done
