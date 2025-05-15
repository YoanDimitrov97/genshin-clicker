<script lang="ts">
  import ItemBox from "./components/ItemBox.svelte";
  import { gacha } from "./systems/gacha.system.svelte";

</script>

<div class="wish-container">
  <h4>Wishes = 160 gold</h4>
  <button onclick={() => gacha.rollGacha(1)}>Wish 1</button>
  <button onclick={() => gacha.rollGacha(10)}>Wish 10</button>

  <div class="wish-result">
    {#each gacha.gachaRolls as roll, i (i)}
      <ItemBox item={roll} />
    {/each}
  </div>

  <button>ADD ALL</button>
  <button onclick={()=> {gacha.sellGachaResults(gacha.gachaRolls)}}>SELL ALL</button>
</div>

<style>
  .wish-container {
    width: calc(100vw - 60px);
    height: calc(100vh - 60px);
    background: #242424;
    position: absolute;
    left: 60px;
    top: 0;
  }

  .wish-result {
    margin: 0 auto;
    width: 70%;
    padding: 20px 0 0 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
</style>
