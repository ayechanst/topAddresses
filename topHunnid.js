const axios = require('axios');

const nearData = require('./json/mediumFuckingThing.json');
const mainNetData = require('./json/giantFuckingThing.json');

class FinalProduct {
  constructor(name, description, category, txVolume, address, abi) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.txVolume = txVolume;
    this.address = address;
    this.abi = abi;
  }
}

class PreFinalProduct {
  constructor(address, txVolume) {
    this.address = address;
    this.txVolume = txVolume;
  }
}

const dataTenThousand = mainNetData.filter((obj) => {
  // data is the same as mainNetData but only contains obj with tx 10000+
  if (obj.tx >= 10000) {
    return obj;
  }
});
const fs = require('fs');

function convert() {
  fs.writeFileSync('dataTenThousand.json', JSON.stringify(dataTenThousand));
}
console.log(dataTenThousand.length);
