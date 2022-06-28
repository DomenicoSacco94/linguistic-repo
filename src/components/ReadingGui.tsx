import React from "react";
import {PeriodButton} from "./PeriodButton";
import {getPeriodsFromText} from "../utils/stringUtils";

interface ReadingGuiProps {
    text: string
}

export const ReadingGui : React.FC<ReadingGuiProps> = (props: ReadingGuiProps) => {
    const {text} = props
    const periods: string[] = getPeriodsFromText(text)
    return <>
        {periods.map((periods, index) => periods.length > 0 ?
            <PeriodButton key={index} period={periods}/> : <br/>) }
        </>
}
