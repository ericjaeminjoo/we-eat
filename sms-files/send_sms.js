// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC7052a5c2235109743ef7b375ee5110c4';
const authToken = '7e4230f32a51eba5f7865b62bf4d5a9e';
const client = require('twilio')(accountSid, authToken);
const orderNum = 10931;
client.messages
  .create({
     body: `Order number: ${orderNum}`,
     from: '+14387956461 ',
     to: '+15142689002'
   })
  .then(message => console.log(message.sid))
  .done();