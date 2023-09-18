const mongoose = require("mongoose");
const ResourceSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  About: {
    type: String,
    required: true
  },
  Authors: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  Degree : {
    type: String,
    required: true
  },
  Course: {
    type: String,
    required: true,
  },
  DriveLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Resources", ResourceSchema);
