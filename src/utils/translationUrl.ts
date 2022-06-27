export const getTranslationUrl = (sourceLanguage: string, targetLanguage: string, sourceText: string) : string => 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
    sourceLanguage +
    '&tl=' +
    targetLanguage +
    '&dt=t&q=' +
    encodeURI(sourceText);