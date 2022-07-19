import React, {useState} from 'react';
import styled from 'styled-components';
import {BrowserRouter, Link, Route, Switch, useLocation, useNavigate} from 'react-router-dom';

const Item = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding: 10px 0;
    vertical-align: middle;
    table-layout: fixed;
`
const Head = styled.div`
    width: 30%;
    display: flex;
`
const Title = styled.div`
    cursor: pointer;
`
const Cover = styled.div`
    white-space: normal;
   
    width: 50px;
`
const CoverImg = styled.div`
    position: relative;
    background-image: url(../../../images/${props => props.imageUrl});
    background-size: cover;
    height: 50px;
    margin: 0px;
    padding: 0px;
`
const RankArea = styled.div`
    width: 40px;
    padding: 5px 0 0 9px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 19px;
    color: darkblue;
`
const InfoArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    width: 70%;
`

export default function MusicItem({id, rank, title, singer, imageUrl}) {
    const navigate = useNavigate();
    const {state} = useLocation();
    
    return (
        <Item>
            <Head>
                <RankArea>{rank}</RankArea>
                <Cover>
                    <CoverImg imageUrl={imageUrl}/>
                </Cover>
            </Head>
            <InfoArea>
                <Title>
                    <Link to={`/detail/${id}`}>
                    {title}
                    </Link>
                </Title>
                <div>
                    {singer}
                </div>
            </InfoArea>
        </Item>
    )
}