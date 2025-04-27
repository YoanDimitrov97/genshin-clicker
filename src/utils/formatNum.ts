export const formatNum = (num: number, toDecimal = 1): string => {
    return num % 1 === 0 ? num.toString() : num.toFixed(toDecimal).replace(/\.?0+$/, "");
}