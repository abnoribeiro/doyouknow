import { RFPercentage,RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
    width: 100%;
    height: ${RFPercentage(13)}px;
    background-color: ${({theme})=>theme.colors.primary};
    justify-content: space-between;
`;

export const Box = styled.View`
    margin-top: ${RFValue(20)}px;
    margin-right: ${RFValue(20)}px;
`;

export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.secondary_light};
    font-size: ${RFValue(15)}px;
    margin-top:auto;
    margin-left: ${RFValue(3)}px;
`;

export const Missing = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.secondary_light};
    font-size: ${RFValue(15)}px;
    margin-top: auto;
    margin-left: ${RFValue(3)}px;
`;

export const Success = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.secondary_light};
    font-size: ${RFValue(15)}px;
    margin-top:auto;
    margin-left: ${RFValue(3)}px;
`;

export const Wrong = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.secondary_light};
    font-size: ${RFValue(15)}px;
    margin-bottom:0;
    margin-left: ${RFValue(3)}px;
`;