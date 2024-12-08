import { Admin } from "../models/adminModel.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/token.js";
import { Employee } from "../models/employeeModel.js";
import { Dept } from "../models/departmentModel.js";
//no front end for admin signup
export const adminSignup= async (req,res,next)=>{
    try {
        const {adminID,name,password,role}=req.body;
        if(!adminID || !name || !password){
            return res.status(400).json({message:"all fields are required"})
        }
console.log(req.body);

        const adminExist= await Admin.findOne({adminID});
        if(adminExist){
            return res.status(400).json({message:"admin already exist"})
        }

        const hashedpassword=bcrypt.hashSync(password,10)
        console.log(password);
        console.log(hashedpassword);
        
        

        const newAdmin=new Admin({adminID,name,password:hashedpassword,role});
        await newAdmin.save()

        
        res.json({message:"admin created"})

    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};



export const adminLogin= async (req,res,next)=>{
    try {
        const {adminID,password}=req.body;
        if(!adminID || !password){
            return res.status(400).json({message:"all fields are required"})
        }
console.log(req.body);

        const adminExist= await Admin.findOne({adminID});
        if(!adminExist){
            return res.status(400).json({message:"admin not exist"})
        }

        const issPasswordMatch= bcrypt.compareSync(password,adminExist.password)

        if(!issPasswordMatch){
            return res.status(400).json({message:"admin not authenticated"})
        }

        const token = generateToken(adminExist,'admin')
        console.log(token);

        res.cookie('token',token);
        
        res.json({message:"admin authenticated"})

    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};



export const adminAuthorization= async (req,res,next)=>{
    try {
        const {employeeID,role}=req.body;
        if(!employeeID || !role){
            return res.status(400).json({message:"all fields are required"})
        }
        if (!['doctor', 'nurse', 'receptionist', 'ot_staff','lab_technician','pharmacist'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role' });
          }
console.log(req.body);

        const employeeExist= await Employee.findOne({employeeID});
        if(!employeeExist){
            return res.status(400).json({message:"employee not exist"})
        }
        employeeExist.control_role = role;
        await employeeExist.save();

        res.json({message:"employee Authorized"})

    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};


export const addDepartment= async (req,res,next)=>{
    try {
        const {name, head, doctors, nurses, staffs}=req.body;
        if(!name){
            return res.status(400).json({message:"all fields are required"})
        }


        const deptExist= await Dept.findOne({name});
        if(deptExist){
            return res.status(400).json({message:"Department already exist"})
        }
       
        
        const newAdmin=new Dept({name,head,doctors,nurses,staffs});
        await newAdmin.save()

        
        res.json({message:"Department created"})

    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};