import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [listColors, setListColors] = useState('');
    const [powersColors, setPowersColors] = useState('');
    const [heroColor, setHeroColor] = useState('');

    const listClick = () => {
        setListColors('#6A040F');
        setPowersColors('');
        setHeroColor('')
    }
    const powerClick = () => {
        setPowersColors('#6A040F');
        setListColors('');
        setHeroColor('')
    }
    const heroClick = () => {
        setHeroColor('#6A040F')
        setPowersColors('');
        setListColors('');
    }
    const clear = () => {
        setHeroColor('')
        setPowersColors('');
        setListColors('');
    }
 
    return (
        <nav className="navbar">
            <h2 onClick={clear}><Link style={{backgroundColor: 'transparent'}} to="/">SUPER HEROES AGENCY</Link></h2> 
            <div className="links">
                <Link to="/HeroesList" 
                    onClick={listClick} 
                    style={{backgroundColor: listColors }}>
                    <i className="fas fa-list"></i>List of Heros</Link>
                <Link to="/HeroesPowers" 
                    onClick={powerClick}
                    style={{backgroundColor: powersColors }}>
                    <i className="fas fa-search"></i>Filter by Power</Link>
                <Link to="/AddHero"
                    onClick={heroClick}
                    style={{backgroundColor: heroColor }}>    
                    <i className="fas fa-user-plus"></i>Add Hero</Link>
           </div>
        </nav>
    )
}

export default Header
