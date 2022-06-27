import React from "react";
import {WordButton} from "./WordButton";

interface ReadingGuiProps {
    text: string
}

export const ReadingGui : React.FC<ReadingGuiProps> = (props: ReadingGuiProps) => {
    const {text} = props
    const words: string[] = text.split(' ').map(word=> word + ' ')

    return <>{words.map((word, index) => <WordButton key={index} word={word} />)}</>
}