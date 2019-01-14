import express from 'express';
import { AuthController } from '@EMERE/controllers';

const authController = new AuthController();

const router = express.Router();

router.post('/login', authController.login);

export const AuthRouter = router;
