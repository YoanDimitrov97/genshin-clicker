<script lang="ts">
    import { formatNum } from "../utils/formatNum";

  
  let { upgrade = $bindable(), gold = $bindable(), dmgPerClick = $bindable(), dmgPerSecond = $bindable()} = $props();
  console.log(upgrade.price, gold);
  
  const buyUpgrade = () => {
    gold -= upgrade.price;
    upgrade.owned++;
    
    if(upgrade?.dmgPerClick) dmgPerClick += upgrade.dmgPerClick

    if(upgrade?.dmgPerSec) dmgPerSecond += upgrade.dmgPerSec

    console.log(upgrade.price, upgrade.priceMultiplier);
    
    upgrade.price = upgrade.price * upgrade.priceMultiplier
  }

</script>

<div class="buyBox">
  <h3>{upgrade.name} #{upgrade.owned}</h3>
  <img src={upgrade.url} alt="" />
  <p>{formatNum(upgrade.price)} Gold</p>
  <small>{upgrade.flavorText}</small>
  <button disabled={upgrade.price > gold} onclick={() => buyUpgrade()}>Buy</button>
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
