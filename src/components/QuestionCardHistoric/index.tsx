import React, { useEffect } from "react";

import { 
    Container,
    Category,
    Question,
    Text
} from "./style";

interface item {
    category:string
    checked_answer:string,
    correct_answer:string,
    difficulty:string,
    isCorrect:string,
    question:string,
}
interface Props {
    item:item
}

export const QuestionCardHistoric:React.FC<Props> =({item})=>{

    return(
        <Container>
            <Category>{"Category: "+item.category[0].toUpperCase() + item.category.substr(1)}</Category>
            <Category>{"Level: "+item.difficulty[0].toUpperCase() + item.difficulty.substr(1)}</Category>
            <Question>{"Question: "+item.question[0].toUpperCase() + item.question.substr(1)}</Question>
            <Text>{"Checked answer: "+item.checked_answer[0].toUpperCase() + item.checked_answer.substr(1)}</Text>
            <Text>{"Correct answer: "+item.correct_answer[0].toUpperCase() + item.correct_answer.substr(1)}</Text>
            <Text>{"Is correct? "+ item.isCorrect.toString()[0].toUpperCase() + item.isCorrect.toString().substr(1)}</Text>
        </Container>
    )
}
