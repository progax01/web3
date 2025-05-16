import { getContract } from 'wagmi/actions';

// ABI for the Greeter contract
export const GREETER_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_greeting",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "greet",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_greeting",
        "type": "string"
      }
    ],
    "name": "setGreeting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// Replace with your contract address after deployment
export const GREETER_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Default local hardhat address

// Helper function to get contract instance
export function getGreeterContract(publicClient: any, walletClient: any) {
  return getContract({
    address: GREETER_CONTRACT_ADDRESS as `0x${string}`,
    abi: GREETER_ABI,
    publicClient,
    walletClient,
  });
} 