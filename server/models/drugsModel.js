import mongoose from "mongoose";

const drugSchema = new mongoose.Schema(
    {
        drug_name: {
            type: String,
            required: true,
            maxLength: 25,
        },
        brand_name: {
            type: String,
            required: true,
            maxLength: 25,
        },
        company: {
            type: String,
            required: true,
            maxLength: 25,
        },
        price:{
            type:Number,
            required: true,
        },
    },
);

export const Drug = mongoose.model("Drug", drugSchema);