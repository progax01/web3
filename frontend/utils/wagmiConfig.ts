import { createConfig } from 'wagmi';
import { mainnet, sepolia, hardhat } from 'wagmi/chains';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';

// Configure chains and providers
const chains = [mainnet, sepolia, hardhat];
const { connectors } = getDefaultWallets({
  appName: 'teste',
  projectId: '4250c2b4a024197e52917de4c669a00c', // Get from WalletConnect Cloud
  chains,
});

// Create Wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: jsonRpcProvider({ chains }),
});

export { wagmiConfig, chains };
