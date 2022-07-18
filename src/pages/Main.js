import React, { useState } from 'react';
import {Header, ToggleBtn, MusicList} from '../components';

export default function Main(){
    const [isDomestic, setIsDomestic] = useState(true);
    return (
        <>
            <Header/>
            <ToggleBtn isDomestic={isDomestic} setIsDomestic={setIsDomestic}/>
            <MusicList isDomestic={isDomestic}/>
        </>
    )
}