import mongoose from "mongoose";

const otprcSchema = new mongoose.Schema(
    {
        ot_prc_name: {
            type: String,
            required: true,
            maxLength: 25,
        },
        ot_prc_code: {
            type: String,
            required: true,
          
            minLength:3,
            unique:true,
        },
        price:{
            type:Number,
            required: true,
        },
       
    },
    { timestamps: true }
);

export const Otprc = mongoose.model("Otprc", otprcSchema);