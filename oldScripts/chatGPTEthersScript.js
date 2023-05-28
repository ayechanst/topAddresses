import 'dotenv/config';
const { ethers } = require('ethers');

const infuraURL = `https://mainnet.ifura.io/v3/${process.env.INFURA_KEY}`;

async function main() {
  // Create an Ethereum provider using Infura
  const provider = new ethers.providers.JsonRpcProvider(infuraURL);

  // Get the latest block number
  const latestBlockNumber = await provider.getBlockNumber();

  // Loop through every block and get the transactions
  for (let i = 0; i <= latestBlockNumber; i++) {
    const block = await provider.getBlock(i, true); // Get the block with transactions

    // Filter the transactions to find the contract deployments
    const contractDeployments = block.transactions.filter(
      (tx) => tx.to === null && tx.data !== '0x',
    );

    // Log the contract addresses for this block
    if (contractDeployments.length > 0) {
      console.log(`Contracts deployed on block ${i}:`);
      contractDeployments.forEach((tx) => console.log(tx.creates));
    }
  }
}

main().catch((err) => console.error(err));
