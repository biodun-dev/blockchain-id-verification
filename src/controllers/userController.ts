import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../services/userService';
import { logInfo, logError } from '../utils/logger';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    logInfo(`Attempting to register user with email: ${email}`);
    
    const userId = await registerUser(email, password, firstName, lastName);
    logInfo(`User registered successfully with ID: ${userId}`);
    
    res.status(201).json({ userId });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('Duplicate entry')) {
        logError(`Failed to register user with email: ${email}. Error: ${error.message}`);
        res.status(400).json({ message: 'Email already in use' });
      } else {
        logError(`Failed to register user with email: ${email}. Error: ${error.message}`);
        next(error);  
      }
    } else {
      logError(`Failed to register user with email: ${email}. An unknown error occurred.`);
      next(new Error('An unknown error occurred')); 
    }
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    logInfo(`User attempting to log in with email: ${email}`);
    
    const token = await loginUser(email, password);
    logInfo(`User logged in successfully with email: ${email}`);
    
    res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      logError(`Failed login attempt for email: ${email}. Error: ${error.message}`);
      next(error);  
    } else {
      logError(`Failed login attempt for email: ${email}. An unknown error occurred.`);
      next(new Error('An unknown error occurred'));  
    }
  }
};
