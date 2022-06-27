import React, {ChangeEventHandler, Dispatch, SetStateAction} from 'react';
import TextArea from "antd/es/input/TextArea";

interface TextEditorProps {
    setToTranslate: Dispatch<SetStateAction<string>>,
}

export const TextEditor : React.FC<TextEditorProps> = (props: TextEditorProps) => {

    const {setToTranslate} = props

    const onChange : ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setToTranslate(event.target.value)
    }

    return <TextArea rows={4} onChange={onChange}/>
}