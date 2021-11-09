import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Modal = styled.Modal`
`;

export const ModalView = styled.View`
    margin:auto;
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 5px;
`;

export const Container = styled.View`
    flex: 1;
    font-family: ${({theme})=>theme.fonts.bold};
    background-color: ${({theme})=>theme.colors.background};
`;

export const FlatList = styled.FlatList`
    
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(13)}px;
    background-color: ${({theme})=>theme.colors.primary};
`;

export const QuestionsContainer = styled.SafeAreaView`
    margin-bottom: ${RFPercentage(15)}px;
    margin-top: ${RFValue(15)}px;
`;
