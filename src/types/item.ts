import { ItemSlots } from "./itemSlots";
import { ItemStats } from "./itemStats";

export type Stat = {
  stat: ItemStats;
  value: number;
  min: number;
  max: number;
};

export type Item = {
  id?: string | number;
  name: string;
  rarity: string;
  itemSlot: ItemSlots;

  mainStat?: Stat;

  substats?: Stat[];

  url: string;
  effectFlavorText?: string;
  effectBonus?: void;
};
