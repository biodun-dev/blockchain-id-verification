
import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  BLOCKCHAIN_API_KEY: process.env.BLOCKCHAIN_API_KEY,
  BLOCKCHAIN_API_URL: process.env.BLOCKCHAIN_API_URL,  // Add this line
  BLOCKCHAIN_PRIVATE_KEY: process.env.BLOCKCHAIN_PRIVATE_KEY,
};
