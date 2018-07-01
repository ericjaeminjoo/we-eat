const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
//   console.log(res);

  twiml.message('Order accepted! ETA 20 mins!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(8080, () => {
  console.log('Express server listening on port 8080');
});