export const enemies = [
    {
        name:"Hilichurl Fighter",
        url:"https://static.wikia.nocookie.net/gensin-impact/images/7/76/Enemy_Hilichurl_Fighter_Full_Artwork.png",
        baseMinHP:8,
        baseMaxHP:12,
        hpMultiplier:1.08,
        minGoldYield:4,
        maxGoldYield:10,
        goldMultiplier:1.04,
    },
    {
        name:"Hilichurl Shooter",
        url:"https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Enemy_Hilichurl_Shooter.png",
        baseMinHP:7,
        baseMaxHP:11,
        hpMultiplier:1.06,
        minGoldYield:3,
        maxGoldYield:9,
        goldMultiplier:1.02,
    },
]

export type Enemy  = {
    name: string;
    url: string;
    baseMinHP: number;
    baseMaxHP: number;
    hpMultiplier: number;
    minGoldYield: number;
    maxGoldYield: number;
    goldMultiplier: number;
}