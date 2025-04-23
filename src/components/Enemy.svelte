<script lang="ts">
  let {gold, level, dmgPerClick, dmgPerSecond } = $props();
  let currentHP = $state(0);

  function formatHP(hp: number): string {
    return hp % 1 === 0 ? hp.toString() : hp.toFixed(3).replace(/\.?0+$/, "");
  }

  const generateRandomEnemy = () => {
    // Base values
    const baseMinHP = 8;
    const baseMaxHP = 12;

    // Exponential scaling factor
    const hpMultiplier = Math.pow(1.05, level - 1); // Grows each level

    // Scaled random HP
    const randHP = Math.floor(
      (Math.random() * (baseMaxHP - baseMinHP) + baseMinHP) * hpMultiplier
    );

    currentHP = randHP;
  };

  //DAMAGE PER CLICK
  const takeDamage = (amount = 1) => {
    currentHP -= amount;

    if (currentHP <= 0) {
      level++;
      generateRandomEnemy();
    }
  };

  //DAMAGE PER SECOND
  $effect(() => {
    const interval = setInterval(() => {
      takeDamage(dmgPerSecond);
    }, 1000); // every second

    return () => clearInterval(interval); // clean up when component is destroyed
  });

  generateRandomEnemy();
</script>

<button class="enemyBox" onclick={() => takeDamage(dmgPerClick)}>
  <header>HP: {formatHP(currentHP)}</header>
  <img
    src="https://static.wikia.nocookie.net/gensin-impact/images/7/76/Enemy_Hilichurl_Fighter_Full_Artwork.png"
    alt=""
  />
</button>

<style>
  .enemyBox {
    outline: none;
  }

  .enemyBox header {
    margin-bottom: 20px;
  }
</style>
