const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var quoteSchema = new Schema ({
  imgurl: String,
},{
  timestamps: true
})

var Quote = mongoose.model('Quote', quoteSchema)
module.exports = Quote
