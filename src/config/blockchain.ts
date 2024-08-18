import { JsonRpcProvider, Wallet, Contract, Interface } from 'ethers';
import { ENV } from './environment';  // Import environment variables

// Ensure the necessary environment variables are defined
if (!ENV.BLOCKCHAIN_PRIVATE_KEY || !ENV.BLOCKCHAIN_API_URL) {
  throw new Error('BLOCKCHAIN_PRIVATE_KEY or BLOCKCHAIN_API_URL is not defined');
}

// Initialize the provider with the blockchain API URL
const provider = new JsonRpcProvider(ENV.BLOCKCHAIN_API_URL);

// Initialize the wallet with the private key and provider
const wallet = new Wallet(ENV.BLOCKCHAIN_PRIVATE_KEY, provider);

// Function to initialize smart contracts
const initializeContract = (contractAddress: string, abi: any) => {
  const contractInterface = new Interface(abi); // Initialize the ABI with the Interface class
  return new Contract(contractAddress, contractInterface, wallet);
};

export { provider, wallet, initializeContract };
