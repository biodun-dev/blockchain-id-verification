import db from '../config/db';

export interface User {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await db<User>('users').where({ email }).first();
  return user || null;  // Return null if user is undefined
};

export const createUser = async (user: Partial<User>): Promise<number> => {
  const [id] = await db('users').insert(user);
  return id;
};
