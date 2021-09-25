import express from 'express';
const router = express.Router();
import mainController from '../controllers/mainController';

router.get('/', mainController)

export default router;