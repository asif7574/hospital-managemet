import e from "express";
import { employeeAuth } from "../middlewares/employeeAuth.js";
import { createPrc, getAllPrc, getPrcDetails } from "../controllers/otprcController.js";



const router = e.Router();


router.get("/get-all-prc",employeeAuth(['ot_staff']),getAllPrc);
router.get("/get-prcDetails/:prcId",employeeAuth(['ot_staff']),getPrcDetails);
router.post("/create-prc",employeeAuth(['ot_staff']),createPrc);
router.put("/update-prc");
router.delete("/prc-delete");
router.get("/get-latest-prc");
router.get("/search-prc");

export { router as otRouter };