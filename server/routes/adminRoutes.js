import e from "express";
import {  adminAuthorization } from "../controllers/adminController.js";



const router= e.Router();



router.put('/authorize',adminAuthorization)
router.put('/profile-update')
router.delete('/delete-account')
router.get('/check-employee')

export {router as adminRouter}