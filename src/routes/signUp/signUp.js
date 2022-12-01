import express from 'express';
import { signupController } from '../../controllers/signUp/signUpController';
const router = express.Router();

router.use('/', signupController)

export {router as signUpRouter}