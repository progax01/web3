# Web3 Wallet Integration Project

This project demonstrates the integration of MetaMask wallet connectivity using RainbowKit and Wagmi libraries. It includes a simple smart contract (Greeter) and a frontend application for interacting with the contract.

## Video desc
https://drive.google.com/drive/folders/12MCgwuUJ5pxUe6D4wkcYbz0zSSsAPJZ_?usp=drive_link

## Project Structure

- `contracts/`: Hardhat project containing the Greeter smart contract
- `frontend/`: Next.js application with RainbowKit and Wagmi integration

## Prerequisites

- Node.js (v16.x or later)
- npm or yarn
- MetaMask browser extension

## Setup Instructions

### Smart Contract Setup

1. Navigate to the contracts directory:
   ```
   cd contracts
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile the contract:
   ```
   npx hardhat compile
   ```

4. Start a local Hardhat node:
   ```
   npx hardhat node
   ```

5. In a new terminal, deploy the contract to the local network:
   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```

6. Take note of the deployed contract address and update it in `frontend/utils/contractConfig.ts`

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Update the `projectId` in `utils/wagmiConfig.ts` with your WalletConnect Cloud project ID (you can get one from https://cloud.walletconnect.com/)

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Usage

1. Open the application in your browser
2. Connect your MetaMask wallet using the "Connect Wallet" button
3. Ensure you're connected to the correct network (Hardhat localhost by default)
4. View the current greeting from the smart contract
5. Update the greeting by entering a new message and submitting the transaction
6. Approve the transaction in your MetaMask wallet
7. Wait for the transaction to be processed
8. View the updated greeting

## Features

- Wallet connection using RainbowKit UI components
- Smart contract interaction using Wagmi hooks
- Support for multiple networks (Hardhat, Sepolia, Mainnet)
- Simple and clean UI for interacting with the contract

## Technologies Used

- **Smart Contract**: Solidity, Hardhat
- **Frontend**: Next.js, React, TypeScript
- **Web3 Libraries**: RainbowKit, Wagmi, viem
- **Wallet**: MetaMask integration # web3
# web3
