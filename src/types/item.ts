import { ItemSlots } from "./itemSlots";
import { ItemStats } from "./itemStats";

export type Substat = {
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

  mainStat?: ItemStats;
  mainStatValue: number;
  minMainStatValue?: number;
  maxMainStatValue?: number;

  substats?: Substat[];

  url: string;
  effectFlavorText?: string;
  effectBonus?: void;
};
