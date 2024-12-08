import mongoose from "mongoose";

const opdataSchema = new mongoose.Schema(
    {
        //date  ,, opdataID
        op_Id:{
            type:Number,
            minLength: 8,
            maxLength: 8, 
        },
        date: {
            type:String
        },
        patient: { type: mongoose.Types.ObjectId, ref: "Patient" },
        department: { type: mongoose.Types.ObjectId, ref: "Dept" },
        doctor: { type: mongoose.Types.ObjectId, ref: "Employee" },
        to_lab:{
            type: String,
            default: null,
        },
        lab_result: [{ type: mongoose.Types.ObjectId, ref: "Lab" }],
        to_ot:{
            type: String,
            default: null,
        },
        procedures_done: [{ type: mongoose.Types.ObjectId, ref: "Ot" }],
        prescription:[{ 
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
        }],
        diagnosis:{ type: mongoose.Types.ObjectId, ref: "Diagnosis" },
        vitals:[
            {temperature: {
                type: Number,
                maxLength: 3,
              }},
              {spo2: {
                type: Number,
                maxLength:3,
            }},
            {blood_pressure:{
                type:String,
            }}
        ],
        status:{
            enum: ["BOOKED","OP_WAITING","CONSULTED","PHARMACY-CHECKED","COMPLETED","IN-PATIENT"]
        },
        reception_bill:{
            type:Number,
            default:0
        },
        lab_bill:{
            type:Number,
            default:0
        },
        ot_bill:{
            type:Number,
            default:0
        },
        pharmacy_bill:{
            type:Number,
            default:0
        },
        total_bill:{
            type:Number,
            default:0
        },


  
    },
    { timestamps: true }
);

export const Opdata = mongoose.model("Opdata", opdataSchema);



