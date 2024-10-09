import jwt from 'jsonwebtoken'
//user auth middleware

const authUser=async(req,res,next)=>{
try{
const {token}=req.headers
if(!token){
    return res.json({message:false,message:'Not Authorized Login Again'})
}
const token_decode=jwt.verify(token,process.env.JWT_SECRET);
req.body.userId=token_decode.id

next()
}
catch(err){
    console.log(err)
    res.json({success:true,message:err.message})
}
}
export default authUser