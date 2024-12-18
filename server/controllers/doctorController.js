import { Opdata } from "../models/opdataModel";
import { Patient } from "../models/patientModel";





export const updateOpDataD = async (req, res, next) => {
    try {
        

        

        res.json({ message: "op-data fetched", });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};




