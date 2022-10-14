import React, { useEffect } from 'react';
import { useStore } from '../../store/translationStore';
import { getPeriodsFromText } from '../../utils/stringUtils';
import { SAVED_TEXT_KEY } from '../../utils/constants';
import { ReadingDisplay } from './ReadingDisplay';
import { Paginator } from '../pagination/Paginator';

export const ReadingGui: React.FC = () => {
  const text = useStore((state) => state.toTranslate);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const localstorageFile = localStorage.getItem(SAVED_TEXT_KEY);
  const textToRetrieve = text ? text : localstorageFile!;
  const periods: '' | string[] =
    textToRetrieve && getPeriodsFromText(textToRetrieve);

  useEffect(() => {
    setCurrentPage(0);
  }, [textToRetrieve, setCurrentPage]);

  return periods ? (
    <div className="readingGuiContainer">
      <ReadingDisplay periods={periods!} />
      <Paginator
        periodsLength={periods!.length}
        textLength={textToRetrieve.length}
      />
    </div>
  ) : (
    <div> Please upload something to start reading </div>
  );
};
