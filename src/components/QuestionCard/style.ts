import { RFValue,RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: ${RFValue(15)}px;
    background-color: white;
    border-radius: 10px;
`;

export const Category = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    text-align: center;
    margin-top: ${RFValue(15)}px;
`;

export const Difficulty = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    text-align: center;
`;

export const Question = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(13)}px;
    margin-top: ${RFPercentage(5)}px;
    margin-bottom: ${RFPercentage(2)}px;
    margin-left: ${RFPercentage(2)}px;;
`;


export const Answers = styled.FlatList`
`

export const ContainerAnswers = styled.View`
    margin-top: 1px;
    margin-left: ${RFPercentage(2)}px;
    flex-direction: row;
`

export const TextAnswers = styled.Text`
    margin-top: auto;
    margin-bottom: auto;
    font-family: ${({theme})=>theme.fonts.medium};
`

export const Btn = styled.TouchableOpacity`
    width: ${RFValue(200)}px;
    height: ${RFValue(40)}px;
    background-color: ${({theme})=>theme.colors.primary};
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${RFValue(15)}px;
    margin-top: ${RFValue(15)}px;
`

export const TextBtn = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    text-align: center;
    margin:auto;
    color:  ${({theme})=>theme.colors.secondary_light};
`
