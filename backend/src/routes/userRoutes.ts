import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { auth } from '../middleware/auth';
import { validate } from '../middleware/validation';
import { 
  registerValidation, 
  loginValidation, 
  updateProfileValidation 
} from '../validation/userValidation';

const router = Router();
const userController = new UserController();

// Public routes with validation
router.post('/register', validate(registerValidation), UserController.register);
router.post('/login', validate(loginValidation), UserController.login);
router.post('/logout', UserController.logout); // No validation needed for logout

// Protected routes with validation
router.get('/profile', auth, UserController.getProfile);
router.put('/profile', auth, validate(updateProfileValidation), UserController.updateProfile);
router.delete('/profile', auth, UserController.deleteProfile);

export default router; 