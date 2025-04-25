<script lang="ts">
  let { upgrade } = $props();
</script>

<div class="buyBox">
  <h4>{upgrade.name}</h4>
  <img src={upgrade.url} alt="" />
  <p>{upgrade.basePrice} Gold</p>
  <small>{upgrade.flavorText}</small>
  <button>Buy</button>
</div>

<style>
  .buyBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
  }

  img {
    width: 128px;
    height: 128px;
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
