import React, {useState} from 'react';

const initForm = {
    artist: "",
    song: "",
};

function SongForm(handleSearch) {
    const [form, setForm] = useState(initForm);
    return ( 
    <div>
        <form>
            <input type="text" name='artist' placeholder='Nombre artista'/>
            <input type="text" name='song' placeholder='Nombre de canción'/>
            <input type="submit" value='Buscar'/>

        </form>

    </div>
        );
}

export default SongForm;