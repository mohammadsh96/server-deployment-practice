# server-deployment-practice
🔗[heroku app](https://mohammadsh9-server-deploy-prod.herokuapp.com/)✔️
🔗[GitHub Actions](https://github.com/mohammadsh96/server-deployment-practice/actions)✔️
🔗[pull request](https://github.com/mohammadsh96/server-deployment-practice/pull/2)✔️

## notes and steps📝

### On Github

Create a new repository at GitHub, called server-deployment-practice
Select the “Add a README” option
Select the “Add a .gitignore” option, and choose Node.js
Opt for the MIT license
Clone this to your local machine.
create a “dev” branch : git checkout -b dev

#### Heroku

Create a new Heroku app, called mohammadsh96-server-deploy-dev
Connect to this repository
Choose the “dev” branch

Create a new Heroku app, called mohammadsh9-server-deploy-prod

Connect to your repository
Choose the “main” branch

#### The Code

Initialize my app : – npm init -y
Install your dependencies : – npm install dotenv express jest
Create the files and folders : src / middelware / handlers / server.js / index.js ..etc
Test server :  – npm test
Start  server :– nodemon

#### Deploy to Dev

- ACP on  dev branch.
 after we check it passing all test
Open a pull request from dev to main
merge this branch
Once the tests pass, Heroku will deploymy “main” branch to my “production” app!
