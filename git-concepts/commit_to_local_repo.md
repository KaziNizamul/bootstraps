<b>Step1 : </b> do `git status`
this will show, what r all untracked files r there.

(same as we see in "Changes" section of vscode Source Control)
<br><br><br>

<b> Step 2 : </b> `git add fileName.txt`
This will move your changes to staging area.

(same as like clicking "+" in "Changes" section of vscode, and move it to staging area)

> <b>Note :</b> when we are inside `some directory`, and want to add file changes `inside that directory`,
> we should `ADD THAT DIRECTORY` to staging area first by executing `git status dirA` , and then we can add, files inside of it, using
> `git add dirA/fileA.txt` > `git add dirA/fileB.txt`
>
> this is because,
> if we directory do `git add dirA/fileA.txt` without adding that `dirA` first,
> then, those file changes inside dirA, wont reflect in `git status`.

<br><br>

> <b>TRICK TO ADD FILE FILE TO STAGING AREA at once: </b>
> `git add . `
