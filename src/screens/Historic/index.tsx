import React, {useState,useEffect,useContext, createContext} from 'react';
import { Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Modal,
    ModalView,
    QuestionsContainer,
    Container,
    ContainerResult,
    Header,
    Text,
    Name,
    Button,
    ContainerBody,
    SafeViewBody
} from './style';

import AppLoading from 'expo-app-loading';
import { FlatList } from 'react-native';
import { QuestionCardHistoric } from '../../components/QuestionCardHistoric';
import { TextButton } from '../../components/BtnInit/style';
import CardListHistoric from '../../components/CardListHistoric';

interface Props{
    navigation:any
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

const Historic: React.FC<Props> =({navigation})=>{
    const [historic, setHistoric] = useState<[item]>();
    const [userSName, setUserSName] = useState("");
    const [questionsNow, setQuestionsNow] = useState<item>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    BackHandler.addEventListener("backPress", ()=>{
        navigation.navigate('Home')
        return true
    })

    useEffect(() => {
        const storage = async()=>{
            let trueQ = await AsyncStorage.getItem('@doyouknow:trueQuestion')
            let User = await AsyncStorage.getItem('@doyouknow:userName')
            let dataHistoric = await AsyncStorage.getItem('@doyouknow:historicQuestions')
            let QuestionsNow = await AsyncStorage.getItem('@doyouknow:QuestionsNow')
            setUserSName(User!)
            setHistoric(JSON.parse(dataHistoric!))
            setQuestionsNow(JSON.parse(QuestionsNow!))
            setModalVisible(JSON.parse(trueQ!))
            console.log(modalVisible)
        }
        storage()
    }, [])
    
    const renderItem = ({ item }:any) => (
        <QuestionCardHistoric 
            item={item}
        />
    );

    const renderItemBody = ({ item }:any) => (
        <CardListHistoric 
            item={item}
            setQuestionsNow={setQuestionsNow}
            setModalVisible={setModalVisible}
        />
    );
    
    if (!historic && !questionsNow && !modalVisible) {
        <AppLoading/>
    }
    return (
        <Container>
            <Header/>
            <Modal
                visible={modalVisible}
                onRequestClose={()=>{
                    setModalVisible(false)
                }}
            >
                <ModalView>
                    <Name>{""+ !userSName ? "Hello "+ userSName + "!":"Hello!"}</Name>
                    <ContainerResult>
                        <Text>{`Answered: ${questionsNow?.historic.length}`}</Text>
                        <Text>{`Correct: ${(questionsNow?.historic.filter((e)=>e.isCorrect == true))?.length}`}</Text>
                        <Text>{`Incorrect: ${(questionsNow?.historic.filter((e)=>e.isCorrect == false))?.length}`}</Text>
                    </ContainerResult>
                    <QuestionsContainer>
                        <FlatList
                            data={questionsNow?.historic}
                            renderItem={renderItem}
                            
                        />
                    </QuestionsContainer>
                    <Button
                    >
                        <TextButton
                                onPress={()=>{setModalVisible(false)}}
                        >
                            {"Close result!"}
                        </TextButton>
                    </Button>
                </ModalView>
            </Modal>

            <ContainerBody>
                <Name>{"Match histories"}</Name>
                <SafeViewBody>
                    <FlatList
                        data={historic}
                        renderItem={renderItemBody}
                       
                    >

                    </FlatList>    
                </SafeViewBody>       
            </ContainerBody>
        </Container>
    )
}

export default Historic;

function estadoHistoricModal(estadoHistoricModal: any) {
    throw new Error('Function not implemented.');
}
