import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Hero from '../components/Hero'

const HeroesList = () => {

    const { hero } = useContext(GlobalContext);
    console.log(hero);

    return (
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
                color: 'aliceblue'
        }}>
            { hero.length < 1 ?    
            (<div>
            <h3 style={{paddingTop: '150px' ,color: '#9D0208'}}>There's any hero on the list yet</h3>
            </div>) :
            (
                <ul>
                    {hero.map( hero => (<Hero key={hero.id} hero={hero} />))}
                </ul>
            )
            }
        </div>
    )
}

export default HeroesList
