import React, { ChangeEventHandler } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useStore } from '../store/translationStore';
import {
  DEFAULT_TEXT,
  READ_TRANSLATE_PATH,
  SAVED_TEXT_KEY,
} from '../utils/constants';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const TextEditor: React.FC = () => {
  const setToTranslate = useStore((state) => state.setTotranslate);
  const toTranslate = useStore((state) => state.toTranslate);

  const navigate = useNavigate();

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    localStorage.removeItem(SAVED_TEXT_KEY);
    setToTranslate(event.target.value);
  };

  return (
    <>
      <div className="inputTextAreaContainer">
        <TextArea
          rows={6}
          className="inputTextArea"
          placeholder={DEFAULT_TEXT}
          onChange={onChange}
          value={toTranslate || ''}
        />
      </div>
      <Button
        disabled={!toTranslate?.length}
        className="inputTextAreaButton"
        onClick={() => setToTranslate(null)}
      >
        Clear
      </Button>
      <Button
        disabled={!toTranslate?.length}
        className="inputTextAreaButton"
        onClick={() => navigate(`${READ_TRANSLATE_PATH}`)}
      >
        Read&Translate
      </Button>
    </>
  );
};
