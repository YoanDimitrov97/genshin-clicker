<script lang="ts">
  import { gacha } from "../systems/gacha.system.svelte";
  import { stats } from "../systems/stats.system.svelte";

  let { item } = $props();
</script>

<div class={item.id}>
  <h3>{item.name}</h3>
  <div class="item-image item-rarity-{item.rarity}">
    <img src={item.url} alt="" />
  </div>

  <p>+ {item.mainStatValue} {item.mainStat}</p>
  {#each item.substats as substat}
  <small>+ {substat.value} {substat.stat}</small>
  {/each}
  <div>
    <button>Add to Bag</button>
    <button
      onclick={() => {
        gacha.sellGachaResult(item)
      }}>Sell for {gacha.calculateSellPercentage(item)}G</button
    >
  </div>
</div>

<style>
  h3 {
    background: #111;
    text-align: center;
  }
  .item-image {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .item-rarity-COMMON {
    background-image: url("https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Background_Item_1_Star.png");
  }
  .item-rarity-UNCOMMON {
    background-image: url("https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Background_Item_2_Star.png");
  }
  .item-rarity-RARE {
    background-image: url("https://static.wikia.nocookie.net/gensin-impact/images/2/20/Background_Item_3_Star.png");
  }
  .item-rarity-EPIC {
    background-image: url("https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Background_Item_4_Star.png");
  }
  .item-rarity-LEGENDARY {
    background-image: url("https://static.wikia.nocookie.net/gensin-impact/images/7/76/Background_Item_5_Star.png");
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    text-align: center;
    background-color: #111;
  }
</style>
