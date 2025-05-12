export const upgrades = [
  {
    name: "Fiery Rain",
    flavorText: "+ 0.1 dmg/s",
    url: "https://paimon.moe/images/characters/amber.png",
    price: 20,
    priceMultiplier: 1.10,
    dmgPerSec: 0.1,
    elementalType: "Pyro",
    owned: 0,
  },
  {
    name: "Hydro",
    flavorText: "+ 0.1 dmg/s",
    url: "https://paimon.moe/images/characters/furina.png",
    price: 20,
    priceMultiplier: 1.10,
    dmgPerSec: 0.1,
    elementalType: "Hydro",
    owned: 0,
  },
  {
    name: "Anemo",
    flavorText: "+ 0.1 dmg/s",
    url: "https://paimon.moe/images/characters/venti.png",
    price: 20,
    priceMultiplier: 1.10,
    dmgPerSec: 0.1,
    elementalType: "Anemo",
    owned: 0,
  },
  {
    name: "Geo",
    flavorText: "+ 0.1 dmg/s",
    url: "https://paimon.moe/images/characters/zhongli.png",
    price: 20,
    priceMultiplier: 1.10,
    dmgPerSec: 0.1,
    elementalType: "Geo",
    owned: 0,
  },
  {
    name: "Dendro",
    flavorText: "+ 0.1 dmg/s",
    url: "https://paimon.moe/images/characters/nahida.png",
    price: 20,
    priceMultiplier: 1.10,
    dmgPerSec: 0.1,
    elementalType: "Dendro",
    owned: 0,
  },
  {
    name: "Glacial Waltz",
    flavorText: "+ 0.5 dmg/sec",
    url: "https://paimon.moe/images/characters/kaeya.png",
    price: 50,//100
    priceMultiplier: 1.14,
    dmgPerSec: 0.5,
    elementalType: "Cryo",
    owned: 0,
  },
  {
    name: "Lightning Rose",
    flavorText: "+ 2 dmg/s",
    url: "https://paimon.moe/images/characters/lisa.png",
    price: 100,//250
    priceMultiplier: 1.14,
    dmgPerSec: 2,
    elementalType: "Electro",
    owned: 0,
  },
  // {
  //   name: "Whisper of Water",
  //   flavorText: "+ 1 dmg/click",
  //   url: "https://paimon.moe/images/characters/barbara.png",
  //   price: 500,
  //   priceMultiplier: 1.14,
  //   dmgPerClick: 1,
  //   elementalType: "Hydro",
  //   owned: 0,
  // },
  // {
  //   name: "Pyronado",
  //   flavorText: "+ 5 dmg/sec",
  //   url: "https://paimon.moe/images/characters/xiangling.png",
  //   price: 1000,
  //   priceMultiplier: 1.14,
  //   dmgPerSec: 5,
  //   elementalType: "Hydro",
  //   owned: 0,
  // },
];

export type Upgrade  = {
    name: string;
    flavorText: string;
    url: string;
    price: string;
    pripriceMultiplierce: string;
    dmgPerSec?: number;
    dmgPerClick?: number;
    elementalType:string;
    owned:number;
}