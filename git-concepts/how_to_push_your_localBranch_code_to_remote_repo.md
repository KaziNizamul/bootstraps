<b> Step 1 : clone that repo first .. </b>

<br>

<b> Step 2 :</b> then check `"git remote -v"`
that should show something like :
<i>
origin https://github.com/KaziNizamul/bootstraps.git (fetch)
origin https://github.com/KaziNizamul/bootstraps.git (push) </i>

it being executed to check, that
our local repo, is having a correct association, with remote repo or not.
<br>

> <i>origin </i> : is the name for Server (main project) given by git.
> <i>master </i>: by default(untill u dont create any branch of yours), there is only one branchm called <b>`master`</b>

<br><br>

<b> Step 3 :</b> if the above is not there, then do `"git remote add RemoteUrl"`

<br>

<b> Step 4 : `git push -u origin master`</b>

-<b>u is for :</b> <i>having a tracking relation b/w local & remote branch</i>
<b>origin is for :</b> <i> repository to which we are pushing to
( just now we checked, `to whom we r pushing to`, by `git remote -verbose`) </i>
<b>master is for :</b> <i> to which branch we are pushing to. since by default there is one single branch present, and its name is master. so. </i>
