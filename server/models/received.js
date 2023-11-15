// models/received.js
const mongoose = require('mongoose');

const receivedSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  subject: { type: String, required: true },
  textBody: { type: String, required: true },
});

const Received = mongoose.model('Received', receivedSchema);

module.exports = Received;
