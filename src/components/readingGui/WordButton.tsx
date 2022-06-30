import React from "react";
import {Button} from "antd";
import {useTranslation} from "../hooks/translationHook";

export const WordButton: React.FC<{
    word: string
}> = ({word}) => {

    const {translatedSentence, showTranslation, setShowTranslation} = useTranslation(word)

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }

    return <Button type="text" className="wordButton"
                   onClick={onClick}>{showTranslation ? translatedSentence.toString().replaceAll(","," ") : word + " "}</Button>

}