var users = require("../Models/Users");
var bcrypt = require("bcrypt");
var { createjwts} = require("../Utils/JWTs");

var { v2  } = require("cloudinary");
module.exports.Register = async (req, res) => {
  try {
    const { name,  Email, Password, role } = req.body;

    if(!name || !Email || !Password || !role){
      return await res.status("400").json("please provide all the fields");
    }

    console.log("123",req.body);
    old = await users.findOne({ Email });
    if (old) {
      return await res.status("409").json("already exists");
    }
    newPassword = await bcrypt.hash(Password, 12);
    const newu = await users.create({ name,Email, Password: newPassword, role });

    console.log(newu);
    const AccessTokens = createjwts(newu,"Access key" ,"1d");

    console.log(AccessTokens)
    newu.password = undefined;
    res.status(201).json({ user: newu, token :AccessTokens });

  } catch (err) {
    res.status("400").json(err);
  }
};


module.exports.Login = async (req, res) => {
  try {

    const { Email, Password } = req.body;
    console.log(req.body);
    const user = await users.findOne({ Email }).select("+Password");
    console.log(user);
    if (!user) return res.status("404").json("user dose not exist");
    const match =  await bcrypt.compare(Password,user.Password);
    if (!match) return res.status("203").json("password dose not exist");
    const AccessTokens = createjwts(user,"Access key" ,"1d");
    // const RefreshTokens = createjwts(user,"Refersh Key" ,"10m");    
    // res.cookie("AccessTokens", AccessTokens, {
    //   MaxAge: 10000,
    //   sameSite:true,
    //   secure:true,
    //   httpOnly:true
    // });
    // res.cookie("RefreshTokens", RefreshTokens, {
    //   MaxAge: 600000,
    //   sameSite:true,
    //   secure:true,
    //   httpOnly:true
    // });
    
    console.log("logged in")

    console.log(AccessTokens)
    user.password = undefined;
    res.status(200).json({ user, token :AccessTokens });

    console.log("login user");
  } catch (err) {
    res.status(400).json(err);
  }
};


module.exports.UpdateUser = async (req, res) => {
  console.log(req.body);

  let updatedUser = req.body;

  if (updatedUser.profilePhoto) {

    console.log("comming in this");

    v2.config({
      cloud_name: "diiehbal5",
      api_key: "766823617577317",
      api_secret: "dMQA7mUrL75ET6L9OKegUIEH3n0",
    });
    
    const result = await v2.uploader.upload(
      updatedUser.profilePhoto,
      {
        folder: "ScholarSphere/profilePicture",
        width: 150,
        crop: "scale",
      },
      function (error) {
        if (error) {
          console.log(error);
          res.status(400).json({ error });
        }
      }
    );

    delete updatedUser.profilePhoto;

    console.log("the new result", result);

    updatedUser.profilePicture = {
      public_id: result.public_id,
      url: result.secure_url,
    };

  }
  const result1 = await users.updateOne(
    { _id: updatedUser._id },
    { $set: updatedUser }
  );
  updatedUser.password = undefined;
  // Check if the user was found and updated successfully
  if (result1.matchedCount === 1 && result1.modifiedCount === 1) {
    res.status(200).json({ user: updatedUser });
  } else {
    res.status(404).send("User not found");
  }
};

module.exports.Logout =async(req,res)=>{
  const user = req.user
  if(!user) return res.status("401").json("unAutherized")
  try{
  res.clearCookie("AccessTokens");
  res.clearCookie("RefreshTokens");
  res.status("200").json("logged out")
  }
  catch(err){
    console.log("err" ,err)

    res.status("400").json(err)
  }
}


