// Twilio Credentials
const accountSid = 'AC7a39bc2ca320d46434744f6c3c441590';
const authToken = '0eca80f3ee6f151484371e0410bd03e2';

// Require the Twilio module and create a REST client
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

client.messages.create(
  {
    to: '+16479381887',
    from: '+12677145124',
    body: `
      Name: Hamza Khamissa
      Address: 75 Ann St
      PhoneNumber: 647-937-1887
      DispatchedService: Police
      IncidentDetails: Loud noise disturbance from neighboring apartment. Sounds like a party that has been going on for hours. No signs of violence or disruptive behavior, just loud noise affecting the entire building.
    `
  },
  (err, message) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(message.sid);
    }
  }
);
