import { useState, useEffect } from 'react';
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import { GREETER_ABI, GREETER_CONTRACT_ADDRESS } from '../utils/contractConfig';

export default function GreeterInteraction() {
  const [greeting, setGreeting] = useState<string>('');
  const [newGreeting, setNewGreeting] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string>('');

  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  // Fetch the current greeting from the contract
  const fetchGreeting = async () => {
    if (!publicClient) return;

    try {
      const result = await publicClient.readContract({
        address: GREETER_CONTRACT_ADDRESS as `0x${string}`,
        abi: GREETER_ABI,
        functionName: 'greet',
      });
      
      setGreeting(result as string);
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };

  // Set a new greeting on the contract
  const setGreetingOnContract = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!walletClient || !isConnected || !newGreeting.trim()) return;

    setIsLoading(true);
    setTxHash('');

    try {
      const hash = await walletClient.writeContract({
        address: GREETER_CONTRACT_ADDRESS as `0x${string}`,
        abi: GREETER_ABI,
        functionName: 'setGreeting',
        args: [newGreeting],
      });

      setTxHash(hash);
      setNewGreeting('');
      
      // Wait for transaction to be mined
      if (!publicClient) {
        throw new Error('No public client available');
      }
      await publicClient.waitForTransactionReceipt({ hash });
      
      // Fetch the updated greeting
      fetchGreeting();
    } catch (error) {
      console.error('Error setting greeting:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch the greeting when component mounts or when connection status changes
  useEffect(() => {
    if (isConnected && publicClient) {
      fetchGreeting();
    }
  }, [isConnected, publicClient]);

  if (!isConnected) {
    return (
      <div className="card">
        <h2>Contract Interaction</h2>
        <p>Connect your wallet to interact with the Greeter contract</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Contract Interaction</h2>
      
      <div>
        <h3>Current Greeting</h3>
        <p>{greeting || 'Loading...'}</p>
        <button onClick={fetchGreeting} className="button" disabled={isLoading}>
          Refresh Greeting
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Update Greeting</h3>
        <form onSubmit={setGreetingOnContract} className="form">
          <input
            type="text"
            value={newGreeting}
            onChange={(e) => setNewGreeting(e.target.value)}
            placeholder="Enter new greeting"
            className="input"
            disabled={isLoading}
          />
          <button type="submit" className="button" disabled={isLoading || !newGreeting.trim()}>
            {isLoading ? 'Processing...' : 'Set Greeting'}
          </button>
        </form>
      </div>

      {txHash && (
        <div style={{ marginTop: '20px' }}>
          <h3>Transaction Hash</h3>
          <p style={{ wordBreak: 'break-all' }}>{txHash}</p>
        </div>
      )}
    </div>
  );
} 