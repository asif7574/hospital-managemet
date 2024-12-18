import e from "express";
import { bookAppointment, getDoctor, getOpDetails } from "../controllers/commonController.js";




const router= e.Router();

router.get('/get-op-details/:opId',getOpDetails);
router.get('/active-op')
router.get('/search-doctor',getDoctor)
router.post('/book-appointment',bookAppointment)
router.delete('/delete-account')
router.get('/check-employee')

export {router as commonRouter}