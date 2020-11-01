import React from 'react'
import './HeaderUser.css'
import Avatar from '@material-ui/core/Avatar'

function HeaderUser({ avatar, username, levelMember, flashPoint}) {
    return (
        <div className="headerUser">
            <div className="headerUser_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="headerUser_details">
                <h2>{username}</h2>
                <p>{levelMember} member - {flashPoint} pts</p>
            </div>
        </div>
    )
}

export default HeaderUser
