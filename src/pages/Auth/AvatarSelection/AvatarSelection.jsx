import React from 'react'
import './AvatarSelection.css'


const AvatarSelection = (props) => {

    return (
        <div className="popup-container">
            <div className="popup-menu">
                <div className="popup-header">
                    <h3>Select Your Avatar</h3>
                    <button id="close-button" onClick={props.handlePopup}>X</button>
                </div>
                <img src={props.formData.avatar} alt="animal-avatar"></img>
                <div className="bottom-ui">
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
                    <button onClick={props.handlePopup} type="button">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default AvatarSelection