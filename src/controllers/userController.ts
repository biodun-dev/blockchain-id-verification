import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../services/userService';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const userId = await registerUser(email, password, firstName, lastName);
    res.status(201).json({ userId });
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);  // Pass the error to the global error handler
  }
};
