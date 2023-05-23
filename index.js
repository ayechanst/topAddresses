const axios = require('axios');
const arrayOfContracts = [];
const txAndAddy = [];

const fs = require('fs');
const pageSize = 1000;
let pageNum = 1;
const data = require('./nearData.json');

class AddressAndTx {
  constructor(address, tx) {
    this.address = address;
    this.tx = tx;
  }
}

// array of objects
/*
{
  address: String,
  tx: number
}
*/
const addressAndTransactions = require('./mediumFuckingThing.json');

function getTransactions() {
  // array of addresses
  let contracts = data.map((data) => data.Address);

  console.log('starting again at index: ', addressAndTransactions.length);
  let i = addressAndTransactions.length - 1;
  let arr = addressAndTransactions;

  function getData() {
    if (i === contracts.length) {
      clearInterval();
      return;
    }
    let address = contracts[i];
    // const url = `https://blockscout.com/eth/mainnet/api?module=account&action=txlist&address=${address}`;
    const url = `https://explorer.mainnet.aurora.dev/api?module=account&action=txlist&address=${address}`;
    if (address) {
      axios
        .get(url)
        .then((response) => {
          const newObj = new AddressAndTx(address, response.data.result.length);
          console.log('all is well');
          arr.push(newObj);
          fs.writeFileSync('mediumFuckingThing.json', JSON.stringify(arr));
        })
        .catch((e) => {
          throw new Error(e);
        });
    } else {
      console.log('invalid address');
    }
    i += 1;
  }

  setInterval(getData, 50);
}

getTransactions();
