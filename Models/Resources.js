const mongoose = require("mongoose");
const ResourceSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Authors: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  DriveLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Resources", ResourceSchema);
