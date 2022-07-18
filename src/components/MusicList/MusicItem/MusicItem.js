import React, {useState} from 'react';
import styled from 'styled-components';

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

export default function MusicItem({id, rank, title, singer, imageUrl}) {
    console.log(rank);
    return (
        <Item>
            <RankArea>{rank}</RankArea>
            <Cover>
                <CoverImg imageUrl={imageUrl}/>
            </Cover>
        </Item>
    )
}