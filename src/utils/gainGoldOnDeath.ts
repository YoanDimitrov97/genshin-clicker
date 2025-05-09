//GAIN GOLD WHEN ENEMY DIES
export const gainGoldOnDeath = (currentEnemy, level:number, gold:number) => {
  // Exponential scaling factor
  const goldMultiplier = Math.pow(currentEnemy.goldMultiplier, level - 1);

  // Scaled random GOLD
  const randGold = Math.floor(
    (Math.random() * (currentEnemy.maxGoldYield - currentEnemy.minGoldYield) +
      currentEnemy.minGoldYield) *
      goldMultiplier
  );
  //console.log(gold, randGold);

  return randGold;
};
