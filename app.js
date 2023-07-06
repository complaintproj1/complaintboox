import express from "express";
import {config} from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

config({
path:"./config/config.env"
});

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
)
 
import  user  from "./routes/userRoutes.js";
import  Complaint  from "./routes/complaintRoutes.js";
app.use("/api/v1", Complaint);
app.use("/api/v1",user);


export default app;

app.use(ErrorMiddleware);
