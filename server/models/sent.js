// Assuming you have a Sent model defined like this
const mongoose = require('mongoose');

const sentSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Sent = mongoose.model('Sent', sentSchema);

module.exports = Sent;
