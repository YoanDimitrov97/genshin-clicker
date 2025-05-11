export const upgrades = [
  {
    name: "Fischl & Oz",
    flavorText: "+ 0.1 dmg/s",
    url: "https://paimon.moe/images/characters/fischl.png",
    price: 25,
    priceMultiplier: 1.14,
    dmgPerSec: 0.1,
    elementalType: "Electro",
    owned: 0,
  },
  {
    name: "Fantastic Voyage",
    flavorText: "+ 1 dmg/click",
    url: "https://paimon.moe/images/characters/bennett.png",
    price: 50,
    priceMultiplier: 1.14,
    dmgPerClick: 1,
    elementalType: "Pyro",
    owned: 0,
  },
  {
    name: "Glacial Waltz",
    flavorText: "+ 0.5 dmg/sec",
    url: "https://paimon.moe/images/characters/kaeya.png",
    price: 100,
    priceMultiplier: 1.14,
    dmgPerSec: 0.5,
    elementalType: "Cryo",
    owned: 0,
  },
  {
    name: "Fiery Rain",
    flavorText: "+ 10 dmg/cast",
    url: "https://paimon.moe/images/characters/amber.png",
    price: 250,
    priceMultiplier: 1.14,
    dmgPerCast: 10,
    elementalType: "Pyro",
    owned: 0,
  },
  {
    name: "Lightning Rose",
    flavorText: "+ 1 dmg/sec",
    url: "https://paimon.moe/images/characters/lisa.png",
    price: 500,
    priceMultiplier: 1.14,
    dmgPerSec: 1,
    elementalType: "Electro",
    owned: 0,
  },
  {
    name: "Xingqiu's Rain Blade",
    flavorText: "+ 1 dmg/sec",
    url: "https://rerollcdn.com/GENSHIN/Characters/1/Xingqiu.png",
    price: 500,
    priceMultiplier: 1.14,
    dmgPerSec: 1,
    elementalType: "Hydro",
    owned: 0,
  },
    {
    name: "Pyronado",
    flavorText: "+ 1 dmg/sec",
    url: "https://rerollcdn.com/GENSHIN/Characters/1/Xiangling.png",
    price: 500,
    priceMultiplier: 1.14,
    dmgPerSec: 1,
    elementalType: "Hydro",
    owned: 0,
  },
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