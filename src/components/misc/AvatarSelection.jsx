import React, { useState } from 'react'
import '../../styles/AvatarSelection.css'


const AvatarSelection = (props) => {
    const [selection, setSelection] = useState('https://i.imgur.com/Wdyo4ow.png')

    const selectAvatar = (e) => {
        setSelection(e.target.value)
    }

    return (
        props.avatar === 'default' ?
            <div className="popup">
                <h2>Welcome to party overflow!</h2>
                <p>Please select an avatar from the list below to complete your profile.</p>

                <div>

                    <img src={selection}></img>

                    <select onChange={selectAvatar} value={selection}>
                        <option value='https://i.imgur.com/Wdyo4ow.png'>Cat</option>
                        <option value='https://i.imgur.com/74imy42.png'>Bear</option>
                        <option value='https://i.imgur.com/51nVPDR.png'>Monkey</option>
                        <option value='https://i.imgur.com/JjgmvrX.png'>Koala</option>
                        <option value='https://i.imgur.com/qWHIXp5.png'>Fox</option>
                        <option value='https://i.imgur.com/BC8wCCP.png'>Dear</option>
                        <option value='https://i.imgur.com/ydToVuJ.png'>Raccoon</option>
                        <option value='https://i.imgur.com/ut1szAk.png'>Panda</option>
                        <option value='https://i.imgur.com/MULaROr.png'>Wolf</option>
                    </select>

                    <button onClick={() => props.updateAvatar(selection)}>Confirm</button>
                </div>
            </div>
            :
            null
    )
}

export default AvatarSelection