<script lang="ts">
    import {
        blur,
        crossfade,
        draw,
        fade,
        fly,
        scale,
        slide,
    } from "svelte/transition";
    import { formatNum } from "../utils/formatNum";
    

    // Array to track floating damage numbers
    let { damageNumbers } = $props();
</script>

<div>
    <!-- Floating damage numbers -->
    {#each damageNumbers as number (number.id)}
        <div
            class="damage-number"
            style="--x: {number.x} px; --opacity: {number.opacity};"
            animate:crossfade = {{duration:400}}
        >
            -{formatNum(number.value, 1)}
        </div>
    {/each}
</div>

<style>
    .damage-number {
        position: absolute;
        top: 50%;
        left: 50%;
        color: red;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0 0 3px black;
        transform: translateX(calc(-50% + var(--x)));
        opacity: var(--opacity);
        pointer-events: none;
        z-index: 10;
    }
</style>
