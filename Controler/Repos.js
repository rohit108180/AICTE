const Repodoc=require("../Models/Repos")
var users = require("../Models/Users");
module.exports.Add= async (req,res)=>{
    try {
        const user = req.user
        if(!user) return res.status("401").json("unAutherized")   
        const obj = {
            Title:req.body.Title,
            Desc:req.body.Desc,
            User:req.user._id
        }
        const old = await Repodoc.findOne({ Title:obj.Title });
        if (old) {
          return await res.status("409").json("already exists");
        }   
        const Repo = await Repodoc.create(obj) 
        console.log("Repo",Repo)
        await res.status("201").json(Repo)
    }
    catch(err){
        await res.status("400").json(err)
    }
}
module.exports.View= async (req,res)=>{
    try{    
        const user = req.user
        if(!user) return res.status("401").json("unAutherized")      
        const Repo = await Repodoc.find({User:req.user._id}) 
        console.log("Repo",Repo)
        await res.status("200").json(Repo)
    }
    catch(err){
        await res.status("400").json(err)
    }
}


module.exports.ViewAll= async (req,res)=>{
    try{    
        const user = req.user
        if(!user) return res.status("401").json("unAutherized")      
        const Repo = await Repodoc.find().sort({date:-1} );
        console.log("Repo",Repo)
        await res.status("200").json(Repo)
    }
    catch(err){
        await res.status("400").json(err)
    }
}

module.exports.ViewOne= async (req,res)=>{
    try{    
        const user = req.user
        if(!user) return res.status("401").json("unAutherized")      
        const Repo = await Repodoc.findOne({_id:req.params.id}) 
        console.log("Repo",Repo)
        await res.status("200").json(Repo)
    }
    catch(err){
        await res.status("400").json(err)
    }
}
module.exports.delete= async (req,res)=>{
    try{    
        const user = req.user
        if(!user) return res.status("401").json("unAutherized")
        
        const old = await Repodoc.findOne({ _id:req.params.id });
        if (!old) {
          return await res.status("404").json("does not exists");
        }
        const Repo = await Repodoc.deleteOne({_id:req.params.id}) 
        await res.status("200").json(Repo)
    }
    catch(err){
        await res.status("400").json(err)
    }
}
module.exports.update= async (req,res)=>{
    try{
        const user = req.user
        if(!user) return res.status("401").json("unAutherized")      
        const old = await Repodoc.findOne({ _id:req.params.id });
        if (!old) {
          return await res.status("404").json("does not exists");
        }
        const obj = {
            Title:req.body.Title,
            Desc:req.body.Desc,
            User:req.user._id
        }
        const old1= await Repodoc.findOne({ Title:obj.Title });
        
        if (old1&&old1._id!=req.params.id) {
          return await res.status("409").json("already exists");
        }   
 
        const Repo = await Repodoc.findOneAndUpdate({ _id: req.params.id },obj)
        console.log("Repo",Repo)
        await res.status("200").json(Repo)
    }
    catch(err){
        await res.status("400").json(err)
    }
}


module.exports.addBookmark = async (req,res)=>{
    const user = req.user
    console.log(req.params.id)
    console.log(req.user)
    if(!user) return res.status(401).json("unAutherized")


    try{
      const old = await users.findOne({_id:req.user._id})
      if(!old) return res.status(404).json("user not found")
        console.log("olduser",old)
      const bookmarkId = old.bookmarks.find((id)=> id == req.params.id)
        console.log("bookmarkId",bookmarkId)
      if(bookmarkId) return res.status(200).json({msg :"Already bookmarked"})
      else{
        console.log("creating new bookmark")
        old.bookmarks.push(req.params.id);
        await old.save()
        console.log("newuser",old)
        return res.status(200).json({user : old, msg :"Curriculum bookmarked"})
        }
    }
    catch(err){
      res.status(400).json({msg : err})
    }
  } 


  module.exports.getBookmarks = async (req,res)=>{
    const user = req.user
    if(!user) return res.status(401).json("unAutherized")
    try{

        // i want all bookmarks ids to be replaced by Repo objects


      const old = await users.findOne({_id:req.user._id}).populate("bookmarks");
      if(!old) return res.status(404).json("user not found")
      const bookmarks = old.bookmarks
      console.log("bookmarks",bookmarks)
      return res.status(200).json({bookmarks : bookmarks})
    }
    catch(err){
      res.status(400).json({msg : err})
    }
  }
  