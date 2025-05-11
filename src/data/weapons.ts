export const weapons =
{
    COMMON: [
        {
            name: 'Dull Blade',
            rarity: 'common',
            minAtk: 0.01,
            maxAtk: 2.2,
            url: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Weapon_Dull_Blade.png',
        },
        {
            name: 'Silver Sword',
            rarity: 'common',
            minAtk: 0.2,
            maxAtk: 2,
            url: 'https://static.wikia.nocookie.net/gensin-impact/images/3/32/Weapon_Silver_Sword.png'
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

export type Weapon  = {
    id ?: string | number;
    name: string;
    rarity: string;
    minAtk: number;
    maxAtk: number;
    url: string;
    atk?:number;
}