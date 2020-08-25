# CloudFixum in production

https://cloudfixum.herokuapp.com

# CloudFixum in develop

https://cloudfixum-develop.herokuapp.com

# Generate local
Requirement to have nodejs v14.3.0 installed and then clone the repository
```bash
git clone https://github.com/cloudfixum/frontend.git
```
Install dependencies
```bash
npm install
```
Run project locally
```bash
npm start
```

Format code with prettier Important!!!!
```bash
npm run prettier
```

# Deploy on heroku

Install Heroku cli
```bash
npm install -g heroku
```

Login on Heroku
```bash
heroku login
```
Create app of heroku
```bash
heroku create cloudfixum-develop --remote heroku-staging --buildpack mars/create-react-app
```
Add remote repository of heroku
```bash
heroku git:remote -a https://git.heroku.com/cloudfixum-develop.git
```
Renaming remotes
```bash
git remote rename heroku heroku-staging
```

## Deploy

<<<<<<< HEAD
npm run prettier

## Deploy on heroku

# Install Heroku cli

npm install -g heroku

# Login on Heroku

heroku login (ask for login details from smoked matias)

# Create app of heroku

heroku create cloudfixum-develop --remote heroku-staging --buildpack mars/create-react-app

# Add remote repository of heroku

heroku git:remote -a https://git.heroku.com/cloudfixum-develop.git

# Renaming remotes

git remote rename heroku heroku-staging

# Deploy

- If we are going to deploy in staging

git push heroku-staging develop:master

- If we are going to deploy to production

git push heroku master

## Heroku documentation

https://devcenter.heroku.com/articles/git
=======
- If we are going to deploy in staging
```bash
git push heroku-staging develop:master
```
- If we are going to deploy to production
```bash
git push heroku master
```
# Heroku documentation

https://devcenter.heroku.com/articles/git

# Pagination documentation
https://material-ui.com/es/api/pagination/
>>>>>>> 490c4aba0ff0cb56048241f869fab9db587ad4c1
