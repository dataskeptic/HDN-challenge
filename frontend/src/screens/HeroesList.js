import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const HeroesList = () => {

    const { hero } = useContext(GlobalContext);
    console.log(hero);

    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: 'aliceblue'
        }}>
            { hero.length < 1 ? 
            
            (<div>
            <img src={"superHero.svg"} alt="superHero"/>
            <h2 style={{paddingTop: '30px'}}>There's no heroes on the list yet</h2>
            </div>) :
            (<p>lista pequena</p>)
            }
        </div>
    )
}

export default HeroesList
