import React from "react";
import {PeriodButton} from "./PeriodButton";
import {useStore} from "../../store/translationStore";
import {getPeriodsFromText} from "../../utils/stringUtils";
import {DEFAULT_TEXT, ITEMS_PER_PAGE} from "../../utils/constants";
import {PaginatorIndex} from "../pagination/PaginatorIndex";


export const ReadingGui : React.FC = () => {
    const text = useStore((state) => state.toTranslate)
    const periods: string[] = getPeriodsFromText(text)
    const currentPage = useStore((state) => state.currentPage)
    const startPage = currentPage*ITEMS_PER_PAGE
    console.log(periods.length)
    return <div className="readingGuiContainer">
        {periods.slice(startPage, startPage+ITEMS_PER_PAGE).map((periods, index) => periods.length > 0?
            <PeriodButton key={index} period={periods}/> : index>0 && index<periods.length && <br key={index}/>)}
        {periods.length > ITEMS_PER_PAGE && (text.length > 0 ? <PaginatorIndex totalItems={periods.length}/> : DEFAULT_TEXT)}
        </div>
}
