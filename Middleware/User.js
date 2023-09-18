const {createjwts,verifyjwts} = require ("../Utils/JWTs")

// module.exports.getUser=(req ,res,next)=>{
//     const {AccessTokens,RefreshTokens}=req.cookies
//     if(!RefreshTokens) return next()
//    const user = verifyjwts(AccessTokens,"Access key")
//    if(user){
//     req.user = user 
//     return next()
//    }
//    const re = verifyjwts(RefreshTokens,"Refersh Key")
//    if(!user){
//         if(!re) return next()
//         const AccessTokens = createjwts(re,"Access key" ,"10s");
//         const RefreshTokens = createjwts(re,"Refersh Key" ,"10m");
//         res.cookie("AccessTokens", AccessTokens, {
//           MaxAge: 10000,
//           sameSite:true,
//           secure:true,
//           httpOnly:true
//         });
//         res.cookie("RefreshTokens", RefreshTokens, {
//           MaxAge: 600000,
//           sameSite:true,
//           secure:true,
//           httpOnly:true
//         });
//         const user = verifyjwts(AccessTokens,"Access key")
//         req.user = user 
//         return next()
//     }
// }




// import  jwt  from "jsonwebtoken";

module.exports.getUser = async(req, res, next) => {

    const authHeader = req.headers.authorization
    console.log("authHeader" ,authHeader);
    if(!authHeader || !authHeader.startsWith("Bearer")){
      
        res.status(401).json("authentication Invaild");
    }

    const token = authHeader.split(" ")[1];
    console.log(token, "token")

    try{
        // const payload  = jwt.verify(token, process.env.JWT_SECRET);

        const payload = await verifyjwts(token,"Access key")

        console.log(payload, "payload")

        req.user = payload;
    }
    catch(error){
            throw new Error("authentication Invaild")
    }
    
    return next();
}




