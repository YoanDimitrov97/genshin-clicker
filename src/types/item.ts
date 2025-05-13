import { ItemSlots } from "./itemSlots";
import { ItemStats } from "./itemStats";

export type Item = {
  id?: string | number;
  name: string;
  rarity: string;
  itemSlot: ItemSlots;

  mainStat?: ItemStats;
  mainStatValue?: number;
  minMainStatValue?: number;
  maxMainStatValue?: number;

  substatOne?: ItemStats;
  substatOneValue?: number;
  minSubstatOneValue?: number;
  maxSubstatOneValue?: number;

  substatTwo?: ItemStats;
  substatTwoValue?: number;
  minSubstatTwoValue?: number;
  maxSubstatTwoValue?: number;

  substatThree?: ItemStats;
  substatThreeValue?: number;
  minSubstatThreeValue?: number;
  maxSubstatThreeValue?: number;

  substatFour?: ItemStats;
  substatFourValue?: number;
  minSubstatFourValue?: number;
  maxSubstatFourValue?: number;

  url: string;
  effectFlavorText?:string;
  effectBonus?: void;
};
