import express from 'express';
import {loginController} from '../../controllers/login'

const router = express.Router();

router.use('/', loginController)

export {router as loginRouter}