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

const saveMapToCache = (cachedTranslationsMap: Map<string, string>) =>
  localStorage.setItem(
    SAVED_TRANSLATIONS_KEY,
    JSON.stringify(Array.from(cachedTranslationsMap.entries()))
  );

export const createTranslationMap = async (sentences: string[]) => {
  const cachedTranslationsMap = localStorage.getItem(SAVED_TRANSLATIONS_KEY)
    ? getMapFromCache()
    : new Map<string, string>();

  for (const sentence of sentences) {
    if (!cachedTranslationsMap.get(sentence)) {
      const translation = await translateString(sentence);
      setTimeout(() => cachedTranslationsMap.set(sentence, translation), 100);
    }
  }
  saveIntoMap(cachedTranslationsMap);
};

const saveIntoMap = (cachedTranslationsMap: Map<string, string>) => {
  if (!localStorage.getItem(SAVED_TRANSLATIONS_KEY)) {
    saveMapToCache(cachedTranslationsMap);
  } else {
    const cachedTranslationsMap = getMapFromCache();
    cachedTranslationsMap.forEach((k, v) => {
      if (!cachedTranslationsMap.get(k)) {
        cachedTranslationsMap.set(k, v);
      }
    });
    saveMapToCache(cachedTranslationsMap);
  }
};

export const saveTranslations = async (sentencesToSave: string[]) =>
  await createTranslationMap(sentencesToSave);
