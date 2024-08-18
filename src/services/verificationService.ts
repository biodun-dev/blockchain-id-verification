// src/services/verificationService.ts
import { createVerificationRequest, getVerificationRequestById, updateVerificationRequestStatus } from '../models/verificationRequestModel';
import { VerificationRequest } from '../models/verificationRequestModel';

export const submitVerificationRequest = async (userId: number, type: string, metadata?: string): Promise<number> => {
  const requestId = await createVerificationRequest({
    user_id: userId,
    type,
    status: 'pending',
    metadata,
  });

  // Here you might call blockchain-related logic to process the verification

  return requestId;
};

export const getVerificationStatus = async (requestId: number): Promise<VerificationRequest | null> => {
  return await getVerificationRequestById(requestId);
};

export const updateVerificationStatus = async (requestId: number, status: string): Promise<void> => {
  await updateVerificationRequestStatus(requestId, status);

  // Optionally, interact with the blockchain to update the status
};
