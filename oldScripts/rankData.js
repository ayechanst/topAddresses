const testData = require('./json/giantFuckingThing.json');
const data = require('./json/txCountActual.json');
const giant = require('./json/giantFuckingThing.json');
console.log(
  giant.find({
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tx: 10000,
  }),
);

function sortAndCut(json) {
  const commaLess = json.map((item) => {
    return {
      ...item,
      txCount: Number(item.txCount.replace(',', '')),
    };
  });

  commaLess.reduce((acc, curr) => {
    if (curr.txCount > acc.txCount) {
      return curr;
    } else {
      return acc;
    }
  });
  const sortedData = commaLess.sort((contractA, contractB) => {
    return contractB.txCount - contractA.txCount;
  });

  //   console.log(sortedData);
  //   const topHundredContracts = sortedData.slice(0, 100);
  //   console.log(topHundredContracts);

  //   const fs = require('fs');
  //   fs.writeFileSync('topOneHundred.json', JSON.stringify(topHundredContracts));
}

sortAndCut(data);
