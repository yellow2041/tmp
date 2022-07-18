import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function Header(){
    const [time, setTime] = useState("");
    useEffect(()=>{
        const d = new Date();
        setTime(d.getFullYear()+"년 "+d.getMonth()+"월 "+d.getDate()+"일 "+" "+d.getHours()+":"+d.getMinutes());
    })
    return (
        <Container>
            <h1>음악 차트</h1>
            <div>{time}</div>
        </Container>
    )
}