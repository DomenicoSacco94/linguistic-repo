import React from "react";
import {PeriodButton} from "./PeriodButton";
import {getPeriodsFromText} from "../utils/stringUtils";
import {useStore} from "../store/translationStore";

export const ReadingGui : React.FC = () => {
    const text = useStore((state) => state.toTranslate)
    const periods: string[] = getPeriodsFromText(text)
    return <>
        {periods.map((periods, index) => periods.length > 0 ?
            <PeriodButton key={index} period={periods}/> : <br key={index}/>) }
        </>
}
