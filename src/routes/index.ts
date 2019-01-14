import express from 'express';
import { MaintenanceRouter } from './maintenance.routes';
import { AuthRouter } from './auth.routes';

const router = express.Router();

router.use('/maintenance', MaintenanceRouter);
router.use('/auth', AuthRouter);

export const ServerRouter = router;
