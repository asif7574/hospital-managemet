import e from "express";
import { employeeLogin, employeeLogout, employeeProfile, employeeSignup } from "../controllers/employeeController.js";
import { employeeAuth } from "../middlewares/employeeAuth.js";


const router= e.Router();

router.post('/signup',employeeSignup)
router.post('/login',employeeLogin,)
router.get('/profile',employeeAuth(['staff','doctor','receptionist','nurse','ot_staff','lab_technician','pharmacist','accountant']),employeeProfile)
router.put('/logout',employeeAuth(['staff','doctor','receptionist','nurse','ot_staff','lab_technician','pharmacist','accountant']),employeeLogout)
router.put('/reset-password')
router.put('/profile-update')
router.delete('/delete-account')


export {router as employeeRouter}