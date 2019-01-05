import { BaseController } from './base.controller';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class MaintenanceController extends BaseController {
  public healthCheck(req: Request, res: Response) {
    res.status(HttpStatus.OK).send({
      status: 'OK',
    });
  }
}
