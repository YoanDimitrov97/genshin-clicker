<script lang="ts">
  import { enemy } from "../systems/enemy.system.svelte";
  import { stats } from "../systems/stats.system.svelte";
  import { formatNum } from "../utils/formatNum";
  import DamageNumberAnimation from "./DamageNumberAnimation.svelte";

  let damageAnimation: {
    addDamage: (value: number) => void;
  };

  enemy.spawnEnemy();

  $effect(() => {
    if (stats.dmgPerSecond > 0) {
      const dpsInterval = setInterval(() => {
        enemy.dealDpsDamage(damageAnimation?.addDamage);
      }, 1000);
    }
  });
</script>

<div class="enemyBox">
  <h1>{enemy.currentEnemy.name}</h1>

  <div class="health-bar">
    <meter
      class="health-meter"
      max={enemy.maxHP}
      value={formatNum(enemy.currentHP, 3)}
      title="HP"
      low={enemy.maxHP * 0.3}
      high={enemy.maxHP * 0.6}
      optimum={enemy.maxHP * 0.7}
    ></meter>
    <p>{formatNum(enemy.currentHP, 1)} / {enemy.maxHP}</p>
  </div>

  <button
    class="enemyImageContainer"
    onclick={() => enemy.dealDamage(damageAnimation?.addDamage)}
  >
    <img src={enemy.currentEnemy.url} alt="" />
    <DamageNumberAnimation bind:this={damageAnimation} />
  </button>
</div>

<style>
  .enemyBox {
    outline: none;
    /* width: calc(100vw - 60px); */
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
  }

  h1 {
    text-align: center;
    box-sizing: border-box;
  }

  .health-bar {
    margin: 0 auto;
    width: 300px;
    position: relative;
  }

  .health-bar p {
    position: absolute;
    top: 8px;
    line-height: 16px;
    width: 80px;
    left: calc(50% - 40px / 2);
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
    background: #dd2c00;
  }

  .enemyImageContainer {
    position: relative;
    display: inline-block; /* Makes wrapper fit image size */
    background-color: #242424;
    border: none;
    width: 300px;
    margin: 0 auto;
  }

  img {
    width: 300px;
  }
</style>
