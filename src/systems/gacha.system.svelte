<script lang="ts" module>
  //data
  import { weapons } from "../data/weapons";
  import { artifacts } from "../data/artifacts";
  //systems
  import { stats } from "./stats.system.svelte";
  //types / enums
  import type { Item, Stat } from "../types/item";
  import { ItemStats } from "../types/itemStats";
  import { ItemSlots } from "../types/itemSlots";
  import { mainStatRules, raritySubstatRules } from "../types/rules";
  //utils
  import { formatNum } from "../utils/formatNum";
  import { getRandomNum } from "../utils/getRandomNum";
  import { getRandomFromEnum } from "../utils/getRandomFromEnum";

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

  //generates unique id for each item
  function generateUniqueId(prefix = "item") {
    return `${prefix}_${performance.now()}_${crypto.randomUUID()}`;
    // or for browsers without crypto.randomUUID():
    // return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  function getRandomItem(pool, rarity: string) {
    const itemPoolByRarity = pool[rarity];
    const randItemIndex = Math.floor(Math.random() * itemPoolByRarity.length);
    return itemPoolByRarity[randItemIndex];
  }

  function getRandomStat(obj: Record<string, { min: number; max: number }>) {
    try {
      const keys = Object.keys(obj) as ItemStats[];
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      return {
        stat: randomKey,
        range: obj[randomKey],
      };
    } catch (error) {
      console.log("Houston we have an error: ", error, obj);
    }
  }

  const rollGacha = (xTimes: number) => {
    //roll x amount of times
    let allRolls: Item[] = [];

    for (let i = 0; i < xTimes; i++) {
      //decide on rarity aka COMMON | RARE etc
      const rarity = determineRollRarity();

      //decide on the piece, WEAPON | FLOWER etc
      const piece = getRandomFromEnum(ItemSlots);

      let itemTemplate: Item;

      if (piece === ItemSlots.WEAPON) {
        itemTemplate = getRandomItem(weapons, rarity);
      } else {
        itemTemplate = getRandomItem(artifacts, rarity);
      }

      //GENERATE RANDOM MAIN STAT
      console.log(itemTemplate);
      let randomMainStat = getRandomStat(mainStatRules[itemTemplate.itemSlot]);

      let mainStat: Stat = {
        stat: randomMainStat.stat,
        value: parseFloat(
          formatNum(
            getRandomNum(
              randomMainStat.range.min,
              randomMainStat.range.max,
              false
            ),
            2
          )
        ),
        min: randomMainStat.range.min,
        max: randomMainStat.range.max,
      };

      //between 0 - 4
      let randomSubstatCount: number;
      //holds substat rules for the given rarity
      let substatsBasedOnRarity;
      const finalSubstats: Stat[] = [];

      switch (itemTemplate.rarity) {
        case "COMMON":
          randomSubstatCount = getRandomNum(0, 1);
          substatsBasedOnRarity = raritySubstatRules.COMMON;
          break;
        case "UNCOMMON":
          randomSubstatCount = getRandomNum(1, 2);
          substatsBasedOnRarity = raritySubstatRules.UNCOMMON;
          break;
        case "RARE":
          randomSubstatCount = getRandomNum(2, 3);
          substatsBasedOnRarity = raritySubstatRules.RARE;
          break;
        case "EPIC":
          randomSubstatCount = getRandomNum(3, 4);
          substatsBasedOnRarity = raritySubstatRules.EPIC;
          break;
        default:
          randomSubstatCount = 4;
          substatsBasedOnRarity = raritySubstatRules.LEGENDARY;
          break;
      }

      if (randomSubstatCount > 0) {
        let availableSubstats = { ...substatsBasedOnRarity };
        for (let i = 0; i < randomSubstatCount; i++) {
          const randomSubstat = getRandomStat(availableSubstats);

          finalSubstats.push({
            stat: randomSubstat.stat,
            value: parseFloat(
              formatNum(
                getRandomNum(
                  randomSubstat.range.min,
                  randomSubstat.range.max,
                  false
                ),
                2
              )
            ),
            min: randomSubstat.range.min,
            max: randomSubstat.range.max,
          });
          //delete chosen substat for current cycle
          delete availableSubstats[randomSubstat.stat];
        }
      }

      let item: Item = {
        ...itemTemplate,
        id: generateUniqueId(),
        mainStat,
        substats: finalSubstats,
      };

      allRolls.push(item);
    }
    currentGachaResult = allRolls;
  };

  const calculateSellPercentage = (item: Item) => {
    return Math.round((item?.mainStat.value / item?.mainStat.max) * 90) + 1;
  };

  const sellGachaResults = (items: Item[]) => {
    items.map((item) => {
      stats.gainGold(calculateSellPercentage(item));
      currentGachaResult = currentGachaResult.filter((i) => i.id !== item.id);
    })  
  };

  export const gacha = {
    get gachaRolls() {
      return currentGachaResult;
    },
    rollGacha: (num: number) => rollGacha(num),
    calculateSellPercentage: (item: Item) => calculateSellPercentage(item),
    sellGachaResults: (items: Item[]) => sellGachaResults(items),
  };
</script>
