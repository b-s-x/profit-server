import express from 'express';
import main from './main';

const router = express.Router();

router.get('/', main)

export default router;