import React from "react";
import {PaginatorButton} from "./PaginatorButton";
import {ITEMS_PER_PAGE} from "../../utils/constants";


export const PaginatorIndex : React.FC<{totalItems: number}> = ({totalItems}) => {
    const pageNumber = Math.round(totalItems/ITEMS_PER_PAGE)+1
    return <>
        {Array.from(Array(pageNumber),(x,i)=><PaginatorButton key={i} pageNumber={i}/>)}
   </>
}
