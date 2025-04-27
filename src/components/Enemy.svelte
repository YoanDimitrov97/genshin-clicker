<script lang="ts">
  import { enemies } from "../data/enemies";
  import type { Enemy } from "../data/enemies";
  import { formatNum } from "../utils/formatNum";
  import DamageNumberAnimation from "./DamageNumberAnimation.svelte";

  //props
  let {
    gold = $bindable(),
    level = $bindable(),
    dmgPerClick = $bindable(),
    dmgPerSecond = $bindable(),
  } = $props();

  // Array to track floating damage numbers
  let damageNumbers = $state([]);

  //states
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
    const hpMultiplier = Math.pow(randomEnemy.hpMultiplier, level - 1); // Grows each level

    // Scaled random HP
    const randHP = Math.floor(
      (Math.random() * (baseMaxHP - baseMinHP) + baseMinHP) * hpMultiplier,
    );

    currentHP = randHP;
  };

  //GAIN GOLD WHEN ENEMY DIES
  const gainGoldOnDeath = () => {
    // Exponential scaling factor
    const goldMultiplier = Math.pow(currentEnemy.goldMultiplier, level - 1);

    // Scaled random GOLD
    const randGold = Math.floor(
      (Math.random() * (currentEnemy.maxGoldYield - currentEnemy.minGoldYield) +
        currentEnemy.minGoldYield) *
        goldMultiplier,
    );
    console.log(gold, randGold);

    gold += randGold;
  };

  //DAMAGE PER CLICK
  const takeDamage = (amount = 1) => {
    if (amount > 0) {
      currentHP -= amount;

      const newNumber = {
        id: Date.now(), // Unique identifier
        value: amount,
        x: Math.random() * 400 - 1, // Random horizontal position (-50 to 50)
        // y: Math.random() * 400 - 200, // Random vertical position (-50 to 50)
        opacity: 1,
      };
      damageNumbers = [...damageNumbers, newNumber];
      // Remove after animation completes
      setTimeout(() => {
        damageNumbers = damageNumbers.filter((n) => n.id !== newNumber.id);
      }, 1000);
    }

    if (currentHP <= 0) {
      level++;
      gainGoldOnDeath();
      generateRandomEnemy();
    }
  };

  //DAMAGE PER SECOND
  $effect(() => {
    const interval = setInterval(() => {
      takeDamage(dmgPerSecond);
    }, 1000); // every second

    return () => clearInterval(interval); // clean up when component is destroyed
  });

  generateRandomEnemy();
</script>

<button class="enemyBox" onclick={() => takeDamage(dmgPerClick)}>
  <h1>HP: {formatNum(currentHP, 3)}</h1>
  <h1>{currentEnemy.name}</h1>
  <img src={currentEnemy.url} alt="" />

  <DamageNumberAnimation {damageNumbers} />
</button>

<style>
  .enemyBox {
    outline: none;
  }

  .enemyBox h1 {
    margin-bottom: 20px;
  }

  img {
    width: 360px;
  }
</style>
