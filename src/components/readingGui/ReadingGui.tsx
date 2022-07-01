import React, {useEffect} from "react";
import {useStore} from "../../store/translationStore";
import {getPeriodsFromText} from "../../utils/stringUtils";
import {STORAGE_ITEM_KEY} from "../../utils/constants";
import {ReadingDisplay} from "./ReadingDisplay";
import {Paginator} from "../pagination/Paginator";


export const ReadingGui: React.FC = () => {
    const text = useStore((state) => state.toTranslate)
    const setCurrentPage = useStore((state) => state.setCurrentPage)
    const localstorageFile = localStorage.getItem(STORAGE_ITEM_KEY)
    const textToRetrieve = text ? text : localstorageFile!
    const periods: string[] = getPeriodsFromText(textToRetrieve)

    useEffect(() => {
        setCurrentPage(0)
    }, [textToRetrieve, setCurrentPage])

    return <div className="readingGuiContainer">
        <ReadingDisplay periods={periods}/>
        <Paginator periodsLength={periods.length} textLength={textToRetrieve.length}/>
    </div>
}
