import e from "express";
import { createTest, getAllTest, getTestDetails } from "../controllers/labtestController.js";
import { employeeAuth } from "../middlewares/employeeAuth.js";
import { createTicket } from "../controllers/labController.js";


const router = e.Router();

router.get("/get-all-tests",employeeAuth(['lab_technician']),getAllTest);
router.get("/get-testDetails/:testId",employeeAuth(['lab_technician']),getTestDetails);
router.post("/create-test",employeeAuth(['lab_technician']),createTest);
router.put("/update-test",);
router.delete("/test-delete");
router.get("/get-latest-test");
router.get("/search-tests");
router.post("/create-lab-ticket",employeeAuth(['lab_technician']),createTicket);

export { router as labRouter };
