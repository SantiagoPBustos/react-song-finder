import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

function SongFinder() {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [description, setDescription] = useState(null);
    const [loading, setLoading] = useState(false);
    
    return ( <>
    <SongForm/>
    <SongDetails/>
    </> );
}

export default SongFinder;