import React from 'react'

const Hero = ( { hero } ) => {
    return (
        <li>
            <div className="hero">
                <h3 style={{ width: '100%', textAlign:'center' ,color: 'aliceblue'}}>{hero.name}</h3>
                
                <h3>Description:</h3>
                {hero.description}
                <h3>Powers</h3>
                <div className="powers">
                {hero.powers.map(( p ) => (<p>{p}</p>))}
                </div>
            </div>
        </li>
    )
}

export default Hero
