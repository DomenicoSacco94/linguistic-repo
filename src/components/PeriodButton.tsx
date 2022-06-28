import React from "react";
import {getSentencesFromPeriod} from "../utils/stringUtils";
import {SentenceButton} from "./SentenceButton";

interface WordButtonProps {
    period: string
}

export const PeriodButton : React.FC<WordButtonProps> = (props) => {
    const {period} = props
    const sentences: string[] = getSentencesFromPeriod(period)
    console.log(period)
    console.log(sentences)
    return <div>{sentences.map(sentence=> <SentenceButton sentence={sentence}/>)}</div>
}