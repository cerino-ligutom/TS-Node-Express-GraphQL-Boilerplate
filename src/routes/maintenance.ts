import express from 'express';
import HttpStatus from 'http-status-codes';

const routes = express.Router();

export const maintenanceRoutes = () => {
  routes.get('/health-check', (req, res) => {
    res.status(HttpStatus.OK).send({
      status: 'OK',
    });
  });

  return routes;
};
