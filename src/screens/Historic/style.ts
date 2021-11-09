import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import themes from '../../global/styles/themes';

export const Container = styled.View`
    flex: 1;
    font-family: ${({theme})=>theme.fonts.bold};
    background-color: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(13)}px;
    background-color: ${({theme})=>theme.colors.primary};
`;

export const QuestionsContainer = styled.SafeAreaView`
    margin-bottom: ${RFPercentage(10)}px;
    margin-top: ${RFValue(10)}px;
    margin-right: ${RFValue(20)}px;
    margin-left: ${RFValue(20)}px;
    height: 60%;
    background-color: ${({theme})=>theme.colors.shape};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
`;

export const Modal = styled.Modal`
`;

export const ModalView = styled.View`
    background-color: ${themes.colors.secondary};
    width: 100%;
    height: 100%;
`
export const Name = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    text-align: center;
    padding-top: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
`;

export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    padding-bottom: ${RFValue(1)}px;
    text-align: center;
`;

export const ContainerResult = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left:  ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
`

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: ${RFValue(50)}px;
    border-radius: 5px;
    background-color: ${({theme})=>theme.colors.attention_light};
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

export const ContainerBody = styled.View`
    margin-left: auto;
    margin-right: auto;
    width: 90%;
`
export const SafeViewBody = styled.SafeAreaView`
    width: 100%;
    background-color: ${({theme})=>theme.colors.shape};
    padding-top: 10px;
    padding-bottom: 10px;
    height: 85%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;

`;
