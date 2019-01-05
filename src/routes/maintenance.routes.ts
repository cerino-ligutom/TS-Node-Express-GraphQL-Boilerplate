import express from 'express';
import { MaintenanceController } from '@EMERE/controllers';

const router = express.Router();
const maintenanceController = new MaintenanceController();

router.get('/health-check', maintenanceController.healthCheck);

export const MaintenanceRouter = router;
