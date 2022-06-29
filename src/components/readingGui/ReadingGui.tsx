import React from "react";
import {PeriodButton} from "./PeriodButton";
import {useStore} from "../../store/translationStore";
import {getPeriodsFromText} from "../../utils/stringUtils";
import {DEFAULT_TEXT, ITEMS_PER_PAGE} from "../../utils/constants";
import {PaginatorIndex} from "../pagination/PaginatorIndex";


export const ReadingGui : React.FC = () => {
    const text = useStore((state) => state.toTranslate)
    const localstorageFile = localStorage.getItem('text-to-translate')
    const textToRetrieve = text ? text : localstorageFile!

    const periods: string[] = getPeriodsFromText(textToRetrieve)
    const currentPage = useStore((state) => state.currentPage)
    const startPage = currentPage*ITEMS_PER_PAGE

    return <div className="readingGuiContainer">
        {periods.slice(startPage, startPage+ITEMS_PER_PAGE).map((periods, index) => periods.length > 0?
            <PeriodButton key={index} period={periods}/> : index>0 && index<periods.length && <br key={index}/>)}
        {periods.length > ITEMS_PER_PAGE && (textToRetrieve.length > 0 ? <PaginatorIndex totalItems={periods.length}/> : DEFAULT_TEXT)}
        </div>
}
