var twilio = require('twilio')(env.TWILIO_SID, env.TWILIO_KEY),
var express = require('express'),
var router = express.Router(),
var number = '+919176483357'

router.post('/', getMessage);
router.post('/send', sendMessage);

function getMessage(req, res){
var user_phone = req.body.phone;
var message = req.body.Body;
//code to store message in database//
};

function sendMessage(to, message){
return twilio.sendMessage({
to: to,
from: number,
body: message
}, function(err, response){
if(err) console.log("error", err);
//code to store message in your database//
});
};
