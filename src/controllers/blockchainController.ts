// src/controllers/blockchainController.ts
import { Request, Response } from 'express';
import { storeIdentityOnBlockchain, getTransactionById } from '../services/blockchainService';
import { createIdentity } from '../models/identityModel';

export const storeIdentity = async (req: Request, res: Response, next: Function) => {
  try {
    const { userId, identityHash } = req.body;

    // Call service to store identity on the blockchain
    const txHash = await storeIdentityOnBlockchain(identityHash);

    // Save the identity and transaction hash in the database
    const identityId = await createIdentity({
      user_id: userId,
      identity_hash: identityHash,
    });

    res.status(201).json({ identityId, txHash });
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};

export const getIdentityTransaction = async (req: Request, res: Response, next: Function) => {
  try {
    const { id } = req.params;

    // Fetch the blockchain transaction details for the identity
    const transaction = await getTransactionById(id);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};
