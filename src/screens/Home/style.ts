import styled from 'styled-components/native';
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize';
import themes from '../../global/styles/themes';

export const Container = styled.View`
    flex: 1;
    font-family: ${({theme})=>theme.fonts.bold};
    background-color: ${({theme})=>theme.colors.primary_init};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(13)}px;
    background-color: ${({theme})=>theme.colors.primary};
    flex-direction: row;
    justify-content: space-between;
`;

export const Modal = styled.Modal`
`;

export const ModalView = styled.View`
    background-color: ${themes.colors.secondary};
    margin:auto;
    width: 80%;
    height: ${RFValue(400)}px;
    border-radius: 5px;
`

export const ContainerBtn = styled.View`
    flex-direction: row;
    width: 100%;
    font-family: ${({theme})=>theme.fonts.bold};
    margin-top: ${RFPercentage(10)}px;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10%;
    padding-right: 10%;
`;

export const TextSubHeader = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.primary};
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
`;

export const Image = styled.Image`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    margin: auto;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    margin-top: 11%;
    margin-right: auto;
`;


export const BtnHistoric = styled.TouchableOpacity`
    width: 30%;
    height: 30%;
    background-color: ${({theme})=>theme.colors.shape};
    margin-top: 13%;
    margin-right: 5%;
    align-items: flex-end;
    border-radius: 5px;
`;

export const TextButtonHist = styled.Text`
    margin: auto;
    color: ${({theme})=>theme.colors.secondary};
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
`;

