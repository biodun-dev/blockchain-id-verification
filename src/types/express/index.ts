// src/types/express/index.d.ts
import { User } from '../../models/userModel';  // Adjust the path according to your project structure
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: User;  // Add the user property to the Request interface
  }
}
