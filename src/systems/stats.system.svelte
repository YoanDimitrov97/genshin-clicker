<script lang="ts" module>
  let level = $state(1);
  let gold = $state(0);
  let dmgPerClick = $state(1);
  let dmgPerSecond = $state(0);
  let characterStats: {
    critRate: number;
    critDmg: number;
    pyroDps: number;
    hydroDps: number;
    cryoDps: number;
    electroDps: number;
    anemoDps: number;
    geoDps: number;
    dendroDps: number;
  } = $state({
    critRate: 0,
    critDmg: 10,
    pyroDps: 0,
    hydroDps: 0,
    cryoDps: 0,
    electroDps: 0,
    anemoDps: 0,
    geoDps: 0,
    dendroDps: 0,
  });

  const gainDamagePerSecond = (amount: number, element: string) => {
    switch (element) {
      case "Pyro":
        characterStats.pyroDps += amount;
        break;
      case "Hydro":
        characterStats.hydroDps += amount;
        break;
      case "Cryo":
        characterStats.cryoDps += amount;
        break;
      case "Electro":
        characterStats.electroDps += amount;
        break;
      case "Anemo":
        characterStats.anemoDps += amount;
        break;
      case "Geo":
        characterStats.geoDps += amount;
        break;
      case "Dendro":
        characterStats.dendroDps += amount;
        break;
      default:
        break;
    }
  };

  export const stats = {
    get level() {
      return level;
    },
    get gold() {
      return gold;
    },
    get dmgPerClick() {
      return dmgPerClick;
    },
    get dmgPerSecond() {
      return characterStats.pyroDps +
    characterStats.hydroDps +
    characterStats.cryoDps +
    characterStats.electroDps +
    characterStats.anemoDps +
    characterStats.geoDps +
    characterStats.dendroDps;;
    },
    get characterStats() {
      return characterStats;
    },
    levelUp: () => level++,
    gainDPC: (amount: number) => (dmgPerClick += amount),
    gainDPS: (amount: number, element: string) => gainDamagePerSecond(amount, element),
    gainCritRate: (amount:number) => characterStats.critRate += amount,
    gainGold: (amount: number) => (gold += amount),
    loseGold: (amount: number) => (gold -= amount),
    critMultiplyer: () => 1 + characterStats.critDmg / 100,
  };
</script>

<!-- Empty component template
<svelte:options /> -->
