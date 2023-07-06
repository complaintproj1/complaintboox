import mongoose from "mongoose";

import {config} from "dotenv"

export const connectDB = async() => {
   const connection= await mongoose.connect( process.env.MONGO_URI);
   
console.log(connection.host);
   console.log("db connected");
};
