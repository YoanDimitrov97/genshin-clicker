<script lang="ts" module>
  let level = $state(1);
  let gold = $state(0);
  let dmgPerClick = $state(1);
  let dmgPerSecond = $state(0);
  let characterStats:{critRate:number, critDmg:number} = $state({critRate:10, critDmg:100})

  export const stats = {
    get level() { return level },
    get gold() { return gold },
    get dmgPerClick() { return dmgPerClick },
    get dmgPerSecond() { return dmgPerSecond },
    get characterStats() { return characterStats },
    levelUp: () => level++,
    gainDPC:(amount:number) => dmgPerClick += amount,
    gainDPS:(amount:number) => dmgPerSecond += amount,
    gainGold: (amount: number) => gold += amount,
    loseGold: (amount: number) => gold -= amount,
    critMultiplyer:() => 1 + (characterStats.critDmg / 100)
  };
</script>

<!-- Empty component template
<svelte:options /> -->