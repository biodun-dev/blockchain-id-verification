// src/utils/errorHandler.ts

export const handleError = (error: unknown): { message: string, details?: any } => {
    if (error instanceof Error) {
      return { message: error.message, details: error.stack };
    } else {
      return { message: 'An unknown error occurred' };
    }
  };
  