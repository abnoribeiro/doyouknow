import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Button = styled.TouchableOpacity`
    width: ${RFPercentage(30)}px;
    height: ${RFPercentage(8)}px;
    background-color: ${({theme})=>theme.colors.primary};
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
`;

export const TextButton = styled.Text`
    margin: auto;
    color: ${({theme})=>theme.colors.secondary};
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(20)}px;
`;