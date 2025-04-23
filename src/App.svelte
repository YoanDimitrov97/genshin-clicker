<script lang="ts">
  import Enemy from "./components/Enemy.svelte";

  let gold = $state(0);
  let level = $state(1); // Starts at level 1
  let dmgPerClick = $state(1);
  let dmgPerSecond = $state(0.1);
</script>

<main>
  <Enemy {gold} {level} {dmgPerClick} {dmgPerSecond} />
</main>

<style>
  @font-face {
    font-family: Genshin;
    src: url('/src/fonts/genshin.ttf');
  }
  * {
    font-family:Genshin;
  }
</style>
