import { Ot } from "../models/otModel.js";
import { Otprc } from "../models/otprcModel.js";




export const getAllPrc = async (req,res,next) =>{
    try {
        const prcList = await Otprc.find();

        res.json({ message: "ot-prc-list fetched", data: prcList });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getPrcDetails = async (req, res, next) => {
    try {
        const { prcId } = req.params;

        const prcData = await Otprc.findById(prcId)

        res.json({ message: "procedure fetched", data: prcData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const createPrc = async (req, res, next) => {
    try {
        const { ot_prc_name,ot_prc_code,price} = req.body;

        if (!ot_prc_name|| !ot_prc_code || !price ) {
            return res.status(400).json({ message: "all fields required" });
        }

        const prcData = new Otprc({ot_prc_name,ot_prc_code,price });
        await prcData.save();

        return res.json({ message: "new procedure created", data: prcData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
