import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect, useState} from 'react';
import Gif from '../../assets/gifTeste.gif';
import Wa from '../../assets/wa.png';
import BtnStart from '../../components/BtnStart';
import Input from '../../components/Input';
import api from '../../services/api';
import {Container,Logo,TextButtonHist,Header,ContainerBtn,Modal,ModalView,TextSubHeader,Image,BtnHistoric} from './style';
import BtnInit from '../../components/BtnInit';
import BtnCancel from '../../components/BtnCancel';
import { Alert } from 'react-native';

interface Props{
    navigation:any
}

const Home: React.FC<Props> = ({ navigation })=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [historic, setHistoric] = useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0)
    let dataHistoric:any;

    //AsyncStorage.removeItem('@doyouknow:historicQuestions')
    useEffect(()=>{
        const a = async() =>{
            dataHistoric = await AsyncStorage.getItem('@doyouknow:historicQuestions')
            setHistoric(dataHistoric)
        }   
        a()
    },[])

    const getQuestions = async()=>{
        if(!name){
            Alert.alert("Please your nickname.")
        }else if(!amount){
            Alert.alert("Please choose a number from 0 to 50.")
        }else if(amount <= 0 || amount > 50 ){
            Alert.alert("Please choose a number from 0 to 50.")
        }else{
            await api.get(`api.php?amount=${amount}`)
            .then(async(data) => {
                const a = async()=>{
                    await AsyncStorage.setItem('@doyouknow:questionsNow',JSON.stringify(data.data.results))
                    await AsyncStorage.setItem('@doyouknow:userName',name.toString())
                    await AsyncStorage.setItem('@doyouknow:trueQuestion',JSON.stringify(false))
                    setModalVisible(false)
                    navigation.navigate('Questions')
                }
                a()
            }).catch((err)=>{
                console.log(err)
            })
        }
    };

    return (
        <Container>
            <Header>
                <Logo
                  source={Wa}
                />

                <BtnHistoric
                    onPress={async()=>{
                        dataHistoric = await AsyncStorage.getItem('@doyouknow:historicQuestions')
                        setHistoric(dataHistoric)
                        if(historic === null){
                            Alert.alert("There are no history records yet.")
                        }else{
                            navigation.navigate('Historic')
                        }
                    }}
                >
                    <TextButtonHist>{"Historic"}</TextButtonHist>
                </BtnHistoric>
            </Header>
            <Image
                source={Gif}
            />
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>setModalVisible(false)}
            >
                <ModalView>
                    <TextSubHeader>
                        {"Let's start!"}
                    </TextSubHeader>
                    <Input
                        placeholder={"Nickname"}
                        onChangeText={(text)=>setName(text)}
                    />
                    <Input
                        placeholder={"Number of questions"}
                        keyboardType={"numeric"}
                        onChangeText={(text)=>setAmount(parseInt(text))}
                    />
                    <ContainerBtn>
                        <BtnInit
                            textButton={"Init"}
                            onPress={getQuestions}
                        />
                        <BtnCancel
                            textButton={"Cancel"}
                            onPress={()=>{
                                setModalVisible(false); 
                            }}
                        />  
                    </ContainerBtn>
                </ModalView>
            </Modal>
            {/* <Image
                source={Teste}
            /> */}
                <BtnStart
                    textButton={"Start"}
                    onPress={()=>{
                        setModalVisible(true); 
                    }}
                />

        </Container>
    )
}

export default Home;

