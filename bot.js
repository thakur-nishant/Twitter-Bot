console.log("Starting twitter bot!");

var Twit = require('twit')

var config = require('./config')

var T = new Twit(config)


T.post('statuses/update', { status: 'Hello World! A post from my NodeJS bot.' }, function(err, data, response) {
    console.log("Success!")
})