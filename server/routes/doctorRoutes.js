import e from "express";

import { employeeAuth } from "../middlewares/employeeAuth";
import { findAllOp, findAllPatients, getOpDetails, getPatientDetails } from "../controllers/commonController.js";


const router= e.Router();


// router.get('/find-all-patients',employeeAuth(['doctor']),findAllPatients);
router.get('/find-all-patients',findAllPatients);
router.get('/get-patient-details/:patientId',getPatientDetails);
router.get('/find-all-op',findAllOp);
router.get('/get-op-details/:patientId',getOpDetails);
router.post('/check-patient/:patientId');




export {router as doctorRouter}