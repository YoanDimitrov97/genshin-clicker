<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { formatNum } from "../utils/formatNum";

  let damageNumbers = $state<
    {
      id: number;
      value: number;
      x: number;
      y: number;
      opacity: number;
      isCrit: boolean;
      element: string;
    }[]
  >([]);

  let damageId = 0;
  // Export the function to be called from parent
  export function addDamage(value: number, element: string, isCrit: boolean) {
    const newNumber = {
      id: damageId++,
      value,
      x: Math.random() * 80 + 10, // 10%-90% of container
      y: Math.random() * 80 + 10, // 10%-90% of container
      opacity: 0.8,
      element,
      isCrit,
    };

    damageNumbers.push(newNumber);

    setTimeout(() => {
      damageNumbers = damageNumbers.filter((n) => n.id !== newNumber.id);
      if (damageNumbers.length > 20) {
        damageNumbers.shift(); // remove oldest
      }
    }, 1000);

  }96
</script>

<div class="damage-numbers-container">
  {#each damageNumbers as number (number.id)}
    <div
      class="damage-number {number.id} {number.element} {number.isCrit
        ? 'crit-number'
        : ''}"
      style="left: {number.x}%; top: {number.y}%; opacity: {number.opacity}"
      in:fly={{ y: -30, duration: 600 }}
      out:fade={{ duration: 300 }}
    >
      -{formatNum(number.value, 1)}
    </div>
  {/each}
</div>

<style>
  .damage-numbers-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .damage-number {
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px black;
    transform: translate(-50%, -50%); /* Perfect centering */
    will-change: transform, opacity;
  }

  .pyro {
    color: orange;
  }
  .cryo {
    color: lightblue;
  }
  .electro {
    color: rgb(201, 27, 201);
  }
  .hydro {
    color: blue;
  }
  .anemo {
    color: lightgreen;
  }
  .geo {
    color: burlywood;
  }
  .dendro {
    color: green;
  }

  .crit-number {
    font-size: 2rem;
  }
</style>
