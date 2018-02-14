# Image Search Abstraction Layer :camera:

This service accepts a search string as a parameter and will return a set of images relating to the given search string. The response includes the images URLs, alt text and page urls. You can also get a list of the most recently submitted search strings.


You can test it at https://img-search-layer-microsrvc.herokuapp.com

A Full Stack Javascript application built using [MongoDB](https://www.mongodb.org/), [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/). An API Project for FreeCodeCamp.

## Example Creation Usage
--

## Example Creation Output
--

## Usage:
--

## To Run Project Locally

### Prerequisites
In order to run this project locally, you should have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com//)
- [MongoDB](https://www.mongodb.org/)

### Installation & Startup
1. Fork this repo
2. Clone the fork
3. Install Dependencies: `$ npm install`
4. Run your MongoDB server: `$ mongod --port 27017 --dbpath=./data`

*Note*: Your mongoDB is now running at: mongodb://localhost:27017/<your_database_name>
5. Add a .env file to your project's root directory and set MONGO_CONNECTION_STRING to mongodb://localhost:27017/<your_database_name>
``` JavaScript 
MONGO_CONNECTION_STRING=mongodb://localhost:27017/<your_database_name>
```

<kbd>
<img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_500/v1513125661/UrlShortener_env_jbj3by.png"> 
</kbd>

6. Start the Server: `$ node app.js`
7. Visit http://localhost:3000/

Enjoy! :blue_heart:
