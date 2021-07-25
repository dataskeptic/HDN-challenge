import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar">
            <h2>SUPER HEROES AGENCY</h2> 
            <div className="links">
                <Link to="/HeroesList"><i class="fas fa-list"></i>List Of Heros</Link>
                <Link to="/HeroesPowers"><i class="fas fa-search"></i>Filter By Power</Link>
                <Link to="/AddHero"><i class="fas fa-user-plus"></i>Add Hero</Link>
           </div>
        </nav>
    )
}

export default Header
