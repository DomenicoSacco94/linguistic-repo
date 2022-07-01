import React, {ChangeEventHandler} from 'react';
import TextArea from "antd/es/input/TextArea";
import {useStore} from "../store/translationStore";
import {DEFAULT_TEXT, STORAGE_ITEM_KEY} from "../utils/constants";


export const TextEditor: React.FC = () => {

    const setToTranslate = useStore((state) => state.setTotranslate);
    const toTranslate = useStore((state) => state.toTranslate);

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        if (localStorage.getItem(STORAGE_ITEM_KEY)) {
            localStorage.setItem(STORAGE_ITEM_KEY, '')
        }
        setToTranslate(event.target.value)
    }

    return <div className="inputTextAreaContainer">
        <TextArea rows={6} className="inputTextArea" placeholder={DEFAULT_TEXT} onChange={onChange}
                  value={toTranslate || ''}/>
    </div>
}