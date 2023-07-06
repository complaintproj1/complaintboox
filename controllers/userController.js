import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErroHandeler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import {sendToken}  from "../utils/sendToken.js";


export const register = catchAsyncError(async(req,res,next)=>{

    const{ name, email, password}  = req.body;

    if(!name || !email || !password) return next (new ErroHandeler("Please Enter All Fields",400));

    let user = await User.findone({email});

    if (user) return next (new ErroHandeler ("user Already Exist",409));

    user = await User.create({
        name,email,password
    
    });
    
    sendToken(res,user,"Registered Successfully",201);
       



    
});
export const login = catchAsyncError(async(req,res,next)=>{

    const{  email, password}  = req.body;

    if( !email || !password) return next (new ErroHandeler("Please Enter All Fields",400));

    const user = await User.findone({email}).select("+password");

    if (!user) return next (new ErroHandeler ("user doesn't Exist",401));

    const isMatch= await user.comparePassword();
    
    if (!isMatch) return next (new ErroHandeler ("Incorrect Email anD Passwrod",401));
    
    sendToken(res,user,"Welcome Back",201);
       



    
});

export const logout = catchAsyncError(async(req,res,next)=>{
    res.status(200).cookie("token",null,{
        expires:new Date(Date.now()),

    }).json({
        success:true,
        message:"log out successfully",
    });
});


export const getAllUsers= catchAsyncError(async(res,req,next)=>{

    const user = await User.find({});
    res.status(200).json({
        success:true,
        user,
    });

});