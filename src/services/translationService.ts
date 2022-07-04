import { getTranslationUrl } from '../utils/translationUrl';
import axios from 'axios';

export const translateString = async (toTranslate: string): Promise<string> => {
  return await axios.get(getTranslationUrl('de', 'en', toTranslate)).then((resp) => {
    const translationResults = resp.data[0];
    let translation = '';
    translationResults.forEach((result: string) => (translation += result[0]));
    return translation;
  });
};
