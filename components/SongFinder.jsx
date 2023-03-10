import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

function SongFinder() {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [description, setDescription] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if (search === null) return;
        
        const fetchData = async () => {
            const {artist, song} = search;

            let artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        }

        fetchData();

    },[search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (<>
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch}/>
        <SongDetails search={search} lyric={lyric} description={description}/>
    </>);
}

export default SongFinder;