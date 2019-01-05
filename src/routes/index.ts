import express from 'express';
import { MaintenanceRouter } from './maintenance.routes';

const router = express.Router();

router.use('/maintenance', MaintenanceRouter);

export const ServerRouter = router;
