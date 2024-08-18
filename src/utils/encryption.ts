// src/utils/encryption.ts
import crypto from 'crypto';

const algorithm = 'aes-256-cbc'; // Encryption algorithm
const secretKey = crypto.randomBytes(32); // Generate a 32-byte key
const iv = crypto.randomBytes(16); // Generate a 16-byte initialization vector

// Function to encrypt data
export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
};

// Function to decrypt data
export const decrypt = (hash: string): string => {
  const [ivHex, encryptedText] = hash.split(':');
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(ivHex, 'hex'));
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
