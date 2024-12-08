import mongoose from "mongoose";

const labSchema = new mongoose.Schema(
    {
        date:{
            type: Date
        },
        op_data_Id: { type: mongoose.Types.ObjectId, ref: "Opdata" },
       
        tests:[{testId:{ type: mongoose.Types.ObjectId, ref: "Labtest" }}],

        total_bill:{
            type: Number,
            default:0
        },

        technician: { type: mongoose.Types.ObjectId, ref: "Employee" },

    },
   
);



export const Lab = mongoose.model("Lab", labSchema);