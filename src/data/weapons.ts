import { stats } from "../systems/stats.system.svelte";
import { ItemSlots } from "../types/itemSlots";

export const weapons =
{
    COMMON: [
        {
            name: 'Dull Blade',
            rarity: 'COMMON',
            itemSlot:ItemSlots.WEAPON,
            url: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Weapon_Dull_Blade.png',
            effectFlavorText:"On Equip: Gain +2 ATK",
            effectBonus:()=> {stats.gainDPC(2)}
        },
        {
            name: 'Silver Sword',
            rarity: 'COMMON',
            minAtk: 0.2,
            maxAtk: 2,
            url: 'https://static.wikia.nocookie.net/gensin-impact/images/3/32/Weapon_Silver_Sword.png',
            effectFlavorText:"On Equip: Gain +5% CRIT RATE",
            effectBonus:()=> {stats.gainCritRate(5)}
        }
    ],

    UNCOMMON: [{

    }],
    RARE: [{

    }],
    EPIC: [{

    }],
    LEGENDARY: [{

    }],
}

// export type Weapon  = {
//     id ?: string | number;
//     name: string;
//     rarity: string;
//     minAtk: number;
//     maxAtk: number;
//     url: string;
//     atk?:number;
// }