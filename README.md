# Bookaholic Backend
This repository provides the data-serving routes, models, and controllers for the frontend. 

* *Date Created*: 10 Mar 2022
* *Last Modification Date*: 29 Mar 2022
* *Git URL*: <https://git.cs.dal.ca/pthakkar/group3_csci5709_backend>
* *Deployment URL*: <https://bookaholic-backend.herokuapp.com/>

## Authors

- [Abhinav Rawat (B00895691)](mailto:abhi@dal.ca) - _(Maintainer)_
- [Jainam Rakeshkumar Shah (B00883898)](mailto:jainam@dal.ca) - _(Maintainer)_
- [Mitul Pravinbhai Malani (B00869519)](mailto:mt215690@dal.ca) - _(Maintainer)_
- [Ninad Nitin Shukla (B00863694)](mailto:nn320259@dal.ca) - _(Maintainer)_
- [Prit Thakkar (B00890731)](mailto:Prit.Thakkar@dal.ca) - _(Maintainer)_
- [Yashvi Gulati (B00900339)](mailto:ys849413@dal.ca) - _(Maintainer)_

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- node (version 16 or higher)
- a code editor of your choice

### Installing
- Install [Node](https://nodejs.org/en/download/) as per your operating system
- Check version of node by running ```node --version```
- Clone the project from [here](https://git.cs.dal.ca/pthakkar/group3_csci5709_backend.git)
- Navigate to project folder
- Open terminal in that folder and type ```npm install```
- Now run ```node index.js```
- [Here's the link](http://localhost:8080) to access the API, you can access it using postman


## Deployment
- Firstly, create a Procfile for deployment
- Contents of Procfile include the ```npm install``` command and the ```node index.js``` which are required to run the application
- Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) for your target operating system
- Vefify the installation by running ```heroku --version``` in your terminal
- In your terminal, type ```heroku login``` to login into heroku, if you dont have a free account, you can create one from [here](https://signup.heroku.com/)
- Now type ```heroku create [app-name-you-want]```
- This will create an empty application with the name you specified on heroku
- (*skip this step if you already have a clone*) Now type ```git init``` to initialize the project
- Now type ```git add .```
- Now type ```git commit -m "Initial Commit"```
- Now type ```git push heroku main``` and wait for the deployment to complete
- The deployment should be now available at *[your-app-name].herokuapp.com*
## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

## Acknowledgments

* NodeJS
* Heroku
* GitLab
