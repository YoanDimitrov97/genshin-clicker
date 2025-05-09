export function createUpgrade(name:string, baseDmg:number) {
  let owned = $state(0);
  let intervalId = $state(null);
  let activeEnemy = $state(null);

  function attack(enemy) {
    activeEnemy = enemy;
    intervalId = setInterval(() => {
      if (activeEnemy?.hp > 0) {
        activeEnemy.takeDamage(baseDmg * owned);
      }
    }, 1000);
  }

  function buy() {
    owned += 1;
    return attack; // Return the attack function
  }

  return {
    get name() {
      return name;
    },
    get owned() {
      return owned;
    },
    buy,
  };
}
