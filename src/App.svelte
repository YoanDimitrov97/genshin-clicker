<script lang="ts">
  import BuyBox from "./components/BuyBox.svelte";
  import Enemy from "./components/Enemy.svelte";
  import { upgrades } from "./data/upgrades";

  let gold = $state(0);
  let level = $state(1); // Starts at level 1
  let dmgPerClick = $state(1);
  let dmgPerSecond = $state(0.1);
</script>

<main>
  <div class="upgrades">
    {#each upgrades as upgrade}
      <BuyBox {upgrade} />
    {/each}
  </div>
  <Enemy {gold} {level} {dmgPerClick} {dmgPerSecond} />
</main>

<style>
  main {
    width: 100vw;
    display: grid;
    grid-template-columns: 25% 1fr;
    gap: 20px;
    box-sizing: border-box;
  }

  .upgrades {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    justify-content: center;
  }
</style>
