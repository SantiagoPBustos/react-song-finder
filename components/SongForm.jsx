import React, { useState } from 'react';

const initForm = {
    artist: "",
    song: "",
};

function SongForm(handleSearch) {
    const [form, setForm] = useState(initForm);

    const handleChange = (e) => {

    }

    return (
        <div>
            <form>
                <input type="text" name='artist' placeholder='Nombre artista' onChange={handleChange} value={form.artist} />
                <input type="text" name='song' placeholder='Nombre de canción' onChange={handleChange} value={form.song} />
                <input type="submit" value='Buscar'/>
            </form>

        </div>
    );
}

export default SongForm;