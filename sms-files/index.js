const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
 
const app = express();
 
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
 
app.post('/sms', (req, res) => {
 
  // Start our TwiML response.
  const twiml = new MessagingResponse();
 
  // Add a text message.
  const msg = twiml.message('Check out this sweet owl!');
 
  // Add a picture message.
  msg.media('https://demo.twilio.com/owl.png');
 
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});
 
app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});