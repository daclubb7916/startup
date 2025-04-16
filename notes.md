# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Notes on Vim:
:h = help

i = enter insert mode

u = undo

/ = search for text

:w = write file

:q = quit (or :q! to exit without saving)

## Notes on Git
git init = initialize a directory as a Git repository

git status = tells you what Git is doing

git add . = track everything git doesn’t know about in directory

git commit -m "message" = commits a version in the repository

git commit -m "title" -m "description"

git commit -am “some_description” = adds all modified tracked files and commits

git log = view versions

git checkout (SHA) = temporarily switch back to a previous version

git switch -c "new-branch-name" = create a new branch to retain commits you create while in a previous version

git switch - = undo previous operation (- is a parameter)

git diff HEAD HEAD~n = compare head with the head n commits ago 

git -h = help. most useful command by far lol

git branch "name" = creates a new branch

### Git Best Practices:
```
1. Pull the repository's latest changes (git pull)
2. Make any changes/additions
3. Commmit the changes (git commit)
4. Push the changes to GitHub (git push)
```

## Notes on your Server
URL - http://18.235.63.214

## CSS Notes:
.(class) - class selector

#id - id selector (All id's should be unique)

a[href='(ref)'] - attribute selector

### Bootstrap install
npm install bootstrap@5.3.3
