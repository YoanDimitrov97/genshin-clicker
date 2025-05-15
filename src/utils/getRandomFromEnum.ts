import { getRandomNum } from "./getRandomNum";

export function getRandomFromEnum<T>(enumObj: T): T[keyof T] {
  const allValues = Object.values(enumObj).filter(
    (v) => typeof v === "number"
  ) as T[keyof T][];
  const randomIndex = getRandomNum(0, allValues.length);
  return allValues[randomIndex];
}