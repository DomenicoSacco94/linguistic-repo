import React from "react";
import {SentenceButton} from "./SentenceButton";
import {getSentencesFromPeriod} from "../../utils/stringUtils";

export const PeriodButton : React.FC<{
    period: string
}> = ({period}) => {
    const sentences: string[] = getSentencesFromPeriod(period)
    return <div className="paragraphDiv">
        {sentences.map((sentence, index)=> <SentenceButton key={index} sentence={sentence}/>)}
    </div>
}