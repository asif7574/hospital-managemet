import mongoose from "mongoose";

const otSchema = new mongoose.Schema(
    {
        op_data_Id: { type: mongoose.Types.ObjectId, ref: "Opdata" },
       
        procedures:[{ type: mongoose.Types.ObjectId, ref: "Otprc" }],
        total:{
            type: Number
        },

        staff: { type: mongoose.Types.ObjectId, ref: "Employee" },

    },
    { timestamps: true }
);

export const Ot = mongoose.model("Ot", otSchema);