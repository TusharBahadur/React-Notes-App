import React, { useState } from 'react'

const AddNote = ({ handleAddNotess }) => {
    const [notetext, setnotetext] = useState('');
    const limit = 200;
    const handleChange = (event) => {
        if (limit - event.target.value.length >= 0) {
            setnotetext(event.target.value);

        }
    }

    const handleSaveClick = () => {
        if (notetext.trim().length > 0) {
            handleAddNotess(notetext);
            setnotetext("");
        }

    }

    return (
        <div className='note new'>
            <textarea
                value={notetext}
                onChange={handleChange}
                row='8'
                cols='10'
                placeholder='Type to add a new note'
            >

            </textarea>
            <div className='note-footer'>
                <small>{limit - notetext.length} Remaining</small>
                <button onClick={handleSaveClick} className='save'>save</button>
            </div>

        </div>
    )
}

export default AddNote
