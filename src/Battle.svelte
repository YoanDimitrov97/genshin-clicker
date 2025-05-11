<script lang="ts">
    //import BuyBox from "./components/BuyBox.svelte";
    import Enemy from "./components/Enemy.svelte";
    import { upgrades } from "./data/upgrades";
    import type { Upgrade } from "./data/upgrades";
    import BuyBox from "./components/BuyBox.svelte";

    let currentUpgrades: Upgrade = $state();
    currentUpgrades = upgrades;

</script>

<div>
    <Enemy />
    <section class="upgrades">
        {#each currentUpgrades as upgrade, i (upgrade.name)}
            <BuyBox bind:upgrade={currentUpgrades[i]} />
        {/each}
    </section>
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 24%;
    }

    .upgrades {
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow-y: scroll;
    }
</style>
