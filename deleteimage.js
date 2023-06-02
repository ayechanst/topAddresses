const fs = require("fs")
const images = [
    "Aurigami_Token.svg",
    "HAPI.svg",
    "PARAS.png",
    "Stay_Golden_Suns.svg",
    "Aurora.svg",
    "HV-MTL.png",
    "PembRock.svg",
    "Bastion.svg",
    "Keypom_Public_NFT_Contract.svg",
    "Pixudi_Dragon_Stone_Whitelist_Cards.svg",
    "SWEAT.svg",
    "Bullish_Bulls.png",
    "LiNEAR.svg",
    "Playible_Athlete_MLB.svg",
    "Tekuno.png",
    "Burrow_Token.png",
    "metameechstore.png",
    "Playible_Soulbound_Baseball_Athlete_NFT.svg",
    "Tether_USD.svg",
    "ChainLink_Token.png",
    "Meta_Token.svg",
    "Playible_Soulbound_Football_Athlete_NFT.svg",
    "The_Arrogant_Youth_Circle.svg",
    "ClashRow.437z%22%2F%3E%3C%2Fsvg%3E.svg",
    "NameSky.svg",
    "TrueUSD.png",
    "Dai_Stablecoin.svg",
    "NDC_Constellation.svg",
    "Pulse.svg",
    "USD_Coin.svg",
    "El_Café_Cartel_-_Gen_1.svg",
    "NearPad_Token.6045Z%22%20fill%3D%22%234338CA%22%2F%3E%0A%3C%2Fsvg%3E.svg",
    "QSTN_Collectibles.png",
    "USN.svg",
    "Enter_The_Sphere_Metaverse_Lootbox.svg",
    "NEAR.png",
    "Quant.png",
    "Wootrade_Network.svg",
    "Enter_The_Sphere_Metaverse.png",
    "Near_Tinker_Union.png",
    "Realis_Network_LIS_token.svg",
    "Wrapped_BTC.png",
    "Ether.png",
    "nftflows.png",
    "SeatlabNFT.svg",
    "Wrapped_BTC.svg",
    "Frax.svg",
    "NFTU.svg",
    "SeatlabNFT_Tickets.svg",
    "Wrapped_NEAR_fungible_token.svg",
    "freedom.png",
    "Octopus_Network_Token.svg",
    "ShardDog.svg",
    "Good_Fortune_Felines.svg",
    "Paras_Collectibles.svg",
    "Staked_NEAR.svg"
  ];
  
  function formatName(name) {
      return name.replace(/ /g, "_")
  }

  
const data = fs.readFileSync("./nearcontracts.json", {"encoding": "utf-8"})
const json = JSON.parse(data)
const updatedData = json.map((item) => {
    const formattedName = formatName(item.name)
    console.log(item.name)
    console.log(formattedName)
    const matchedImage = images.find((image) => image.startsWith(formatName(item.name)));
    return {"address": item.address, "name": item.name, "category": item.category, "image": matchedImage || null}
})


fs.writeFileSync("newnearcontracts.json", JSON.stringify(updatedData));