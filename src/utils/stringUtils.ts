
export const splitFormat = (string: string, separator: string | RegExp) : string[] => {
    return string.length? string.split(separator).map(string=> string+separator).filter(string=>string!==separator) : ['']
}

export const getSentencesFromPeriod = (period: string) : string[] => {
    return splitFormat(period,'.').filter(period=> period!=='')
}

export const getPeriodsFromText = (text: string) : string[] => {
    return text.split('\n')
}