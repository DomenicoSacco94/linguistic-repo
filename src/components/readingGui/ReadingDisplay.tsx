import React from "react";
import {PeriodButton} from "./PeriodButton";
import {ITEMS_PER_PAGE} from "../../utils/constants";
import {useStore} from "../../store/translationStore";


export const ReadingDisplay: React.FC<{periods: string[]}> = ({periods}) => {
    const currentPage = useStore((state) => state.currentPage)
    const startPage = currentPage * ITEMS_PER_PAGE
    const showLineBreak = (index: number) => index > 0 && index < periods.length

    return <>
        {periods.slice(startPage, startPage + ITEMS_PER_PAGE).map((periods, index) => periods.length > 0 ?
            <PeriodButton key={index} period={periods}/> : showLineBreak(index) && <br key={index}/>)}
  </>
}
