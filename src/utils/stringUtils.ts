export const splitFormat = (string: string, separator: string | RegExp): string[] => {
  return string.length ? string.split(separator).filter((string) => string !== separator) : [''];
};

export const getSentencesFromPeriod = (period: string): string[] => {
  const sentences = splitFormat(period, '.').filter((period) => period !== '');
  const mergedSentences: string[] = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].length < 100 && i < sentences.length - 2) {
      mergedSentences.push(sentences[i] + sentences[i + 1]);
      i++;
    } else mergedSentences.push(sentences[i]);
  }
  return mergedSentences.filter((sentence) => sentence.length > 2);
};

export const getPeriodsFromText = (text: string): string[] => {
  return text.split(/(\r\n|\n|\r)/gm);
};
