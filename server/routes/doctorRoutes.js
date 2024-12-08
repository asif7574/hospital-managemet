import e from "express";

import { employeeAuth } from "../middlewares/employeeAuth";
import { findAllOp, findAllPatients, getOpDetails, getPatientDetails } from "../controllers/commonController.js";


const router= e.Router();


router.get('/find-all-patients',employeeAuth(['doctor']),findAllPatients);
router.get('/get-patient-details/:patientId',employeeAuth(['doctor']),getPatientDetails);
router.get('/find-all-op',employeeAuth(['doctor']),findAllOp);
router.get('/get-op-details/:patientId',employeeAuth(['doctor']),getOpDetails);
router.post('/check-patient/:patientId');




export {router as doctorRouter}