# Motivational Messages Project 
*Codecademy - Fullstack Engineer Path*

## Project Objectives:
* Build a message generator program using JavaScript
* Use Git version control
* Use command line
* Develop locally on your computer

### What I've learned
For this project, I took the time to practice building a program that will generate random motivational messages to the user with three different data sets in an object. 
Codecademy has a cheat sheet on Objects which helped me a lot along the way of building this program. I created the following three methods within my mixed messages object: 
`quote()`, `motivation()`, and `affirmation()`. Separating each data set in each method of the object made it a lot easier for me to read my code during implementation.  

Moreover, I utilized Git Bash to set up version control in my directory. The Git cheat sheet was a great resource that helped me with setting up version control and creating a new branch.
I learned the importance of working on a separate branch rather than working on the main branch and to merge the branches together once I finish building my program. 

### Challenges I overcomed:
Git Bash was a little struggle for me at the beginning but thankfully I was able to locate the Git cheat sheet, it helped tremendously. One area I really had a hard time was trying to merge
my test-branch to my master branch. I kept inputting `git merge master` while I was currently on the test-branch but I kept getting a 'Already up to date.' message in Git Bash.
I was able to resolve this issue by testing `git checkout master` so I can see what VSCode will show. It switched me to the master branch which the file was empty. So I input `git merge test-branch`
so the branch I was working on can be merged to the master. The master branch was updated. 

**Resources**  
---
[JavaScript Strings](https://www.javascript.com/learn/strings)  
[Learn JavaScript Syntax: Objects](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-learn-javascript-syntax-objects/cheatsheet)  
[Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)  
[MDN: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)  
