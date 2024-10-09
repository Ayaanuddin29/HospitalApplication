import jwt from 'jsonwebtoken'
//admin auth middleware

const authDoctor=async(req,res,next)=>{
try{
const {dtoken}=req.headers
if(!dtoken){
    return res.json({message:false,message:'Not Authorized Login Again'})
}
const token_decode=jwt.verify(dtoken,process.env.JWT_SECRET);
req.body.docId=token_decode.id
next()
}
catch(err){
    console.log(err)
    res.json({success:true,message:err.message})
}
}
export default authDoctor