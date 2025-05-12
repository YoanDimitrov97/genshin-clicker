<script lang="ts">
    import { stats } from "../systems/stats.system.svelte";
    import { formatNum } from "../utils/formatNum";

  
  let { upgrade = $bindable()} = $props();
 
  
  const buyUpgrade = () => {
    stats.loseGold(upgrade.price);
    upgrade.owned++;
    
    if(upgrade?.dmgPerClick) stats.gainDPC(upgrade.dmgPerClick)

    if(upgrade?.dmgPerSec) stats.gainDPS(upgrade.dmgPerSec, upgrade.elementalType)

    //: TODO BOOST DAMAGE BASED ON UPGRADE OWNED

    upgrade.price = upgrade.price * upgrade.priceMultiplier
  }

</script>

<div class="buyBox">
  <h3>{#if stats.gold >= upgrade.price || upgrade.owned > 0} {upgrade.name} #{upgrade.owned} {:else} ??? {/if}</h3>
  <img class="{stats.gold >= upgrade.price || upgrade.owned > 0 ? "show" : "hide"}" src={upgrade.url} alt="" />
  <p>{formatNum(upgrade.price)} Gold</p>
  <small>{#if stats.gold >= upgrade.price || upgrade.owned > 0} {upgrade.flavorText} {:else} ??? {/if}</small>
  <button disabled={upgrade.price > stats.gold} onclick={() => buyUpgrade()}>Buy</button>
</div> 

<style>
  .buyBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 292px;
  }

  h3, p  {
    margin:8px 0;
  }

  img{
    width: 96px;
    height: 96px;
  }

  img.hide {
    filter: brightness(0%);
  }

    img.show {
    filter: brightness(100%);
  }

  button {
    margin-top: 8px;
    width: 128px;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    font-family: Genshin;
    box-sizing: border-box;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
