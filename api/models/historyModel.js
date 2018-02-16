const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historyModel = new Schema({
  term: { 
    type: String
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model('History', historyModel);