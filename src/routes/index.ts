import express from 'express';
import { maintenanceRoutes } from './maintenance';

const routes = express.Router();

export default () => {
  routes.use('/maintenance', maintenanceRoutes());

  return routes;
};
