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
  let damageAnimRef: {
    addDamage: (value: number) => void;
    containerWidth: number;
    containerHeight: number;
  };

  //states
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
    const hpMultiplier = Math.pow(randomEnemy.hpMultiplier, level - 1); // Grows each level

    // Scaled random HP
    const randHP = Math.floor(
      (Math.random() * (baseMaxHP - baseMinHP) + baseMinHP) * hpMultiplier
    );
    maxHP = randHP;
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
        goldMultiplier
    );
    console.log(gold, randGold);

    gold += randGold;
  };

  //RUNS EVERYTIME YOU TAKE DAMAGE
  const takeDamage = (amount = 1) => {
    if (amount > 0) {
      currentHP -= amount;

      damageAnimRef.addDamage(amount);
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
  <h1>{currentEnemy.name}</h1>

  <div class="health-bar">
    <meter
      class="health-meter"
      max={maxHP}
      value={formatNum(currentHP, 3)}
      title="HP"
      low={maxHP * 0.3}
      high={maxHP * 0.6}
      optimum={maxHP * 0.7}
    ></meter>
    <p>{formatNum(currentHP, 1)} / {maxHP}</p>
  </div>

  <div class="enemyImageContainer">
    <img
      src={currentEnemy.url}
      alt=""
      onload={(e) => {
        // Auto-detect image dimensions
        damageAnimRef.containerWidth = e.currentTarget.clientWidth;
        damageAnimRef.containerHeight = e.currentTarget.clientHeight;
      }}
    />
    <DamageNumberAnimation bind:this={damageAnimRef} />
  </div>
</button>

<style>
  .enemyBox {
    outline: none;
  }

  .health-bar {
    margin: 0 auto;
    width: 15%;
    position: relative;
  }

  .health-bar p {
    position: absolute;
    left: calc(50% - 80px / 2);
    top: 8px;
    line-height: 16px;
    width: 80px;
    text-shadow: 1px 1px 2px black;
  }

  .health-meter {
    width: 100%;
    height: 32px;
    -webkit-appearance: none;
    appearance: none;
    position: relative;
  }
  /* Chrome/Safari */
  .health-meter::-webkit-meter-bar {
    background: #eee; /* Track color */
    border-radius: 10px;
  }

  .health-meter::-webkit-meter-optimum-value {
    background: #00c853;
  }
  .health-meter::-webkit-meter-suboptimum-value {
    background: #ffd600;
  }
  .health-meter::-webkit-meter-even-less-good-value {
    background: #DD2C00;
  }

  .enemyBox h1 {
    margin-bottom: 20px;
  }

  .enemyImageContainer {
    position: relative;
    display: inline-block; /* Makes wrapper fit image size */
  }
</style>
