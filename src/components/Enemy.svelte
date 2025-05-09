<script lang="ts">
  import { damageSystem } from "../systems/damageSystem.svelte";
  import { getEnemyState } from "../systems/enemySystem.svelte.";
  import { formatNum } from "../utils/formatNum";
  import DamageNumberAnimation from "./DamageNumberAnimation.svelte";

  // Props
  let {
    gold = $bindable(),
    dmgPerClick = $bindable(),
    dmgPerSecond = $bindable(),
  } = $props();

  let enemy = getEnemyState();
  // Damage animation ref
  let damageAnimRef: {
    addDamage: (value: number) => void;
    containerWidth: number;
    containerHeight: number;
  };

    // Example usage
  function handleAttack() {
    const defeated = damageSystem.dealDamage(1);
    if (defeated) {
      console.log("Enemy defeated!");
    }
  }

</script>

<div class="enemyBox">
  <h1>{enemy.currentEnemy.name}</h1>

  <div class="health-bar">
    <meter
      class="health-meter"
      max={enemy.maxHP}
      value={formatNum(enemy.hp, 3)}
      title="HP"
      low={enemy.maxHP * 0.3}
      high={enemy.maxHP * 0.6}
      optimum={enemy.maxHP * 0.7}
    ></meter>
    <p>{formatNum(enemy.hp, 1)} / {enemy.maxHP}</p>
  </div>

  <button class="enemyImageContainer" onclick={()=> {
    handleAttack()
  }}>
    <img
      src={enemy.currentEnemy.url}
      alt=""
      onload={(e) => {
        // Auto-detect image dimensions
        damageAnimRef.containerWidth = e.currentTarget.clientWidth;
        damageAnimRef.containerHeight = e.currentTarget.clientHeight;
      }}
    />
    <DamageNumberAnimation bind:this={damageAnimRef} />
  </button>
</div>

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
    background: #dd2c00;
  }

  .enemyBox h1 {
    margin-bottom: 20px;
  }

  .enemyImageContainer {
    position: relative;
    display: inline-block; /* Makes wrapper fit image size */
  }
</style>
