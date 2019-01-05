import express from 'express';
import { MaintenanceController } from '@EMERE/controllers';

const maintenanceController = new MaintenanceController();

const router = express.Router();

router.get('/health-check', maintenanceController.healthCheck);

export const MaintenanceRouter = router;
