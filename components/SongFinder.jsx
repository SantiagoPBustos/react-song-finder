import React, { useState, useEffect } from 'react';
import { HelperHTTP } from '../helpers/helpHTTP';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

function SongFinder() {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [description, setDescription] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;

        const fetchData = async () => {
            const { artist, song } = search;

            let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay`;
            let songURL = `http://localhost:3000/song`;



            setLoading(true);

            const [resArtist, resSong] = await Promise.all([
                HelperHTTP().get(artistURL),
                HelperHTTP().get(songURL),
            ]);

            console.log(resArtist, resSong);

            setDescription(resArtist);
            setLyric(resSong);
            setLoading(false);
        }

        fetchData();

    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (<>
        <SongForm handleSearch={handleSearch} />        
        {loading && <Loader />}
        {search && !loading &&
         (<SongDetails search={search} lyric={lyric} description={description} />)
        }
        
    </>);
}

export default SongFinder;