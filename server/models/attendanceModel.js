import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
    {
        date: {
            type:Date
        },
        employee: [{ type: mongoose.Types.ObjectId, ref: "Employee" }],
        attendance:{
            type:Boolean,
            default:false,
        },
    },
    { timestamps: true }
);

export const Attendance = mongoose.model("Attendance", attendanceSchema);