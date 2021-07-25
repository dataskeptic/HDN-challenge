import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar">
            <h2>SUPER HERO AGENCY</h2> 
            <div className="links">
                <Link to="/herosList"><i class="fas fa-list"></i>List Of Heros</Link>
                <Link to="/herosList"><i class="fas fa-search"></i>Filter By Power</Link>
                <Link to="/herosList"><i class="fas fa-user-plus"></i>Add Hero</Link>
           </div>
        </nav>
    )
}

export default Header
