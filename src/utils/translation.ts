import { translateString } from '../services/translationService';
import { SAVED_TRANSLATIONS_KEY } from './constants';

export const getTranslationUrl = (
  sourceLanguage: string,
  targetLanguage: string,
  sourceText: string
): string =>
  'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
  sourceLanguage +
  '&tl=' +
  targetLanguage +
  '&dt=t&q=' +
  encodeURI(sourceText);

export const getMapFromCache = (): Map<string, string> =>
  new Map<string, string>(
    JSON.parse(localStorage.getItem(SAVED_TRANSLATIONS_KEY)!)
  );

export const createTranslationMap = async (sentences: string[]) => {
  const cachedTranslationsMap = localStorage.getItem(SAVED_TRANSLATIONS_KEY)
    ? getMapFromCache()
    : new Map<string, string>();

  for (const sentence of sentences) {
    if (!cachedTranslationsMap.get(sentence)) {
      const translation = await translateString(sentence);
      setTimeout(() => cachedTranslationsMap.set(sentence, translation), 200);
    }
  }
  saveMapToCache(cachedTranslationsMap);
};

const saveMapToCache = (cachedTranslationsMap: Map<string, string>) => {
  localStorage.setItem(
    SAVED_TRANSLATIONS_KEY,
    JSON.stringify(Array.from(cachedTranslationsMap.entries()))
  );
};
