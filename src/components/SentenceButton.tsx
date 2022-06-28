import React, {useEffect, useState} from "react";
import {Tooltip} from "antd";
import {translateString} from "../services/translationService";
import {WordButton} from "./WordButton";
import {splitFormat} from "../utils/stringUtils";
import {RightOutlined} from "@ant-design/icons";

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
            translateString(sentence).then(data=> setTranslatedWord(data))
        }

    }, [showTranslation, sentence])

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }

    return <Tooltip placement="topLeft" trigger="click" title={translatedWord}>
        <RightOutlined className="paragraphButton" onClick={onClick}/>
        {words.map((word, index) => <WordButton key={index} word={word}/>)}
    </Tooltip>

}