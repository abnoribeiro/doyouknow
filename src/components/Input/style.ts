import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import themes from '../../global/styles/themes';

export const Container = styled(TextInput)`
    width: 80%;
    
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;
    background-color: ${({theme})=>theme.colors.background};
    color: ${({theme})=>theme.colors.title};
    border-radius: 5px;

    margin-top: ${RFValue(20)};
    margin-bottom: ${RFValue(5)};
    margin-left: auto;
    margin-right: auto;
`;