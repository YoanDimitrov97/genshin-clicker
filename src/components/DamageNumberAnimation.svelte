<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { formatNum } from "../utils/formatNum";

  // Declare props with $props() and expose them
  let { containerWidth = 300, containerHeight = 300 } = $props<{
    containerWidth?: number;
    containerHeight?: number;
  }>();

  // Reactive state for damage numbers
  let damageNumbers = $state<{
    id: number;
    value: number;
    x: number;
    y: number;
    opacity: number;
  }[]>([]);

  // Method to add damage (exposed to parent)
  export function addDamage(value: number) {
    const newNumber = {
      id: Date.now(),
      value,
      x: Math.random() * 80 + 1, // 10%-90% of container
      y: Math.random() * 80 + 1,  // 10%-90% of container
      opacity: 0.9,
    };
    
    damageNumbers = [...damageNumbers, newNumber];
    
    setTimeout(() => {
      damageNumbers = damageNumbers.filter(n => n.id !== newNumber.id);
    }, 1000);
  }

  // Expose props for parent to update
  export { containerWidth, containerHeight };
</script>


<div class="damage-numbers-container">
  {#each damageNumbers as number (number.id)}
    <div
      class="damage-number"
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
</style>
