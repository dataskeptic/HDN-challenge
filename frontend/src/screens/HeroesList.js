import React from 'react'

const HeroesList = () => {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: 'aliceblue'
        }}>
            <img src={"superHero.svg"} alt="superHero"/>
            <h2 style={{paddingTop: '30px'}}>There's no heroes on the list yet</h2>
        </div>
    )
}

export default HeroesList
