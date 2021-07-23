import React from 'react'
import '../../styles/AvatarSelection.css'


const AvatarSelection = (props) => {

    return (
        <div className="popup">
            <div className="select-menu">
                <button onClick={props.handlePopup}>X</button>
                <img src={props.formData.avatar} alt="animal-avatar"></img>
                <select onChange={(e) => props.handleChange(e)} name="avatar" value={props.formData.avatar}>
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
                <button onClick={props.handlePopup}>Confirm</button>
            </div>
        </div>
    )
}

export default AvatarSelection