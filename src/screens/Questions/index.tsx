import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import { QuestionCard } from '../../components/QuestionCard';
import {Container,QuestionsContainer, Modal,ModalView} from './style';

interface Props{
  navigation:any
}

const Questions: React.FC<Props> = ({ navigation })=>{
  const [historic, setHistoric] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataQuestion, setDataQuestion] = useState([])
  const [userName, setUserName] = useState('')
  const [answered, setAnswered] = useState(0)
  const [win, setWin] = useState(0)
  const [wrong, setWrong] = useState(0)
  
  let answeredResponse:[]=[];
  
  useEffect(() => {
      const storage = async()=>{
          const data = await AsyncStorage.getItem('@doyouknow:questionsNow')
          const user = await AsyncStorage.getItem('@doyouknow:userName')
          setDataQuestion(JSON.parse(data!))
          setUserName(user!)
          
      }
  storage()
  }, [])
  
  useEffect(() => {
    if(dataQuestion.length == answered && dataQuestion.length > 0 ){
      const storage = async()=>{
        let dataHistoric = await AsyncStorage.getItem('@doyouknow:historicQuestions')
        let currentData = dataHistoric ? JSON.parse(dataHistoric) : [];
        let questionNow = {
          userName:userName,
          dateTest:new Date(),
          historic:[...historic]
        }

        const data = [
          ...currentData,
          questionNow
        ]
        await AsyncStorage.setItem('@doyouknow:historicQuestions',JSON.stringify(data))
        await AsyncStorage.setItem('@doyouknow:QuestionsNow',JSON.stringify(questionNow))
        await AsyncStorage.setItem('@doyouknow:trueQuestion',JSON.stringify(true))
        navigation.navigate('Historic') 
        
      }
      
      storage()
    }
    

  }, [answered])

  const renderItem = ({ item }:any) => (
    <QuestionCard 
      item={item} 
      setStateWin={setWin}
      setStateWrong={setWrong}
      setStateAnswered={setAnswered}
      stateWin={win}
      stateWrong={wrong}
      stateAnswered={answered}
      answeredResponse={answeredResponse}
      setHistoric={setHistoric}
      historic={historic}
    />
  );

  if (!dataQuestion) {
    <AppLoading/>
  }
  return (
        <Container>
            <Header
              userName={userName}
              missing={ dataQuestion.length - answered}
              win={win}
              wrong={wrong}
            />
            <QuestionsContainer>
              <FlatList
                data={dataQuestion}
                renderItem={renderItem}
              />
            </QuestionsContainer>
        </Container>
    )
}

export default Questions;














