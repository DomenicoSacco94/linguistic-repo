import React, { useEffect } from 'react';
import { useStore } from '../../store/translationStore';
import {
  getPeriodsFromText,
  getSentencesFromPeriod,
} from '../../utils/stringUtils';
import { SAVED_TEXT_KEY } from '../../utils/constants';
import { ReadingDisplay } from './ReadingDisplay';
import { Paginator } from '../pagination/Paginator';
import { createTranslationMap } from '../../utils/translation';
import { notification } from 'antd';

export const ReadingGui: React.FC = () => {
  const text = useStore((state) => state.toTranslate);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const localstorageFile = localStorage.getItem(SAVED_TEXT_KEY);
  const textToRetrieve = text ? text : localstorageFile!;
  const periods: string[] = getPeriodsFromText(textToRetrieve);

  useEffect(() => {
    setCurrentPage(0);
    if (periods.length) {
      let toMap: string[] = [];
      (periods as string[]).forEach((period) => {
        toMap = toMap.concat(getSentencesFromPeriod(period));
      });
      createTranslationMap(toMap)
        .then(() => {
          notification.destroy();
          notification.open({
            message: 'Translations cached!',
          });
        })
        .catch(console.error);
    }
  }, [textToRetrieve]);

  return (
    <div className="readingGuiContainer">
      <ReadingDisplay periods={periods} />
      <Paginator
        periodsLength={periods!.length}
        textLength={textToRetrieve.length}
      />
    </div>
  );
};
