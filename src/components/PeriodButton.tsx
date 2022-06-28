import React, {useEffect, useState} from "react";
import {Button, Tooltip} from "antd";
import {translateString} from "../services/translationService";
import {WordButton} from "./WordButton";
import {splitFormat} from "../utils/stringUtils";

interface WordButtonProps {
    period: string
}

export const PeriodButton : React.FC<WordButtonProps> = (props) => {
    const [translatedWord, setTranslatedWord] = useState('')
    const {period} = props
    const [showTranslation, setShowTranslation] = useState(false)

    useEffect( () => {
        if (showTranslation) {
            translateString(period).then(data=> setTranslatedWord(data))
        }

    }, [showTranslation,period])

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }

    const words: string[] = splitFormat(period,' ')

    return <div>
        <Tooltip placement="topLeft" title={translatedWord} trigger="click">
        <Button className="paragraphButton" onClick={onClick}>-</Button>
        </Tooltip>
        {words.map((word, index) => <WordButton key={index} word={word}/>)}
    </div>

}