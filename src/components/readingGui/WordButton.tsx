import React, {useEffect, useState} from "react";
import {Button} from "antd";
import {translateString} from "../../services/translationService";

export const WordButton : React.FC<{
    word: string
}> = ({word}) => {
    const [translatedWord, setTranslatedWord] = useState('')
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