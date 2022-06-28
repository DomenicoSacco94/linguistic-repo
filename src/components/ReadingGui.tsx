import React from "react";
import {PeriodButton} from "./PeriodButton";
import {getPeriodsFromText} from "../utils/stringUtils";
import {useStore} from "../store/translationStore";
import {PaginatorIndex} from "./PaginatorIndex";
import {ITEMS_PER_PAGE} from "../utils/constants";

export const ReadingGui : React.FC = () => {
    const text = useStore((state) => state.toTranslate)
    const periods: string[] = getPeriodsFromText(text)
    const currentPage = useStore((state) => state.currentPage)
    const startPage = currentPage*ITEMS_PER_PAGE
    return <>
        {periods.slice(startPage, startPage+ITEMS_PER_PAGE).map((periods, index) => periods.length > 0?
            <PeriodButton key={index} period={periods}/> : index>0 && <br key={index}/>) }
        <PaginatorIndex totalItems={periods.length}/>
        </>
}
