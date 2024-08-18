import db from '../config/db';

export interface VerificationRequest {
  id: number;
  user_id: number;
  type: string;
  status: string;
  metadata?: string;
  created_at: Date;
  updated_at: Date;
}

export const createVerificationRequest = async (request: Partial<VerificationRequest>): Promise<number> => {
  const [id] = await db('verification_requests').insert(request);
  return id;
};

export const getVerificationRequestById = async (id: number): Promise<VerificationRequest | null> => {
  const request = await db<VerificationRequest>('verification_requests').where({ id }).first();
  return request || null;  // Return null if request is undefined
};

export const updateVerificationRequestStatus = async (id: number, status: string): Promise<void> => {
  await db('verification_requests').where({ id }).update({ status });
};
