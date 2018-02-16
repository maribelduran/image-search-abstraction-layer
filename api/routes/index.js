const router = require('express').Router();
const History = require('../models/historyModel.js')

//Route to process GET api/imagesearch/:search requests
  //2) this route should search send the search request to the Google or Bings API server and the respond back with the search results
    //need an node module that will send requests to either Google search or Bings search API 
router.route('/imagesearch/:searchTerm')
.get((req, res) => {
  const searchTerm = req.params.searchTerm;
  //save the search string into the history database
  const history = new History({term: searchTerm});
  console.log(req.params.searchTerm);
  history.save(function(err, history) {
      if (err) throw err;
      console.log('Saved ' + history);
  });
  let response = { response: `You want to search for images of ${req.params.searchTerm}`}
  res.json(response);
});
  
//route to process GET api/recent requests
//this route should send a request to the database and find the top 10 most recent searches and respond back with the results 
router.route('/recent')
.get((req, res) => { 
  const query = {};
  const filter = { _id: 0, term: 1, createdAt: 1 };
  
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