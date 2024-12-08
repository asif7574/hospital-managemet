import e from "express";
import { createDrug, createPharmacyBill, getAllDrugs, getDrugDetails } from "../controllers/pharmacyController.js";
import { employeeAuth } from "../middlewares/employeeAuth.js";


const router = e.Router();

router.get("/get-all-drugs",getAllDrugs);
router.get("/get-drugDetails/:drugId",getDrugDetails);
router.post("/create-drug", createDrug);
router.post("/create-pharmacy-bill",employeeAuth(['staff','doctor','receptionist','nurse','ot_staff','lab_technician','pharmacist','accountant']),createPharmacyBill);
router.put("/update-drug");
router.delete("/drug-delete");
router.get("/get-ladrug-drug");
router.get("/search-drugs");
router.post("/create-lab-ticket");

export { router as pharmacyRouter };