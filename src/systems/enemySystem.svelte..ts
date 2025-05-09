import { enemies } from "../data/enemies";
import type { Enemy } from "../data/enemies";

// Reactive State
let currentEnemy = $state<Enemy>(enemies[0]);
let maxHP = $state(0);
let currentHP = $state(0);
let level = $state(1);
let enemiesDefeated = $state(0);

// Private Methods
function calculateEnemyHP(enemy: Enemy) {
  const hpMultiplier = Math.pow(enemy.hpMultiplier, level - 1);
  return Math.floor(
    (Math.random() * (enemy.baseMaxHP - enemy.baseMinHP) + enemy.baseMinHP) *
      hpMultiplier
  );
}

// Public Methods
export function spawnNewEnemy() {
  const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  currentEnemy = randomEnemy;
  maxHP = calculateEnemyHP(randomEnemy);
  currentHP = maxHP;
}

export function takeDamage(amount: number) {
  currentHP = Math.max(0, currentHP - amount);

  if (currentHP <= 0) {
    enemiesDefeated++;
    return true; // Enemy defeated
  }
  return false; // Enemy still alive
}

export function levelUp() {
  level++;
}

// State Getter (Reactive Interface)
export function getEnemyState() {
  return {
    // Readonly State
    get currentEnemy() {
      return currentEnemy;
    },
    get hp() {
      return currentHP;
    },
    get maxHP() {
      return maxHP;
    },
    get level() {
      return level;
    },
    get defeatedCount() {
      return enemiesDefeated;
    },

    // Methods
    spawnNewEnemy,
    takeDamage,
    levelUp,

    // For debugging
    __debug() {
      return { currentEnemy, maxHP, currentHP, level, enemiesDefeated };
    },
  };
}

// Initialize first enemy
spawnNewEnemy();
