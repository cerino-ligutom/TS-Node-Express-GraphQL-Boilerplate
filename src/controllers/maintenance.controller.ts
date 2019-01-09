import { BaseController } from './base.controller';
import { Request, Response } from 'express';

export class MaintenanceController extends BaseController {
  public healthCheck(req: Request, res: Response) {
    res.send({
      status: 'OK',
    });
  }
}
