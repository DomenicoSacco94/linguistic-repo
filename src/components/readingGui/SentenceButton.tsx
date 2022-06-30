import React, {useEffect, useState} from "react";
import {WordButton} from "./WordButton";
import {RightOutlined} from "@ant-design/icons";
import {splitFormat} from "../../utils/stringUtils";
import {translateString} from "../../services/translationService";
import {Button} from "antd";

interface SentenceButtonProps {
    sentence: string
}

export const SentenceButton : React.FC<SentenceButtonProps> = (props) => {
    const [translatedSentence, setTranslatedSentence] = useState<string[]>([])
    const {sentence} = props
    const [showTranslation, setShowTranslation] = useState(false)
    const words: string[] = splitFormat(sentence,' ')

    useEffect( () => {
        if (showTranslation) {
            translateString(sentence).then(data=> {
                setTranslatedSentence(splitFormat(data,' '))
            })
        }

    }, [showTranslation, sentence])

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }
    //TODO create fragmented component for words
    //TODO set different background for translated words and sentences
    return <>
        <RightOutlined className="paragraphButton" onClick={onClick}/>

    {showTranslation? translatedSentence.map((word: string,index)=> <Button type="text" className="wordButton" key={index}>{word}</Button>) : words.map((word, index) => <WordButton key={index} word={word}/>)}
        </>
}