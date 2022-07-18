import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Btn = styled.div`
    color: ${props => props.color};
    cursor: pointer;
    font-size: large;
    font-weight: bold;
    margin: 0 0.1rem;
`

export default function ToggleBtn({isDomestic,setIsDomestic}){
    const handleClickDomestic = () => {
        console.log('Domestic');
        setIsDomestic(true);
    }

    const handleClickOverseas = () => {
        console.log('Overseas');
        setIsDomestic(false);
    }
    useEffect(()=>{
        console.log(isDomestic);
    },[]);
    return (
        <Container>
            <Btn color={isDomestic ? 'red' : 'black'} onClick={handleClickDomestic}>국내 </Btn>
            <Btn color={!isDomestic ? 'red' : 'black'} onClick={handleClickOverseas}>해외</Btn>
        </Container>
    )
}
