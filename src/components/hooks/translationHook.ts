import { useEffect, useState } from 'react';
import { translateString } from '../../services/translationService';
import { splitFormat } from '../../utils/stringUtils';

export const useTranslation = (sentence: string) => {
  const [translatedSentence, setTranslatedSentence] = useState<string[]>([]);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    if (showTranslation) {
      translateString(sentence).then((data) => {
        setTranslatedSentence(splitFormat(data, ' '));
      });
    }
  }, [showTranslation, sentence]);

  return { translatedSentence, showTranslation, setShowTranslation };
};
