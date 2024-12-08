import e from "express";
import { employeeAuth } from "../middlewares/employeeAuth.js";
import { findAllOp, findAllPatients, findTodayOplist, getOpDetails, getPatientDetails } from "../controllers/commonController.js";
import { createOp, createPatient } from "../controllers/receptionController.js";



const router= e.Router();

router.get('/find-all-patients',findAllPatients);
router.get('/get-patient-details/:patientId',employeeAuth(['receptionist']),getPatientDetails);

router.get('/find-all-op',employeeAuth(['receptionist']),findAllOp);
router.get('/get-op-details/:patientId',employeeAuth(['receptionist']),getOpDetails);

router.post('/create-patient',employeeAuth(['receptionist']),createPatient)
router.post('/create-op',createOp)
router.get('/get-todays-op',findTodayOplist)
router.put('/edit-patient')
router.delete('/delete-')
export {router as receptionRouter}