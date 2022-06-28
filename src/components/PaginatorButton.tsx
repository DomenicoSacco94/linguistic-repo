import React from "react";
import {useStore} from "../store/translationStore";
import {Button} from "antd";

export const PaginatorButton : React.FC<{pageNumber: number}> = ({pageNumber}) => {
    const currentPage = useStore((state) => state.currentPage)
    const setCurrentPage = useStore((state) => state.setCurrentPage)

    const onClick = async () => {
        setCurrentPage(pageNumber)
    }

    return <Button onClick={onClick}
     style={{backgroundColor: pageNumber=== currentPage? 'yellow' : 'white' }}>{pageNumber}</Button>
}
