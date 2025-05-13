<script lang="ts" module>
  import { weapons } from "../data/weapons";
  import { artifacts } from "../data/artifacts";
  import { formatNum } from "../utils/formatNum";
  import { getRandomNum } from "../utils/getRandomNum";
  import { stats } from "./stats.system.svelte";

  import type { Item } from "../types/item";
  import { ItemStats } from "../types/itemStats";
  import { ItemSlots } from "../types/itemSlots";
  import { mainStatRules } from "../types/rules";

  let currentGachaResult: Item[] = $state([]);

  //determines roll rairty like COMMON | RARE | LEGENDARY etc
  function determineRollRarity() {
    const RARITY_THRESHOLDS = {
      LEGENDARY: 0.5, //0.5% chance (99.5-100%)
      EPIC: 2.5, // 2.5% chance (97-99.5%)
      RARE: 10, // 10% chance (87-97%)
      UNCOMMON: 25, // 25% chance (62-87%)
      COMMON: 62, // 62% chance
    };

    const roll = getRandomNum(0, 100, false); // Get number between 0-100

    return "COMMON";
    if (roll < RARITY_THRESHOLDS.LEGENDARY) return "LEGENDARY";
    if (roll < RARITY_THRESHOLDS.EPIC) return "EPIC";
    if (roll < RARITY_THRESHOLDS.RARE) return "RARE";
    if (roll < RARITY_THRESHOLDS.UNCOMMON) return "UNCOMMON";
  }

  //determines which roll piece to get WEAPON | FLOWER | PLUME etc
  function determineRollPiece() {
    const pieces = Object.values(ItemSlots).filter(
      (v) => typeof v === "number"
    ) as ItemSlots[];
    const randomIndex = getRandomNum(0, pieces.length);
    return pieces[randomIndex];
  }

  //determines which roll piece to get WEAPON | FLOWER | PLUME etc
  function determineRollStat() {
    const pieces = Object.values(ItemStats).filter(
      (v) => typeof v === "number"
    ) as ItemStats[];
    const randomIndex = getRandomNum(0, pieces.length);
    return pieces[randomIndex];
  }

  //generates unique id for each item
  function generateUniqueId(prefix = "weapon") {
    return `${prefix}_${performance.now()}_${crypto.randomUUID()}`;
    // or for browsers without crypto.randomUUID():
    // return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  const rollGacha = (xTimes: number) => {
    //roll x amount of times
    let allRolls: Item[] = [];

    for (let i = 0; i < xTimes; i++) {
      //decide on rarity aka COMMON | RARE etc
      const rarity = determineRollRarity();

      //decide on the piece, WEAPON | FLOWER etc
      const piece = determineRollPiece();

      let itemTemplate: Partial<Item>;

      if (piece === ItemSlots.WEAPON) {
        const weaponPool = weapons[rarity];
        const randWeaponIndex = Math.floor(Math.random() * weaponPool.length);
        itemTemplate = weaponPool[randWeaponIndex];
      } else {
        const piecePool = artifacts[rarity]; // Add support for FLOWER, PLUME etc.
        const randIndex = Math.floor(Math.random() * piecePool.length);
        itemTemplate = piecePool[randIndex];
      }

      const item: Item = {
        ...itemTemplate,
        id: generateUniqueId(),
      };

      //: TODO IF MORE THAN 1 SUBSTAT, GET RANDOM 1 
      console.log(mainStatRules[item.itemSlot]);

      allRolls.push(item);

      //   if (piece === ItemSlots.WEAPON) {
      //     //get the length of all the weapons in the COMMON/RARE etc rarity
      //     let weaponLength = weapons[rarity].length - 1;

      //     let randWeaponIndex = getRandomNum(0, weaponLength);

      //     let randWeapon: Item = weapons[rarity][randWeaponIndex];

      //     const newWeapon = {
      //       ...randWeapon,
      //       id: generateUniqueId(),
      //       mainStat: ItemStats.ATK,
      //       mainStatValue: getRandomNum(0.2, 2),
      //     };

      //     allRolls.push(newWeapon);
      //   }
    }
    currentGachaResult = allRolls;
  };

  const calculateSellPercentage = (item: Item) => {
    return Math.round((item?.mainStatValue / item?.maxMainStatValue) * 90) + 1;
  };

  const sellGachaResult = (item: Item) => {
    stats.gainGold(calculateSellPercentage(item));
    currentGachaResult = currentGachaResult.filter((i) => i.id !== item.id);
  };

  export const gacha = {
    get gachaRolls() {
      return currentGachaResult;
    },
    rollGacha: (num: number) => rollGacha(num),
    calculateSellPercentage: (item: Item) => calculateSellPercentage(item),
    sellGachaResult: (item: Item) => sellGachaResult(item),
  };
</script>
