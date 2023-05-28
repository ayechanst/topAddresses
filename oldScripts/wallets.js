import { ethers } from 'ethers';

const wallet = ethers.Wallet.createRandom();
console.log('address: ', wallet.address);
console.log('private key: ', wallet.privateKey);
console.log('mnemonic: ', wallet.mnemonic.phrase);

let path, myWallet;

for (let i = 0; i < 10; i++) {
  path = `m/44'/60'/0'/0/${i}`;
  myWallet = ethers.Wallet.fromPhrase(wallet.mnemonic.phrase, path);
  console.log('address', i, wallet.address);
  console.log('private key', i, myWallet.privateKey);
}
