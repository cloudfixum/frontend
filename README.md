# Production

https://cloudfixum.herokuapp.com

# Demo development server CloudFixum

https://cloudfixum-develop.herokuapp.com

# Locally

## Install nodejs v14.3.0

## Clone repository

git clone https://github.com/cloudfixum/frontend.git

## Install dependencies

npm install

## Run project locally

npm start

## Format code with prettier Important!!!!

npm run prettier

# Deploy on heroku

## Install Heroku cli

npm install -g heroku

## Login on Heroku

heroku login (ask for login details from smoked matias)

## Create app of heroku

heroku create cloudfixum-develop --remote heroku-staging --buildpack mars/create-react-app

## Add remote repository of heroku

heroku git:remote -a https://git.heroku.com/cloudfixum-develop.git

## Renaming remotes

git remote rename heroku heroku-staging

## Deploy

- If we are going to deploy in staging

git push heroku-staging develop:master

- If we are going to deploy to production

git push heroku master

# Heroku documentation

https://devcenter.heroku.com/articles/git
