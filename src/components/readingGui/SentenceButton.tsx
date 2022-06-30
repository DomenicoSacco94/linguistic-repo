import React from "react";
import {WordButton} from "./WordButton";
import {RightOutlined} from "@ant-design/icons";
import {splitFormat} from "../../utils/stringUtils";
import {Button} from "antd";
import {useTranslation} from "../hooks/translationHook";

export const SentenceButton: React.FC<{
    sentence: string
}> = ({sentence}) => {
    const words: string[] = splitFormat(sentence, ' ')

    const {translatedSentence, showTranslation, setShowTranslation} = useTranslation(sentence)

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }
    //TODO create fragmented component for words
    //TODO set different background for translated words and sentences
    return <>
        <RightOutlined className="paragraphButton" onClick={onClick}/>

        {showTranslation ? translatedSentence.map((word: string, index) => <Button type="text" className="wordButton"
                                                                                   key={index}>{word}</Button>) : words.map((word, index) =>
            <WordButton key={index} word={word}/>)}
    </>
}