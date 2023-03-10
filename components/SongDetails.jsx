import React from 'react';
import Message from './Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

function SongDetails(search, lyric, description) {
    if (!lyric || !description) return null;

    return ( 
    <>
        {lyric.error || lyric.name === "AbortError"?<Message/>:<SongLyric/>}
        {description.artist?<SongArtist/>:<Message/>}
    </> 
    );
}

export default SongDetails;