import {React, useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [listColors, setListColors] = useState('');
    const [powersColors, setPowersColors] = useState('');
    const [heroColor, setHeroColor] = useState('');

    const listClick = () => {
        setListColors('#9D0208');
        setPowersColors('');
        setHeroColor('')
    }
    const powerClick = () => {
        setPowersColors('#9D0208');
        setListColors('');
        setHeroColor('')
    }
    const heroClick = () => {
        setHeroColor('#9D0208')
        setPowersColors('');
        setListColors('');
    }
 
    return (
        <nav className="navbar">
            <h2>SUPER HEROES AGENCY</h2> 
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
