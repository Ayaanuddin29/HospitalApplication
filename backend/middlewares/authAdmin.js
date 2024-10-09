import jwt from 'jsonwebtoken'
//admin auth middleware

const authAdmin=async(req,res,next)=>{
try{
const {atoken}=req.headers
if(!atoken){
    return res.json({message:false,message:'Not Authorized Login Again'})
}
const token_decode=jwt.verify(atoken,process.env.JWT_SECRET);
if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
    res.json({success:false,message:'Not Authorized'})
}
next()
}
catch(err){
    console.log(err)
    res.json({success:true,message:err.message})
}
}
export default authAdmin