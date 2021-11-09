import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './style';

const Input: React.FC<TextInputProps> = ({...rest}) => {
    return (
        <Container {...rest}/>
    )
};

export default Input;