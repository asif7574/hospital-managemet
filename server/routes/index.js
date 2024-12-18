import e from 'express';
import { employeeRouter } from './employeeRoutes.js';
import { adminRouter } from './adminRoutes.js';


import { receptionRouter } from './receptionRoutes.js';
import { pharmacyRouter } from './pharmacyRoutes.js';
import { commonRouter } from './commonRoutes.js';

const router=e.Router()

router.use('/staff',employeeRouter)
router.use('/admin',adminRouter)


router.use('/reception',receptionRouter)
router.use('/pharmacy',pharmacyRouter)
router.use('/common',commonRouter)


export {router as apiRouter}