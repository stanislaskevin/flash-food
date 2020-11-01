import React from 'react'
import './HomeHeader.css'
import Navbar from './Navbar'
import HeaderUser from './HeaderUser'

function HomeHeader({ avatar, username, levelMember, flashPoint}) {
    return (
        <div className="headerHome">
            <Navbar />
            <HeaderUser 
                avatar={avatar}
                username={username}
                levelMember={levelMember}
                flashPoint={flashPoint}
            />
        </div>
    )
}

export default HomeHeader
