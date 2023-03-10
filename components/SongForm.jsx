import React from 'react';

function SongForm(handleSearch) {
    return ( 
    <div>
        <form>
            <input type="text" name='artist' placeholder='Nombre artista'/>
            <input type="text" name='song' placeholder='Nombre de canción'/>
            <input type="submit" value='buscar'/>

        </form>

    </div>
        );
}

export default SongForm;