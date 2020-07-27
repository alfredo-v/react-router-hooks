import React from 'react'
import { Link } from 'react-router-dom'

import './NavButton.css'

const NavButton = () => {

    return (
        <nav>
            <Link to='/home' className="nav nav-button">Home</Link>
            <Link to='/contact' className="nav nav-button">Contact</Link>
            <Link to='/info' className="nav nav-button">Info</Link>
        </nav>
    )
}

export default NavButton