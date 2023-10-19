import {Router} from 'express';
import {
  validateLogin,
  validateRegister,
} from '../middleware/validationMiddleware.js';
import {login, logout, register} from '../controllers/auth.js';

const routerAuth = Router();

routerAuth.post('/login', validateLogin, login);
routerAuth.post('/register', validateRegister, register);
routerAuth.post('/logout', logout);

export default routerAuth;
