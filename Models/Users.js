var mongoose = require("mongoose");

const Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please Provide name "],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    Email: {
      type: String,
      required: [true, "Please Provide email "],
      unique: true,
      // validate: {
      //   validator: validator.isEmail,
      //   message: "please provide valid email",
      // },
    },
    Password: {
      type: String,
      required: [true, "Please Provide Password "],
      minlength: 6,
      select : false
    },
    location: {
      type: String,
      trim: true,
      default: "",
    },

    designation :{
      type: String,
      trim: true,
      default: "",
    },

    profilePicture: {
      url : String,
      public_id: String,
    },
    role: {
      type: String,      
      required: true,
    },
    projects: [{ type: Schema.Types.ObjectId, ref: "Repositories" }],
    
    githubLink: { type: String, default: "" },
    googleScholarProfileLink: { type: String, default: "" },
    linkedIn: { type: String, default: "" },
    intstagram: { type: String, default: "" },

    userBio: {
      type: String,
      default: "",
    },
    skillSet: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skills",
      },
    ],
    workExperience: [
      {
        type: Schema.Types.ObjectId,
        ref: "WorkExperience",
      },
    ],

    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Repositories",
      },
    ],

    organisation: [
      {
        type: Schema.Types.ObjectId,
        ref: "Organisation",
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
    approved: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
