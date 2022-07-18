import axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import MusicItem from './MusicItem/MusicItem';

export default function MusicList({isDomestic}){
    const [domesticMusicList, setDomesticMusicList] = useState([]);
    const [overseasMusicList, setOverseasMusicList] = useState([]);
    const fetchMusicList = async (chartType) => {
        const {
            data: {chartList},
        } = await axios({
            method: 'get',
            url: 'http://localhost:3300/v1/chart/' + chartType
        });
        if(chartType === "domestic")setDomesticMusicList(chartList);
        else setOverseasMusicList(chartList);
    }

    useEffect(()=>{
        fetchMusicList("domestic");
        fetchMusicList("overseas");
    },[]);
    return (
        <>
        {isDomestic?domesticMusicList
                .map(music => {
                        const {id, rank, title, singer, imageUrl} = music;
                        return (
                            <MusicItem key={music.id} rank={rank} imageUrl={imageUrl}/>
                        )
                    }
                ):overseasMusicList
                .map(music => {
                        const {id, rank, title, singer, imageUrl} = music;
                        return (
                            <MusicItem key={music.id} rank={rank} imageUrl={imageUrl}/>
                        )
                    }
                )
            }
        </>
    )
}