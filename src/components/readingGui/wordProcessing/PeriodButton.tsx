import React from "react";
import {SentenceButton} from "./SentenceButton";
import {getSentencesFromPeriod} from "../../../utils/stringUtils";
import {ITEMS_PER_PAGE} from "../../../utils/constants";
import {useStore} from "../../../store/translationStore";
import {Paginator} from "../../pagination/Paginator";

export const PeriodButton: React.FC<{
    period: string
}> = ({period}) => {
    const currentPage = useStore((state) => state.currentPage)
    const startPage = currentPage * ITEMS_PER_PAGE
    const sentences: string[] = getSentencesFromPeriod(period)
    return <>
        <div className="paragraphDiv">
        {sentences.slice(startPage, startPage + ITEMS_PER_PAGE).map((sentence, index) => <SentenceButton key={index} sentence={sentence}/>)}
    </div>
        <Paginator periodsLength={sentences.length}/>
    </>

}