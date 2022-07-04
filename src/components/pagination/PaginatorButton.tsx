import React from "react";
import {Button} from "antd";
import {useStore} from "../../store/translationStore";

export const PaginatorButton: React.FC<{ pageNumber: number }> = ({pageNumber}) => {
    const currentPage = useStore((state) => state.currentPage)
    const setCurrentPage = useStore((state) => state.setCurrentPage)

    const onClick = async () => {
        setCurrentPage(pageNumber)
    }

    return <Button className="paginatorButton" onClick={onClick}
                   style={{backgroundColor: pageNumber === currentPage ? 'yellow' : 'white'}}>{pageNumber}</Button>
}
