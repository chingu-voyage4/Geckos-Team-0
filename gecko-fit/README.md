# Geckos-Team-0
## Gecko Fit - Nutrition calculator

### Git workflow

This git work flow is based on the wonderful Medium guides on how to not f- up your local files. 
* [Part 1](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c)
* [Part 2](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-2-fc4e243be02a)

#### Master Branch
This is the production branch and code will only be pushed to this branch once it has been tested and reviewed.

#### Dev Branch
This is the primary development branch. All pull requests will be sent to this branch where they will be reviewed before being merged.

In order to start working you will clone the repo  `https://github.com/chingu-voyage4/Geckos-Team-0.git`.
The dev branch has been set to the default so you should have to switch to the dev branch. But if you do you can use type `$ git checkout dev`.

All coding should be done on individual branches. Type `$ git checkout -b myNewBranch` to create a new branch. Typing `git branch` will confirm that you have been successfully switched to your working branch.

#### Naming branches

When naming branches, we want to follow this format: Type/short description. 
There are 4 basic types of branches we'll be using during development; the bug fix, new feature, code refactoring, and design/CSS styling.

Examples are below:
* `"bug/fixed-all-caps"`
* `"feature/giant-duck-modal"`
* `"refactor/add-prop-types"`
* `"style/everything-is-black"`
* `"documentation/made-change-to-readme"`

`$ git checkout -b style/pink-buttons` Is pretty descriptive and let's your team mates know what you are working on.

### Accidently started development on the dev branch!
There are two ways to fix this if you accidently started coding on the `dev` branch.
The first one is to be used **if you haven't commited anything**. 
Just use `$ git stash` which will  store your changes *somewhere* (most likely the void) and removes them from the `dev` branch. Then just type the commands below to put your changes into a new branch.

`$ git checkout -b feature/rubber-duck-cta`

`$ git stash pop`

Beware! If you use `$git stash` a second time it will delete your previous stash.

The second way is to be used if you ** already made some commits**.

The command  `$ git push origin development:fix/your-smart-fix` will save the code into a newly created branch called *fix/your-smart-fix*.
You will then have to delete the development branch using the commands below.

'$ git checkout master`
`$ git branch -D development`
`$ git fetch`
`$ git checkout development // optional, just to see that it's clean`
`$ git checkout fix/your-smart-fix`
