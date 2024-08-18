import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail, User } from '../models/userModel';
import { storeIdentityOnBlockchain } from '../services/blockchainService';
import { ENV } from '../config/environment';
import { createVerificationRequest, updateVerificationRequestStatus } from '../models/verificationRequestModel';

export const registerUser = async (email: string, password: string, firstName: string, lastName: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await createUser({
    email,
    password: hashedPassword,
    first_name: firstName,
    last_name: lastName,
  });
  return userId;
};

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  if (!ENV.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, ENV.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

export const submitVerificationRequest = async (userId: number, type: string, metadata?: string): Promise<number> => {
  const requestId = await createVerificationRequest({
    user_id: userId,
    type,
    status: 'pending',
    metadata,
  });

  // Example of storing identity data on the blockchain
  const identityHash = 'example_hash'; // Replace with actual hash generation logic
  const txHash = await storeIdentityOnBlockchain(identityHash);

  // Optionally, update the verification request with the blockchain transaction hash
  await updateVerificationRequestStatus(requestId, 'in_progress');

  return requestId;
};
