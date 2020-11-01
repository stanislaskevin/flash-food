import React from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_nav_item">
                <MenuIcon style={{color:"#fc6650"}}/>
            </div>
            <div className="navbar_nav_item">
                <NotificationsNoneOutlinedIcon style={{color:"#fc6650"}}/>
            </div>
        </div>
    )
}

export default Navbar
