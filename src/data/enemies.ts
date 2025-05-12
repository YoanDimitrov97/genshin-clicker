export const enemies = [
    {
        name:"Hilichurl Fighter",
        url:"https://static.wikia.nocookie.net/gensin-impact/images/7/76/Enemy_Hilichurl_Fighter_Full_Artwork.png",
        baseMinHP:6,
        baseMaxHP:9,
        hpMultiplier:1.06,
        minGoldYield:7,
        maxGoldYield:11,
        goldMultiplier:1.06,
    },
    {
        name:"Hilichurl Shooter",
        url:"https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Enemy_Hilichurl_Shooter.png",
        baseMinHP:5,
        baseMaxHP:8,
        hpMultiplier:1.06,
        minGoldYield:6,
        maxGoldYield:10,
        goldMultiplier:1.04,
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