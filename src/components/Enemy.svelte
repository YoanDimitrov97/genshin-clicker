<script lang="ts">
  import { enemy } from "../systems/enemy.system.svelte";
  import { stats } from "../systems/stats.system.svelte";
  import { formatNum } from "../utils/formatNum";
  import DamageNumberAnimation from "./DamageNumberAnimation.svelte";

  let damageAnimation: {
    addDamage: (value: number, element:string) => void;
  };


  enemy.spawnEnemy();

  function setupDpsInterval(dps: number, element: string) {
    if (dps > 0) {
      const interval = setInterval(() => {
        switch (element) {
          case "Pyro":
            enemy.dealPyroDpsDamage(damageAnimation?.addDamage);
            break;
          case "Hydro":
            enemy.dealHydroDpsDamage(damageAnimation?.addDamage);
            break;
          case "Cryo":
            enemy.dealCryoDpsDamage(damageAnimation?.addDamage);
            break;
          case "Electro":
            enemy.dealElectroDpsDamage(damageAnimation?.addDamage);
            break;
          case "Anemo":
            enemy.dealAnemoDpsDamage(damageAnimation?.addDamage);
            break;
          case "Geo":
            enemy.dealGeoDpsDamage(damageAnimation?.addDamage);
            break;
          case "Dendro":
            enemy.dealDendroDpsDamage(damageAnimation?.addDamage);
            break;

          default:
            break;
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }

  $effect(() => setupDpsInterval(stats.characterStats.pyroDps, "Pyro"));
  $effect(() => setupDpsInterval(stats.characterStats.hydroDps, "Hydro"));
  $effect(() => setupDpsInterval(stats.characterStats.cryoDps, "Cryo"));
  $effect(() => setupDpsInterval(stats.characterStats.electroDps, "Electro"));
  $effect(() => setupDpsInterval(stats.characterStats.anemoDps, "Anemo"));
  $effect(() => setupDpsInterval(stats.characterStats.geoDps, "Geo"));
  $effect(() => setupDpsInterval(stats.characterStats.dendroDps, "Dendro"));
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
    width: 160px;
    left: calc(50% - 160px / 2);
    text-shadow: 1px 1px 2px black;
    text-align: center;
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
