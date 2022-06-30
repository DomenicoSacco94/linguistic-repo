import React from "react";
import {WordButton} from "./WordButton";
import {RightOutlined} from "@ant-design/icons";
import {splitFormat} from "../../utils/stringUtils";
import {useTranslation} from "../hooks/translationHook";

export const SentenceButton: React.FC<{
    sentence: string
}> = ({sentence}) => {
    const words: string[] = splitFormat(sentence, ' ')

    const {translatedSentence, showTranslation, setShowTranslation} = useTranslation(sentence)

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }

    const displayedSentence = showTranslation ? translatedSentence : words
    return <span style={{color: showTranslation? 'red' : 'black' }}>
        <RightOutlined className="paragraphButton" onClick={onClick}/>
        {displayedSentence.map((word: string, index) => <WordButton style={{color: showTranslation? 'red' : 'black'}} disabled={showTranslation} key={index} word={word}/>)}
    </span>
}