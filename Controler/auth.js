var users = require("../Models/Users");
var bcrypt = require("bcrypt");
var { createjwts} = require("../Utils/JWTs");
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
    await res.status("201").json(newu);
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
    console.log("logged in")
    if (!match) return res.status("203").json("password dose not exist");
    const AccessTokens = createjwts(user,"Access key" ,"10s");
    const RefreshTokens = createjwts(user,"Refersh Key" ,"10m");    
    res.cookie("AccessTokens", AccessTokens, {
      MaxAge: 10000,
      sameSite:true,
      secure:true,
      httpOnly:true
    });
    res.cookie("RefreshTokens", RefreshTokens, {
      MaxAge: 600000,
      sameSite:true,
      secure:true,
      httpOnly:true
    });

    res.status('200').json('Logged in');
  } catch (err) {
    res.status("400").json(err);
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
