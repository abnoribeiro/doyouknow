import React from 'react';
import {
    Clickable,
    Container,
    ContainerText,
    Text,
    Title
} from './style';

interface Props {
    item:item,
    setQuestionsNow:any
    setModalVisible:any
}

interface historic {
    category:string
    checked_answer:string,
    correct_answer:string,
    difficulty:string,
    isCorrect:boolean,
    question:string,
}

interface item {
    userName:string
    dateTest:string
    historic: [historic]
}

const CardListHistoric: React.FC<Props> =({item,setQuestionsNow,setModalVisible})=>{
    return(
        <Clickable
            onPress={()=>{
                setQuestionsNow(item)
                setModalVisible(true)
            }}
        >
            <Container>
                <ContainerText>
                    <Text>{"User"}</Text>
                    <Title>{item.userName}</Title>
                </ContainerText>
                <ContainerText>
                    <Text>{"Score"}</Text>
                    <Title>
                        {
                            (item.historic.filter((e)=>e.isCorrect == true))?.length
                            +"/"+
                            (item.historic.filter((e)=>e.isCorrect == false))?.length
                        }
                    </Title>
                </ContainerText>
                <ContainerText>
                    <Text>{"Date"}</Text>
                    <Title>{item.dateTest.slice(0,10) +" "+ item.dateTest.slice(11,19)}</Title>
                </ContainerText>
            </Container>
        </Clickable>
    );
};

export default CardListHistoric;