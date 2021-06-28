import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const linkStyle = {color: 'white', textDecoration: 'none', fontSize: 'medium' }
    return (
        <div className='mtvNav'>
            <ul className='mtvLinks'>
                <Link style={linkStyle} to='./Movies.js'><li>Movies</li></Link>
                <Link style={linkStyle} to='./TVShows.js'><li>TV Shows</li></Link>
            </ul>
        </div>
    );
}

export default Nav
