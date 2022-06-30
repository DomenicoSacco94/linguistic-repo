import React, {useEffect, useState} from "react";
import {Button} from "antd";
import {translateString} from "../../services/translationService";


interface WordButtonProps {
    word: string
}

export const WordButton : React.FC<WordButtonProps> = (props) => {
    const [translatedWord, setTranslatedWord] = useState('')
    const {word} = props
    const [showTranslation, setShowTranslation] = useState(false)

    useEffect( () => {
        if (showTranslation) {
            translateString(word).then(data=> setTranslatedWord(data))
        }

    }, [showTranslation,word])

    const onClick = async () => {
        setShowTranslation(!showTranslation)
    }

    return <Button type="text" className="wordButton" onClick={onClick}>{showTranslation? translatedWord : word + " "}</Button>

}