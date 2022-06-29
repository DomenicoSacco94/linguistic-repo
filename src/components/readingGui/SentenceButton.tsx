import React, {useEffect, useState} from "react";
import {WordButton} from "./WordButton";
import {RightOutlined} from "@ant-design/icons";
import {splitFormat} from "../../utils/stringUtils";
import {translateString} from "../../services/translationService";

interface SentenceButtonProps {
    sentence: string
}

export const SentenceButton : React.FC<SentenceButtonProps> = (props) => {
    const [translatedWord, setTranslatedWord] = useState('')
    const {sentence} = props
    const [showTranslation, setShowTranslation] = useState(false)
    const words: string[] = splitFormat(sentence,' ')

    useEffect( () => {
        if (showTranslation) {
            translateString(sentence).then(data=> {
                setTranslatedWord(data)
            })
        }

    }, [showTranslation, sentence])

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }

    return <>
        <RightOutlined className="paragraphButton" onClick={onClick}/>
    {showTranslation? translatedWord : words.map((word, index) => <WordButton key={index} word={word}/>)}
        </>
}