import e from "express";
import { addDepartment, adminAuthorization } from "../controllers/adminController.js";



const router= e.Router();

router.post('/signup')
router.post('/login')
router.get('/profile')
router.put('/logout')
router.put('/reset-password')
router.post('/add-department',addDepartment)
router.put('/authorize',adminAuthorization)
router.put('/profile-update')
router.delete('/delete-account')
router.get('/check-employee')

export {router as adminRouter}