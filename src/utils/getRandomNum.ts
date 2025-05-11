export const getRandomNum = (minNum: number, maxNum: number, wholeNum: boolean = true) => {
    if (wholeNum) {
        if(minNum > 0)
            return Math.round(Math.random() * (maxNum - minNum) + minNum)
        else 
            return Math.round(Math.random() * maxNum)
    } else {
        return Math.random() * (maxNum - minNum) + minNum
    }
}
