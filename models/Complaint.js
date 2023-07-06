import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name:{
        type:String
        
    },
    email:{
        type:String
    },
    password:{
        type:String
    },

    contact:{
        type:String
    },
    description:{
        type:String
    }


});

export const Complaint= mongoose.model("Complaint",schema);