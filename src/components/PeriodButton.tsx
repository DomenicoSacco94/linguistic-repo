import React, {useEffect, useState} from "react";
import {Button, Tooltip} from "antd";
import {translateString} from "../services/translationService";
import {WordButton} from "./WordButton";

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

    const words: string[] = period.split(' ').map(word=> word + ' ')

    return <div>
        <Tooltip placement="topLeft" title={translatedWord} trigger="click">
        <Button className="paragraphButton" onClick={onClick}>-</Button>
        </Tooltip>
        {words.map(word => <WordButton word={word}/>)}
    </div>

}