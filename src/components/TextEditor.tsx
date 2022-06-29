import React, {ChangeEventHandler} from 'react';
import TextArea from "antd/es/input/TextArea";
import {useStore} from "../store/translationStore";
import {DEFAULT_TEXT} from "../utils/constants";


export const TextEditor : React.FC = () => {

    const setToTranslate = useStore((state) => state.setTotranslate);
    const toTranslate = useStore((state) => state.toTranslate);

    const onChange : ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        if(localStorage.getItem('text-to-translate')) {
            localStorage.setItem('text-to-translate', '')
        }
        setToTranslate(event.target.value)
    }

    return <div className="inputTextAreaContainer">
        <TextArea rows={6} className="inputTextArea" placeholder={DEFAULT_TEXT} onChange={onChange} value={toTranslate || ''}/>
        </div>
}