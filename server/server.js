require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");

connectDB();
const app = express();

const axios = require("axios");
const Sent = require("./models/sent");
app.use(express.json());
app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);


app.post('/send-email', async (req, res) => {
  const { recipient, subject, message} = req.body;
  const serverToken = 'b550e753-fe86-49e1-9064-5519afadc66d';

  try {
    const response = await axios.post(
      'https://api.postmarkapp.com/email',
      {
			"From": "tirecig704@ikanid.com",
			"To": recipient,
			"Subject": subject,
			"HtmlBody": "",
			"TextBody": message
      },
      {
        headers: {
          'Content-Type': 'application/json',
		  'Accept' : 'application/json',
          'X-Postmark-Server-Token': serverToken,
        },
      }
    );

    // Save the sent email in the "sent" collection
    await Sent.create({
      recipient: recipient,
      subject: subject,
      message: message,
    });

    console.log('Email sent successfully:', response.data);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

app.get('/sent-emails', async (req, res) => {
  try {
    const sentEmails = await Sent.find(); // Retrieve all sent emails
    res.json(sentEmails);
    console.log(sentEmails);
  } catch (error) {
    console.error('Error fetching sent emails:', error);
    res.status(500).json({ error: 'Error fetching sent emails' });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
