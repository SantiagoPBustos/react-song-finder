import React from 'react';
import Message from './Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

function SongDetails(search, lyric, description) {
    return ( 
    <>
        <Message/>
        <SongArtist/>
        <SongLyric/>
    </> 
    );
}

export default SongDetails;