# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Create json server

install json server - npm install json-server --save-dev (this will install package only for development)

need to create a json file in the root folder(for example 'db.json)

edit script in package.json ..add sever
"server": "json-server -p4001 --watch db.json"

## start server

to start server from terminal 'npm run server'

server will run at 4001 port and db.json will be the content.
