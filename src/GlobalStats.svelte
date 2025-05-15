<script lang="ts">
    import { formatNum } from "./utils/formatNum";
    import { stats } from "./systems/stats.system.svelte";
  import { enemy } from "./systems/enemy.system.svelte";
</script>

<footer>
    <div class="stats-info">
        <div class="version">
            <small class="version">Genshin Clicker v0.3</small>
        </div>
        <div class="stats">
            <span>Damage Per Click: {formatNum(stats.dmgPerClick)}</span>
            <span>Damage Per Second: {formatNum(stats.dmgPerSecond)}</span>
            <span>Pyro DPS: {formatNum(stats.characterStats.pyroDps)}</span>
            <span>Cryo DPS: {formatNum(stats.characterStats.cryoDps)}</span>
            <span>Electro DPS: {formatNum(stats.characterStats.electroDps)}</span>
            <span>Enemies Killed: {enemy.enemyLevel}</span>
            <span>Crit Rate: {formatNum(stats.characterStats.critRate)}%</span>
            <span>Crit DMG: {formatNum(stats.characterStats.critDmg)}%</span>
        </div>
    </div>

    <div class="goldSection">
        <p>{formatNum(stats.gold)}</p>
        <img
            src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Mora.png"
            alt="mora"
        />
    </div>
</footer>

<style>
    footer {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 80px;
        align-items: center;
        justify-content: center;
        background-color: #000;
    }

    .stats-info {
        display: grid;
        grid-template-columns: 12% 88%;
    }

    span {
        background: #333;
        padding: 4px 12px;
        border-radius: 8px;
    }

    .goldSection {
        display:flex;
        align-items:center;
    }

    footer img {
        width: 36px;
        height: 36px;
    }
</style>
