import React, {ChangeEventHandler} from 'react';
import TextArea from "antd/es/input/TextArea";
import {useStore} from "../store/translationStore";


export const TextEditor : React.FC = () => {

    const setToTranslate = useStore((state) => state.setTotranslate);
    const toTranslate = useStore((state) => state.toTranslate);

    const onChange : ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setToTranslate(event.target.value)
    }

    return <TextArea rows={6} placeholder="Please enter your text to translate." onChange={onChange} value={toTranslate}/>
}