import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        patient: { type: mongoose.Types.ObjectId, ref: "Patient" },
        department: { type: mongoose.Types.ObjectId, ref: "Dept" },
        doctor: { type: mongoose.Types.ObjectId, ref: "Employee" },
        date: {
            type:Date
        },
       
    },
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);