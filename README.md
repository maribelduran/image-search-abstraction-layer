# Image Search Abstraction Layer :camera:

This service accepts a search string as a parameter and will return a set of images relating to the given search string. The JSON response includes the image's URL, alt text, thumbnail link, and context link. You can also get a list of the most recently submitted search strings.


You can test it at https://img-search-layer-microsrvc.herokuapp.com

A Full Stack Javascript application built using [MongoDB](https://www.mongodb.org/), [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/). An API Project for FreeCodeCamp.

## Example Creation Usage

To retrieve a set of images, pass a search term to path  https://<i></i>img-search-layer-microsrvc.herokuapp.com/api/imagesearch/[SEARCHTERM] 
  
You can also paginate through the responses by adding a ? offset=[number] parameter to the URL path.
  
 ### Valid Image search API call examples
 ```
    https://img-search-layer-microsrvc.herokuapp.com/api/imagesearch/puppies
    https://img-search-layer-microsrvc.herokuapp.com/api/imagesearch/puppies?offset=2
 ```
 
## Example Creation Output
```javascript
[
  {
  url: "https://www.dogliciousspa.com/v/vspfiles/assets/images/puppiesplaying.jpg",
  alt_text: "Puppy Socialization, Puppy Class, Training, Dogs, Dog Training ...",
  thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKw73Q78qFF4WA8BrYpA6T_C0cZgd6yvM6QNjQhzJMHrW02vu0UxMjt5h",
  contextLink: "https://www.dogliciousspa.com/category-s/171.htm"
  },
  {
  url: "https://i.ytimg.com/vi/2Y1ZyjGdPeE/maxresdefault.jpg",
  alt_text: "Puppies Talking and Arguing With Their Humans Compilation - YouTube",
  thumbnailLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoM6k7NCjsTVjuvRXTelL7s8XEI0LNicjVZPz4Wy2FkdFMbPJ7xHX5W8",
  contextLink: "https://www.youtube.com/watch?v=2Y1ZyjGdPeE"
  },
  .
  .
  .
]
```  

## To get list of the most recent submitted search strings

Make a request to:
```javascript
  https://img-search-layer-microsrvc.herokuapp.com/api/recent
``` 

## To Run Project Locally

### Prerequisites
In order to run this project locally, you should have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com//)
- [MongoDB](https://www.mongodb.org/)

You should also:
  1) Create a Google Custom Search Engine [https://cse.google.com/cse](https://cse.google.com/cse): Do not specify any sites to search but instead use the "Restrict Pages using Schema.org Types" under the "Advanced options". For the most inclusive set, use the Schema: Thing. In your search engine settings, enable "Image search". <b>Make a note of the CSE ID.</b>
  
  2) Set up a Google Custom Search Engine API:
      Register a new app and enable Google Custom Search Engine API [Google Developers Console](https://console.developers.google.com).
<b>Make a note of the API key.</b>

### Installation & Startup
1) Fork this repo
2) Clone the fork
3) Install Dependencies: `$ npm install`
4) Run your MongoDB server: `$ mongod --port 27017 --dbpath=./data`

      *Note*: Your mongoDB is now running at: mongodb://localhost:27017/<your_database_name>

5) Add a .env file to your project's root directory and set MONGO_CONNECTION_STRING to mongodb://localhost:27017/<your_database_name>
      ``` JavaScript 
      MONGO_CONNECTION_STRING=mongodb://localhost:27017/<your_database_name>
      ```

    <kbd>
    <img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_500/v1519249003/mongoConnection_ImageSearch_lwbq6o.png"> 
    </kbd>

6) You wil also need the CSE ID and your Google CSE API Keys in your .env file and name them CSE_ID and
CSE_API_KEY, respectively
      ``` JavaScript 
        CSE_ID=<your_cse_id>
        CSE_API_KEY=<your_google_cse_api_key>
      ```
      <kbd>
      <img src="http://res.cloudinary.com/maribelduran/image/upload/c_scale,w_500/v1519249003/googleCSEID_bh3yss.png"> 
      </kbd>

7) Start the Server: `$ node app.js`
8) Visit http://localhost:3000/

Enjoy! :blue_heart:
