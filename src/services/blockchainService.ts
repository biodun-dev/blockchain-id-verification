import { JsonRpcProvider, Wallet, Contract, Interface } from 'ethers'; // Adjusted imports
import { ENV } from '../config/environment';

if (!ENV.BLOCKCHAIN_PRIVATE_KEY) {
  throw new Error('BLOCKCHAIN_PRIVATE_KEY is not defined');
}

// Initialize the provider using the JsonRpcProvider class directly
const provider = new JsonRpcProvider(ENV.BLOCKCHAIN_API_URL);

// Initialize the wallet with the private key and provider
const wallet = new Wallet(ENV.BLOCKCHAIN_PRIVATE_KEY, provider);

export const storeIdentityOnBlockchain = async (identityHash: string): Promise<string> => {
  const contractAddress = 'your_smart_contract_address';
  const abi: Interface = new Interface([
    // Your smart contract ABI goes here
  ]);
  
  // Initialize the contract with the wallet
  const contract = new Contract(contractAddress, abi, wallet);

  // Call the contract method to store the identity hash
  const tx = await contract.storeIdentity(identityHash);
  await tx.wait(); // Wait for the transaction to be mined

  return tx.hash; // Return the transaction hash
};

export const getTransactionById = async (id: string): Promise<ReturnType<typeof provider.getTransaction> | null> => {
  try {
    const transaction = await provider.getTransaction(id);

    if (!transaction) {
      console.log(`Transaction with ID ${id} not found.`);
      return null;
    }

    return transaction;
  } catch (error) {
    console.error('Error fetching transaction:', error);
    return null;
  }
};
