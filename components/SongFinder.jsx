import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

function SongFinder() {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [description, setDescription] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        console.log(data);
    };

    return (<>
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch}/>
        <SongDetails search={search} lyric={lyric} description={description}/>
    </>);
}

export default SongFinder;