import React from "react";
import {PeriodButton} from "./PeriodButton";
import {getPeriodsFromText, getSentencesFromPeriod} from "../utils/stringManipulation";

interface ReadingGuiProps {
    text: string
}

export const ReadingGui : React.FC<ReadingGuiProps> = (props: ReadingGuiProps) => {
    const {text} = props
    const periods: string[] = getPeriodsFromText(text)
    const sentences: string[] = getSentencesFromPeriod(periods)
    return <>{sentences.map((sentences, index) => <PeriodButton key={index} period={sentences}/>)}</>
}
