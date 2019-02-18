![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## React Queue Server

### Author: George Raymond

### Links and Resources

[![Build Status](https://www.travis-ci.com/georgeraymond92/00-deployment.svg?branch=master)](https://www.travis-ci.com/georgeraymond92/00-deployment)
* [front end](https://github.com/georgeraymond92/queue-server-client)
* [Queue-server](https://github.com/georgeraymond92/queue-server-react)
* [API-Server](https://github.com/georgeraymond92/api-server-react-queue)

### Modules
#### React Front End
##### Setup
###### `.env` requirements
* `PORT` - 3000 or defined in the environment

###### Running the app
* `npm start`

#### Queue Server

##### Setup
###### `.env` requirements
* `PORT` - 3333

###### Running the app
* `npm start`


#### API Server

##### Setup
###### `.env` requirements
* `PORT` - 8080
* `Q_SERVER - http://localhost:3333
* `MONGODB_URI` - mongodb://localhost:27017/baseball

###### Running the app
* `npm start`


#### Status
This app is not yet complete. The api server is not conecting to the queue server. The queue server seems to be working well with the front end. Waiting to deploy till I can work out bugs
