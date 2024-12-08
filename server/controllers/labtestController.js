
import { Labtest } from '../models/labtestModel.js';




export const getAllTest = async (req,res,next) =>{
    try {
        const testList = await Labtest.find();

        res.json({ message: "test-list fetched", data: testList });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};



export const getTestDetails = async (req, res, next) => {
    try {
        const { testId } = req.params;

        const testData = await Labtest.findById(testId);

        res.json({ message: "test data fetched", data: testData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const createTest = async (req, res, next) => {
    try {
        const { test_name,test_code,price,normalValues} = req.body;


        if (!test_name || !test_code || !price ) {
            return res.status(400).json({ message: "all fields required" });
        }

        const testData = new Labtest({ test_name,test_code,price,normalValues});
        await testData.save();

        return res.json({ message: "test created", data: testData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
