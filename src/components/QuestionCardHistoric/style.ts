import { RFValue,RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: ${RFValue(15)}px;
    background-color: ${({theme})=>theme.colors.secondary};
    border-radius: 5px;
    padding: 15px;
`;

export const Category = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    text-align: center;
`;

export const Question = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(13)}px;
    margin-left: ${RFPercentage(2)}px;;
    margin-top: ${RFPercentage(2)}px;;
    margin-bottom: ${RFPercentage(2)}px;;
`;

export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(13)}px;
    margin-left: ${RFPercentage(2)}px;
    padding-bottom: ${RFValue(1)}px;
`;
