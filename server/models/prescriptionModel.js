import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
    {
        
        medicine: { type: mongoose.Types.ObjectId, ref: "Drugs" },
        type: {
            enum: ["INJ","TAB","SYP","BOLUS"]
        },
        dose_tab: {
            enum: ["OD","BID","TID","QID","Before food","After food"]
        },
        dose: {
            type:String,
        },

        duration:{
            type:String,
        },
        _id: false,
    },
    { timestamps: true }
);

export const Prescription = mongoose.model("Prescription", prescriptionSchema);