import { Opdata } from "../models/opdataModel";
import { Patient } from "../models/patientModel";





export const updateOpDataD = async (req, res, next) => {
    try {
        const doctorId = req.employee.id; 
        const { opId } = req.body;

        const opData = await Patient.findById(opId);

        res.json({ message: "op-data fetched", data: opData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};




