import React from 'react';
import { Container,Text,Success,Wrong,Box,Missing } from './style'

interface Header {
    userName:string
    missing:number
    win:number
    wrong:number
}

const Header: React.FC<Header> = ({userName,missing,win,wrong})=>{
    return(
        <Container>
            <Box>
                <Text>{`Good luck \n ${userName} !`}</Text>
            </Box>
            <Box>
                <Missing>{`Missing: ${missing}`}</Missing>
            </Box>
            <Box>
                <Success>{`Win: ${win}`}</Success>
                <Wrong>{`Wrong: ${wrong}`}</Wrong>
            </Box>
        </Container>
    );
};

export default Header;