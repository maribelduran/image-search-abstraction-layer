const router = require('express').Router();
const History = require('../models/historyModel.js')
const imageSearch = require('node-google-image-search');

//Route to process GET api/imagesearch/:search requests
router.route('/imagesearch/:searchTerm')
.get((req, res) => {
  const searchTerm = req.params.searchTerm;
  const offset = (req.query.offset) ? req.query.offset : 0;
  
  //save the search string into the history database
  const history = new History({term: searchTerm});
  history.save(function(err, history) {
      if (err) throw err;
      console.log('Saved ' + history);
  });
  
  //sends an image search request to Google Custom Search Engine and send the response as an JSON object.
  const results = imageSearch(searchTerm, updateResults, offset, 2);
 
  function updateResults(images) {
    if(images.error && images.error.errors) {
      return images.error;
    }
    const imageResults = images.map((image)=>{
      return  {
        url: image.link,
        alt_text: image.snippet,
        thumbnailLink: image.image.thumbnailLink,
        contextLink: image.image.contextLink 
      }
    });
    res.json(imageResults);
 }
});

//route to process GET api/recent requests
router.route('/recent')
.get((req, res) => { 
  const query = {};
  const filter = { _id: 0, term: 1, createdAt: 1 };
  
  //Find the top 10 most recent searches and respond back with the results 
  History.find(query, filter).
  limit(10).
  sort({ createdAt: -1 }).
  exec((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
  });
});

module.exports = router;