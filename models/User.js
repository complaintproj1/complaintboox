import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const schema = new mongoose.Schema({

    name:{
        type:String
        
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
    

});

schema.pre("save",async function(next){
this.hashedPassword= await bcrypt.hash(this.password,10);
next();
})

schema.methods.getJWTToken = function(){
    return jwt.sign({_id:this._id},this.process.env.JWT_SECRET,{expiresIn:"15d",});
};



schema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);};
export const User= mongoose.model("User",schema);