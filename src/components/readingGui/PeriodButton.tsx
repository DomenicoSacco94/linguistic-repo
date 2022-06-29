import React from "react";
import {SentenceButton} from "./SentenceButton";
import {getSentencesFromPeriod} from "../../utils/stringUtils";

interface WordButtonProps {
    period: string
}

export const PeriodButton : React.FC<WordButtonProps> = (props) => {
    const {period} = props
    const sentences: string[] = getSentencesFromPeriod(period)
    return <div className="paragraphDiv">
        {sentences.map((sentence, index)=> <SentenceButton key={index} sentence={sentence}/>)}
    </div>
}