import { Lab } from '../models/labModel.js';
import { Labtest } from '../models/labtestModel.js';


export const initiateTest = async (req, res, next) => {
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



export const AcreateLabTicket = async (req, res) => {
    try {
        
        const employeeId = req.employee.id; 
        const { op_data_Id, testId } = req.body;
        
        const datePart = todayDate.toISOString().split('T')[0];

        // Find the course to ensure it exists and fetch its price
        const test = await Labtest.findById(testId).populate();
        if (!test) {
            return res.status(404).json({ message: "test not found" });
        }
        
        
        // Find the user's cart or create a new one if it doesn't exist
        let labTicket = await Lab.findOne({ op_data_Id });
        console.log(labTicket);
        
        if (!labTicket) {
            newTicket = new Lab({date:datePart,op_data_Id, tests: [],total_bill,technician:employeeId});
            
        }
        console.log(newTicket);
        // Check if the course is already in the cart
        // const testExists = labTicket.tests.some((item) => item.testId.equals(testId));
        // if (testExists) {
        //     return res.status(400).json({ message: "test alreadyadded" });
        // }

        // Add the course to the cart
        // testExists.tests.push({
        //     testId,
        //     price: test.price,
        // });

        // Recalculate the total price
        // testExists.calculateTotalPrice();

        await newTicket.save();

        res.status(200).json({message:"course added to cart",data:testExists});
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
export const createTicket = async (req, res) => {
    try {
        console.log("hi");
        
        const employeeId = req.employee.id; 
        const { op_data_Id, testId } = req.body;
        
        const datePart = todayDate.toISOString().split('T')[0];

        
        const test = await Labtest.findById(testId).populate();
        console.log(test);
        console.log(employeeId);
        console.log(req.body);
        if (!test) {
            return res.status(404).json({ message: "test not found" });
        }
console.log(test);

        const ticketExist= await Lab.findOne({op_data_Id});
if(!ticketExist){
    // newTicket = new Lab({date:datePart,op_data_Id, tests: [test],total_bill,technician:employeeId});
}
        
// await newTicket.save();
       
        res.status(200).json({message:"course added to cart",data:newTicket});
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};








