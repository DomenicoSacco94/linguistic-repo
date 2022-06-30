import React from "react";
import {Button} from "antd";
import {useTranslation} from "../hooks/translationHook";

export const WordButton: React.FC<{
    word: string,
    disabled?: boolean,
    style: React.CSSProperties
}> = ({word, disabled, style}) => {

    const {translatedSentence, showTranslation, setShowTranslation} = useTranslation(word)

    const onClick = async () => {
        disabled && setShowTranslation(!showTranslation)
    }

    return <Button type="text" className="wordButton"
                   style={{backgroundColor: !disabled && showTranslation? 'yellow' : 'white', ...style}}
                   onClick={onClick}>{showTranslation ? translatedSentence.toString().replaceAll(","," ") : word + " "}</Button>

}