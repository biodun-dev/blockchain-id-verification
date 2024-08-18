// src/routes/verificationRoutes.ts
import { Router } from 'express';
import { submitVerification, getVerification } from '../controllers/verificationController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = Router();

router.post('/submit', authenticateJWT, submitVerification);
router.get('/:id', authenticateJWT, getVerification);

export default router;
