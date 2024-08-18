// src/routes/blockchainRoutes.ts
import { Router } from 'express';
import { storeIdentity, getIdentityTransaction } from '../controllers/blockchainController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = Router();

// Route to store identity on the blockchain
router.post('/store', authenticateJWT, storeIdentity);

// Route to get the blockchain transaction details of an identity
router.get('/transaction/:id', authenticateJWT, getIdentityTransaction);

export default router;
