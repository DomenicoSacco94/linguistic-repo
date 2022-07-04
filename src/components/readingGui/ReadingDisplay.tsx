import React from "react";
import {PeriodButton} from "./wordProcessing/PeriodButton";

export const ReadingDisplay: React.FC<{ periods: string[] }> = ({periods}) => {

    return <>
        {periods.map((periods, index) => <PeriodButton key={index} period={periods}/>)}
    </>
}
