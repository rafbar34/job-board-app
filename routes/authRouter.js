import {Router} from 'express';
import {
  validateLogin,
  validateRegister,
} from '../middleware/validationMiddleware.js';
import {login, register} from '../controllers/auth.js';

const routerAuth = Router();

routerAuth.post('/login', validateLogin, login);
routerAuth.post('/register', validateRegister, register);

export default routerAuth;
