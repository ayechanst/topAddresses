import { ethers } from 'ethers';
import 'dotenv/config';

const infuraURL = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider2 = new ethers.JsonRpcProvider(infuraURL);

console.log('current block number: ', await provider2.getBlockNumber());
