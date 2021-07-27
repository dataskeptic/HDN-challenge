import React from 'react'

const Home = () => {
    return (
        <div 
            className="home"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: 'aliceblue'
        }}
        >
            <img src={"superHero.svg"} alt="superHero"/>
            <h2 style={{paddingTop: '30px'}}>Welcome to our super hero Agency</h2>
        </div>
    )
}

export default Home
