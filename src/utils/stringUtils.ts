
export const splitFormat = (string: string, separator: string) : string[] => {
    return string.split(separator).map(subString=> subString + separator).filter(string=>string!==separator)
}

export const getSentencesFromPeriod = (periods: string[]) : string[] => {
    const sentences: string[] = []
    periods.forEach(period=> period.length> 200 ? sentences.push(...splitFormat(period,',')) : sentences.push(period))
    return sentences
}

export const getPeriodsFromText = (text: string) : string[] => {
    const periods : string [] = splitFormat(text,'.')
    const mergedPeriods: string[] = []
    for(let i=0; i<periods.length; i++) {
        if(periods[i].length<100 && i<periods.length-1) {
            mergedPeriods.push(periods[i]+periods[i+1])
            i++
        }
        else mergedPeriods.push(periods[i])
    }
    return mergedPeriods
}