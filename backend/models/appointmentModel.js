import mongoose from "mongoose";

const appointmentSchema=new mongoose.Schema({
    userId:{
        type:String,
        reguired:true
    },
    docId:{
        type:String,
        reguired:true
    },
    slotDate:{
        type:String,
        reguired:true
    },
    slotTime:{
        type:String,
        reguired:true
    },
    userData:{
        type:Object,
        required:true
    },
    docData:{
        type:Object,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    cancelled:{
        type:Boolean,
        default:false
    },
    payment:{
        type:Boolean,
        default:false
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})
const appointmentModel=mongoose.models.appointment||mongoose.model('appointment',appointmentSchema)
export default appointmentModel