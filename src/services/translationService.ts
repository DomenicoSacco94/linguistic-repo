import { getMapFromCache, getTranslationUrl } from '../utils/translation';
import axios from 'axios';

export const translateString = async (toTranslate: string): Promise<string> => {
  const map: Map<string, string> = getMapFromCache();
  const cachedTranslation = map?.get(toTranslate);
  return cachedTranslation
    ? cachedTranslation
    : await axios
        .get(getTranslationUrl('de', 'en', toTranslate))
        .then((resp) => {
          const translationResults = resp.data[0];
          let translation = '';
          translationResults.forEach(
            (result: string) => (translation += result[0])
          );
          return translation;
        });
};
