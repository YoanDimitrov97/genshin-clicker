<script lang="ts">
  import BuyBox from "./components/BuyBox.svelte";
  import Enemy from "./components/Enemy.svelte";
  import { upgrades } from "./data/upgrades";
  import { formatNum } from "./utils/formatNum";
  
  let currentUpgrades = $state(upgrades);
  let gold = $state(40);
  let level = $state(1); // Starts at level 1
  let dmgPerClick = $state(1);
  let dmgPerSecond = $state(0);
</script>

<div id="wrapper">
  <main>
    <section class="upgrades">
      {#each currentUpgrades as upgrade, i (upgrade.name)}
        <BuyBox
          bind:upgrade={currentUpgrades[i]}
          bind:gold
          bind:dmgPerClick
          bind:dmgPerSecond
        />
      {/each}
    </section>
    <Enemy bind:level bind:dmgPerClick bind:dmgPerSecond bind:gold />
  </main>
  <footer class="bottom">
    <span>DPC:{formatNum(dmgPerClick)}</span>
    <span>DPS:{formatNum(dmgPerSecond)}</span>

    <div class="goldSection">
      <p>{formatNum(gold)}</p>
      <img
        src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Mora.png"
        alt="mora"
      />
    </div>
  </footer>
</div>

<style>
  #wrapper {
    display: grid;
    grid-template-rows: 1fr 60px;
    overflow: hidden;
  }

  main {
    width: 100vw;
    height: calc(100vh - 60px);
    display: grid;
    grid-template-columns: 25% 1fr;
    gap: 4px;
    box-sizing: border-box;
  }

  .upgrades {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    overflow-y: scroll;
  }

  footer,
  footer .goldSection {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }

  footer img {
    width: 36px;
    height: 36px;
  }
</style>
