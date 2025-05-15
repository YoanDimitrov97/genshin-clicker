import { ItemSlots } from "./itemSlots";
import { ItemStats } from "./itemStats";
import type { Item } from "./item";
import { formatNum } from "../utils/formatNum";


type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

export const mainStatRules: Record<
  ItemSlots,
  Partial<Record<ItemStats, { min: number; max: number }>>
> = {
  [ItemSlots.CIRCLET]: {
    [ItemStats.CRITRATE]: { min: 2.5, max: 5 },
    [ItemStats.CRITDMG]: { min: 5, max: 10 },
  },
  [ItemSlots.WEAPON]: {
    [ItemStats.ATK]: { min: 0.2, max: 2.0 },
  },
  // Add other slots with their own rules as needed
  [ItemSlots.FLOWER]: {
    [ItemStats.ATK]: { min: 0.2, max: 2.0 },
  },
  [ItemSlots.PLUME]: {
    [ItemStats.ATK]: { min: 0.2, max: 2.0 },
    [ItemStats.CRITRATE]: { min: 2, max: 4 },
  },
  [ItemSlots.SANDS]: {
    [ItemStats.ATK]: { min: 0.2, max: 2.0 },
    [ItemStats.CRITRATE]: { min: 2, max: 4 },
  },
  [ItemSlots.GOBLET]: {
    [ItemStats.PYRODPS]: { min: 5, max: 10 },
    [ItemStats.HYDRODPS]: { min: 5, max: 10 },
    [ItemStats.ELECTRODPS]: { min: 5, max: 10 },
    [ItemStats.CRYODPS]: { min: 5, max: 10 },
    [ItemStats.GEODPS]: { min: 5, max: 10 },
    [ItemStats.ANEMODPS]: { min: 5, max: 10 },
    [ItemStats.DENDRODPS]: { min: 5, max: 10 },
  },
};


// Substat rules by rarity
export const raritySubstatRules: Record<
  Rarity,
  Record<ItemStats, { min: number; max: number }>
> = {
  COMMON: {
    [ItemStats.ATK]: { min: 0.1, max: 0.5 },
    [ItemStats.CRITRATE]: { min: 0.2, max: 2 },
    [ItemStats.CRITDMG]: { min: 0.5, max: 5 },
    [ItemStats.PYRODPS]: { min: 0.1, max: 0.2 },
    [ItemStats.HYDRODPS]: { min: 0.1, max: 0.3 },
    [ItemStats.ELECTRODPS]: { min: 0.1, max: 0.4 },
    [ItemStats.CRYODPS]: { min: 0.1, max: 0.5 },
    [ItemStats.ANEMODPS]: { min: 0.1, max: 0.6 },
    [ItemStats.GEODPS]: { min: 0.1, max: 0.7 },
    [ItemStats.DENDRODPS]: { min: 0.1, max: 0.8 },
  },
  UNCOMMON: {
    [ItemStats.ATK]: { min: 0.15, max: 0.7 },
    [ItemStats.CRITRATE]: { min: 0.015, max: 0.07 },
    [ItemStats.CRITDMG]: { min: 0.07, max: 0.2 },
    [ItemStats.PYRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.HYDRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ELECTRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.CRYODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ANEMODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.GEODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.DENDRODPS]: { min: 0.15, max: 0.4 },
  },
  RARE: {
    [ItemStats.ATK]: { min: 0.15, max: 0.7 },
    [ItemStats.CRITRATE]: { min: 0.015, max: 0.07 },
    [ItemStats.CRITDMG]: { min: 0.07, max: 0.2 },
    [ItemStats.PYRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.HYDRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ELECTRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.CRYODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ANEMODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.GEODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.DENDRODPS]: { min: 0.15, max: 0.4 },
  },
  EPIC: {
    [ItemStats.ATK]: { min: 0.15, max: 0.7 },
    [ItemStats.CRITRATE]: { min: 0.015, max: 0.07 },
    [ItemStats.CRITDMG]: { min: 0.07, max: 0.2 },
    [ItemStats.PYRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.HYDRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ELECTRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.CRYODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ANEMODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.GEODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.DENDRODPS]: { min: 0.15, max: 0.4 },
  },
  LEGENDARY: {
    [ItemStats.ATK]: { min: 0.15, max: 0.7 },
    [ItemStats.CRITRATE]: { min: 0.015, max: 0.07 },
    [ItemStats.CRITDMG]: { min: 0.07, max: 0.2 },
    [ItemStats.PYRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.HYDRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ELECTRODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.CRYODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.ANEMODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.GEODPS]: { min: 0.15, max: 0.4 },
    [ItemStats.DENDRODPS]: { min: 0.15, max: 0.4 },
  },
};