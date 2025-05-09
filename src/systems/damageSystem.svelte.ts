import { getEnemyState } from "./enemySystem.svelte.";

export function createDamageSystem() {
  return {
    dealDamage(amount: number) {
      const enemy = getEnemyState();
      const isDefeated = enemy.takeDamage(amount);

      if (isDefeated) {
        enemy.spawnNewEnemy();
        return true;
      }
      return false;
    },
  };
}

export const damageSystem = createDamageSystem();
