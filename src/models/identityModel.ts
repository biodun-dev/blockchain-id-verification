import db from '../config/db';

export interface Identity {
  id: number;
  user_id: number;
  identity_hash: string;  // This might be a hash or reference to identity data stored on the blockchain
  created_at: Date;
  updated_at: Date;
}

export const createIdentity = async (identity: Partial<Identity>): Promise<number> => {
  const [id] = await db('identities').insert(identity);
  return id;
};

export const getIdentityByUserId = async (userId: number): Promise<Identity | null> => {
  const identity = await db<Identity>('identities').where({ user_id: userId }).first();
  return identity || null;  // Return null if identity is undefined
};

export const getIdentityById = async (id: number): Promise<Identity | null> => {
  const identity = await db<Identity>('identities').where({ id }).first();
  return identity || null;  // Return null if identity is undefined
};

export const updateIdentityHash = async (id: number, newHash: string): Promise<void> => {
  await db('identities').where({ id }).update({ identity_hash: newHash });
};
