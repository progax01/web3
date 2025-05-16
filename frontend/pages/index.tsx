import Head from 'next/head';
import { useAccount } from 'wagmi';
import { CustomConnectButton } from '../components/ConnectButton';
import GreeterInteraction from '../components/GreeterInteraction';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="container">
      <Head>
        <title>Web3 Wallet Integration</title>
        <meta name="description" content="Web3 application with RainbowKit and Wagmi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to Web3 Wallet Integration
        </h1>

        <p className="description">
          Connect your wallet to interact with the Greeter smart contract
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <CustomConnectButton />
        </div>

        <GreeterInteraction />

        {isConnected && (
          <div className="card" style={{ marginTop: '2rem' }}>
            <h2>Instructions</h2>
            <ol style={{ paddingLeft: '1.5rem' }}>
              <li>Ensure you are connected to the right network (Hardhat, Sepolia, or Mainnet)</li>
              <li>View the current greeting stored in the contract</li>
              <li>Update the greeting by entering a new message and submitting the transaction</li>
              <li>Approve the transaction in your wallet</li>
              <li>Wait for the transaction to be processed</li>
              <li>View the updated greeting</li>
            </ol>
          </div>
        )}
      </main>

      <footer style={{ padding: '2rem 0', textAlign: 'center' }}>
        <p>
          Built with Next.js, RainbowKit, and Wagmi
        </p>
      </footer>
    </div>
  );
} 