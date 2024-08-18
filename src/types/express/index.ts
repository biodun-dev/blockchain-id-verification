import { User } from '../../models/userModel';  // Adjust the path according to your project structure

declare module 'express' {
  export interface Request {
    user?: User;  // Add the user property to the Request interface
  }
}
