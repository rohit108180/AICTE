const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./Routes/User");
const repos = require("./Routes/Repos")
const versions = require("./Routes/Version")
const resources = require("./Routes/Resources")
const {getUser} = require("./Middleware/User")

const app = express();
app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user", user);
app.use("/repos",getUser,repos);
app.use("/version",getUser,versions);
app.use("/resources", getUser, resources);

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://rohit108180:R320101r@aicte-sih.6c2ucnm.mongodb.net/");
    app.listen(process.env.PORT || 5000, () =>
      console.log("Listening on port 5000")
    );
  } catch (error) {
    console.log(error);
  }
};

start();
