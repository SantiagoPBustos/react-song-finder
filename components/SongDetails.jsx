import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

function SongDetails(search, lyric, description) {
    return ( 
    <>
        <SongArtist/>
        <SongLyric/>
    </> 
    );
}

export default SongDetails;