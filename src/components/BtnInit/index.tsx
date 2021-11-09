import React from 'react';
import {Button,TextButton} from './style';

interface Props {
    textButton:string
    onPress(): any
}

const BtnInit:React.FC<Props> = ( {textButton,onPress}) =>{
    return(
        <Button
            onPress={onPress}
        >
            <TextButton
            >{textButton}</TextButton>
        </Button>
    )
}

export default BtnInit;