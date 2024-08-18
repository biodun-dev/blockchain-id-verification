// src/utils/validation.ts
import Joi from 'joi';

// Define a schema for user registration validation
export const userRegistrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
});

// Function to validate user registration data
export const validateUserRegistration = (data: any) => {
  return userRegistrationSchema.validate(data);
};

// Define a schema for identity verification request validation
export const verificationRequestSchema = Joi.object({
  userId: Joi.number().integer().required(),
  identityHash: Joi.string().required(),
});

// Function to validate identity verification data
export const validateVerificationRequest = (data: any) => {
  return verificationRequestSchema.validate(data);
};
