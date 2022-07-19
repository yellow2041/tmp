import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useLocation,useParams,useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 500px;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
`
const Title = styled.h1`
    height: 65%;
    margin: 20px 0 0 5px;
`
const Singer = styled.h3`
    height: 35%;
`
const Content = styled.div`
    display: grid;
    row-gap: 10px;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr 3fr 1fr;
    align-content: center;
`

export default function MusicDetail({isDomestic}){
    const {id} = useParams();
    const state = useNavigate().state; 
    const [detail,setDetail] = useState({});
    const fetchMusicDetail = async () => {
        console.log(id);
        const {
            data: {chart},
        } = await axios({
            method: 'get',
            url: 'http://localhost:3300/v1/chart/detail/' + id
        });
        setDetail(chart);
        console.log("fetch: "+chart);
        setDetail(chart);
    }
    useEffect(()=>{
        fetchMusicDetail();
        
    },[id]);
    return(
        <>
            <Header>
                <Title>{detail.title}</Title>
                <Singer>{detail.singer}</Singer>
            </Header>
            <Content>
                <h2>작사</h2>
                <h3>{detail.lyricist}</h3>
                <h2>작곡자</h2>
                <h3>{detail.melodizer}</h3>
                <h2>장르</h2>
                <h3>{detail.genre}</h3>
            </Content>
        </>
    );
}