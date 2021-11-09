import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    background-color: white;
    margin: 10px 10px 2px 10px;
    border-radius: 5px;
    height: 80px;
    justify-content: space-between;
`;

export const ContainerText = styled.View`
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
`;

export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
`;

export const Clickable = styled.TouchableOpacity`
    
`;