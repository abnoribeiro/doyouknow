import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Button = styled.TouchableOpacity`
    align-items: center;
    width: 40%;
    height: ${RFPercentage(6)}px;
    background-color: ${({theme})=>theme.colors.success};
    border-radius: 5px;
    margin-bottom: ${RFPercentage(5)}px;
`;

export const TextButton = styled.Text`
    margin: auto;
    color: ${({theme})=>theme.colors.primary};
    font-family: ${({theme})=>theme.fonts.medium};
    font-size:  ${RFValue(15)}px;
`;