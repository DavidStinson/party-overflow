import React, { useState } from 'react'
import '../../styles/Register.css'


const AvatarList = (props) => {


    console.log(props.avatar)

    return (
        <div className="background-overlay">

            <img src={props.avatar}></img>

            <select onChange={props.handleAvatar} value={props.avatar}>
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

            <button onClick={(e) => props.handleRegister(e)}>Confirm</button>
        </div>
    )
}

export default AvatarList
