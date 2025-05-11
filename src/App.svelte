<script lang="ts">
  import Nav from "./Nav.svelte";
  import Battle from "./Battle.svelte";
  import Wish from "./Wish.svelte";
  import Artifacts from "./Artifacts.svelte";
  import GlobalStats from "./GlobalStats.svelte";

  import { stats } from "./systems/stats.system.svelte";

  let currentView: string = $state("");
</script>

<div id="wrapper">
  <Nav bind:currentView />
  <main>
    <Battle />

    {#if currentView === "wish"}
      <Wish />
    {:else if currentView === "artifacts"}
      <Artifacts />
    {/if}

    <GlobalStats />
  </main>
</div>

<style>
  #wrapper {
    display: grid;
    grid-template-columns: 60px 1fr;
    overflow: hidden;
    height: calc(100vh);
  }

  main {
    width: calc(100vw - 60px);
    display: grid;
    grid-template-rows: 1fr 60px;
    gap: 4px;
    box-sizing: border-box;
  }

  /* .upgrades {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    overflow-y: scroll;
  } */
</style>
