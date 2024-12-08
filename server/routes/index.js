import e from 'express';
import { employeeRouter } from './employeeRoutes.js';
import { adminRouter } from './adminRoutes.js';
import { labRouter } from './labRoutes.js';
import { otRouter } from './otRoutes.js';
import { receptionRouter } from './receptionRoutes.js';
import { pharmacyRouter } from './pharmacyRoutes.js';

const router=e.Router()

router.use('/staff',employeeRouter)
router.use('/admin',adminRouter)
router.use('/lab',labRouter)
router.use('/ot',otRouter)
router.use('/reception',receptionRouter)
router.use('/pharmacy',pharmacyRouter)


export {router as apiRouter}