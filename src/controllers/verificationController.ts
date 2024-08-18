import { Request, Response, NextFunction } from 'express';
import { submitVerificationRequest, getVerificationStatus } from '../services/verificationService';

export const submitVerification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type, metadata } = req.body;
    const userId = req.user!.id; // TypeScript now recognizes req.user, use ! to assert it's defined
    const requestId = await submitVerificationRequest(userId, type, metadata);
    res.status(201).json({ requestId });
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};

export const getVerification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const verification = await getVerificationStatus(parseInt(id, 10));
    if (!verification) {
      return res.status(404).json({ message: 'Verification request not found' });
    }
    res.status(200).json(verification);
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};
