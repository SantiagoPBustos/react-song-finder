import React from 'react';
import Message from './Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

function SongDetails(search, lyric, description) {
    if (!lyric || !description) return null;

    return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric/>
      )}
      {description.artists ? (
        <SongArtist/>
      ) : (
        <Message
          msg={`Error: no existe el intérprete '<em>${search.artist}</em>'`}
          bgColor="#dc3545"
        />
      )}
    </>
    );
}

export default SongDetails;