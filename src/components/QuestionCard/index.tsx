import React, { useState } from "react";
import { RadioButton } from 'react-native-paper';

import { 
    Container,
    Category,
    Question,
    Answers,
    Btn,
    TextBtn,
    ContainerAnswers,
    TextAnswers 
} from "./style";

interface item {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}
interface Props {
    item:item
    setStateWin:any
    setStateWrong:any
    setStateAnswered:any
    stateWin:any
    stateWrong:any
    stateAnswered:any
    answeredResponse:any
    setHistoric:any,
    historic:any
}

export const QuestionCard:React.FC<Props> =({
    item,
    setStateAnswered,
    setStateWin,
    setStateWrong,
    stateAnswered,
    stateWin,
    stateWrong,
    setHistoric,
    historic
    }
)=>{
    const [checked, setChecked] = useState('');
    const [disabled, setDisabled] = useState<boolean>();
    
    let correct_answer = item.correct_answer;
    let alternatives = item.incorrect_answers.map((e)=>e)
    
    alternatives.push(item.correct_answer)
    alternatives.sort()

    return(
        <Container>
            <Category>{item.category}</Category>
            <Question>{item.question}</Question>
            <Answers
                data={alternatives}
                renderItem={({item}:any) => 
                    <ContainerAnswers>
                        <RadioButton 
                            value={item}
                            status={ checked === item ? 'checked' : 'unchecked' }
                            onPress={() =>setChecked(item)}
                            disabled={disabled}
                            color={"#04BF8A"}
                        >
                        </RadioButton>
                        <TextAnswers> 
                            {item}
                        </TextAnswers>
                    </ContainerAnswers>
                }
            />
            <Btn
                
                onPress={()=>{
                    setDisabled(true)
                    checked == correct_answer ? setStateWin(stateWin +1):setStateWrong(stateWrong +1)
                    setStateAnswered(stateAnswered + 1)
                    setHistoric(
                    [
                        ...historic,
                        {
                            category: item.category,
                            difficulty: item.difficulty,
                            question: item.question,
                            correct_answer: correct_answer,
                            checked_answer: checked,
                            isCorrect: checked == correct_answer
                        }
                    ])
                }}
                disabled={disabled}
            >
                <TextBtn>{"Confirmar!"}</TextBtn>
            </Btn>
            </Container>
    )
}