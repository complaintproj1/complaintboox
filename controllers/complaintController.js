import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Complaint} from "../models/Complaint.js";

export const getAllcomplaint = catchAsyncError( async(req, res,next) => {
    
    const complaints = await Complaint.find();
    res.status(200).json({
        success:true,
        complaints,
    });
})
;
