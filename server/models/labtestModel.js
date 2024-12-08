import mongoose from "mongoose";

const labtestSchema = new mongoose.Schema(
    {
        test_name: {
            type: String,
            required: true,
            maxLength: 35,
        },
        test_code: {
            type: String,
            required: true,
            maxLength:10,
            minLength:3,
            unique:true,
        },
        price:{
            type:Number,
            required: true,
        },
        normalValues:[
            {
                type: {
                    type: String,
                    enum: ['man', 'woman', 'child'],
                },
                value: {
                    type: String,
                    
                },
               _id: false,
            }, 
        ],
      

    },
   
);

export const Labtest = mongoose.model("Labtest", labtestSchema);