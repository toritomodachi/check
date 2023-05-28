const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb+srv://duram4814:aYj6kDFz9kKh8YbS@onelife.4mdp0pa.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
  if (에러) return console.log(에러)
  app.listen(8085, function() {
    console.log('listening on 8080')
  })
})

