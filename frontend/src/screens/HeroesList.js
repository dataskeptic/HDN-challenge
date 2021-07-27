import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Hero from '../components/Hero'

const HeroesList = () => {

    const { heroes } = useContext(GlobalContext);

    useEffect(() => {
        console.log(heroes);
      }, []);

    return (
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
                color: 'aliceblue'
        }}>
            { heroes.length < 1 ?    
            (<div>
            <h3 style={{paddingTop: '150px' ,color: '#9D0208'}}>There's any hero on the list yet</h3>
            </div>) :
            (
                <ul>
                    {heroes.map( hero => (<Hero key={hero.id} hero={hero} />))}
                </ul>
            )
            }
        </div>
    )
}

export default HeroesList
