<script lang="ts" module>
    import { weapons } from "../data/weapons";
    import { formatNum } from "../utils/formatNum";
    import { getRandomNum } from "../utils/getRandomNum";
    import { stats } from "./stats.system.svelte";
    import type { Weapon } from "../data/weapons";

    let currentGachaResult: Weapon[] = $state([]);

    function determineRollRarity() {
        const RARITY_THRESHOLDS = {
            LEGENDARY: 0.5, //0.5% chance (99.5-100%)
            EPIC: 2.5, // 2.5% chance (97-99.5%)
            RARE: 10, // 10% chance (87-97%)
            UNCOMMON: 25, // 25% chance (62-87%)
            COMMON: 62, // 62% chance
        };

        const roll = getRandomNum(0, 100, false); // Get number between 0-100

        return "COMMON";
        if (roll < RARITY_THRESHOLDS.LEGENDARY) return "LEGENDARY";
        if (roll < RARITY_THRESHOLDS.EPIC) return "EPIC";
        if (roll < RARITY_THRESHOLDS.RARE) return "RARE";
        if (roll < RARITY_THRESHOLDS.UNCOMMON) return "UNCOMMON";
    }

    function generateUniqueId(prefix = "weapon") {
        return `${prefix}_${performance.now()}_${crypto.randomUUID()}`;
        // or for browsers without crypto.randomUUID():
        // return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    const rollGacha = (xTimes: number) => {
        //roll x amount of times
        let allRolls = [];
        for (let i = 0; i < xTimes; i++) {
            //decide on rarity
            const rarity = determineRollRarity();

            let weaponLength = weapons[rarity].length - 1;

            let randWeaponIndex = getRandomNum(0, weaponLength);
            let randWeapon: Weapon = weapons[rarity][randWeaponIndex];
            
            let randAtk = getRandomNum(
                randWeapon.minAtk,
                randWeapon.maxAtk,
                false,
            );

            const newWeapon = {
                ...randWeapon,
                id:generateUniqueId(),
                atk:parseFloat(formatNum(randAtk, 2)),
            }

            allRolls.push(newWeapon);
        }
        currentGachaResult = allRolls;
    };

    export const gacha = {
        get gachaRolls() {
            return currentGachaResult;
        },
        rollGacha: (num: number) => rollGacha(num),
    };
</script>
