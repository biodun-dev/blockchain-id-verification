import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/environment';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const secret = ENV.JWT_SECRET as string; // Type assertion to ensure it's treated as a string
    const decoded = jwt.verify(token, secret);
    
    // Assuming your decoded JWT payload contains the user information
    req.user = decoded as any; // Adjust the type assertion as needed to match your JWT payload structure

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
