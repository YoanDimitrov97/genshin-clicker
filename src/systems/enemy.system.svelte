<script lang="ts" module>
  import { enemies } from "../data/enemies";
  import type { Enemy } from "../data/enemies";
  import { getRandomNum } from "../utils/getRandomNum";
  import { stats } from "./stats.system.svelte";

  let enemyLevel = $state(1);
  let maxHP = $state(0);
  let currentHP = $state(0);
  let currentEnemy = $state<Enemy>({
    name: "",
    url: "",
    baseMinHP: 0,
    baseMaxHP: 0,
    hpMultiplier: 1,
    minGoldYield: 0,
    maxGoldYield: 0,
    goldMultiplier: 1,
  });

  const generateRandomEnemy = () => {
    const randomIndex = Math.floor(Math.random() * enemies.length);
    const randomEnemy = enemies[randomIndex];
    currentEnemy = randomEnemy;
    // Base values
    const baseMinHP = randomEnemy.baseMinHP;
    const baseMaxHP = randomEnemy.baseMaxHP;

    // Exponential scaling factor
    const hpMultiplier = Math.pow(randomEnemy.hpMultiplier, enemyLevel - 1); // Grows each level

    // Scaled random HP
    const randHP = Math.floor(
      (Math.random() * (baseMaxHP - baseMinHP) + baseMinHP) * hpMultiplier
    );
    maxHP = randHP;
    currentHP = randHP;
  };

  const damageEnemy = (
    amount: number = stats.dmgPerClick,
    element:string,
    showDamage?: (value: number, element:string, isCrit: boolean) => void
  ) => {
    let isCrit = false;
    //check if it's a crit
    if (getRandomNum(0, 100) < stats.characterStats.critRate) {
      amount *= stats.critMultiplyer();
      isCrit = true;
    }

    currentHP -= amount;

    // Show damage animation if function provided
    showDamage?.(amount, element, isCrit);

    //enemy dies
    if (currentHP <= 0) {
      enemyLevel++;
      gainGoldOnKill();
      generateRandomEnemy();
    }
  };

  const gainGoldOnKill = () => {
    // Exponential scaling factor
    const goldMultiplier = Math.pow(
      currentEnemy.goldMultiplier,
      enemyLevel - 1
    );

    // Scaled random GOLD
    const randGold = Math.floor(
      (Math.random() * (currentEnemy.maxGoldYield - currentEnemy.minGoldYield) +
        currentEnemy.minGoldYield) *
        goldMultiplier
    );

    stats.gainGold(randGold);
  };

  export const enemy = {
    get maxHP() {
      return maxHP;
    },
    get currentHP() {
      return currentHP;
    },
    get enemyLevel() {
      return enemyLevel;
    },
    get currentEnemy() {
      return currentEnemy;
    },
    spawnEnemy: () => generateRandomEnemy(),
    dealDamage: (showDamage?: (value: number, element:string, isCrit: boolean) => void) =>
      damageEnemy(stats.dmgPerClick, 'physical', showDamage),
    dealPyroDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.pyroDps, 'pyro', showDamage);
    },
    dealHydroDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.hydroDps, 'hydro', showDamage);
    },
    dealElectroDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.electroDps, 'electro', showDamage);
    },
    dealCryoDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.cryoDps, 'cryo', showDamage);
    },
    dealAnemoDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.anemoDps, 'anemo', showDamage);
    },
    dealGeoDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.geoDps, 'geo', showDamage);
    },
    dealDendroDpsDamage: (
      showDamage?: (value: number, element:string, isCrit: boolean) => void
    ) => {
      damageEnemy(stats.characterStats.dendroDps, 'dendro', showDamage);
    },
  };
</script>
