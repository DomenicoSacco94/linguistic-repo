import React from "react";
import {DEFAULT_TEXT, ITEMS_PER_PAGE} from "../../utils/constants";
import {PaginatorIndex} from "./PaginatorIndex";


export const Paginator: React.FC<{ periodsLength: number }> = ({periodsLength}) => {
    return <>
        {periodsLength > ITEMS_PER_PAGE && (periodsLength > 0 ?
            <PaginatorIndex totalItems={periodsLength}/> : DEFAULT_TEXT)}
    </>
}
