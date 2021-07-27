import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Hero = ( { hero } ) => {

    const { deleteHero } = useContext(GlobalContext);

    return (
        <li>
            <div className="hero">
                <h3 style={{ width: '100%', textAlign:'center' ,color: 'aliceblue'}}>{hero.name}</h3>
                
                <h3>Description:</h3>
                {hero.description}
                <h3 style={{paddingTop: '10px'}}>Powers</h3>
                <div className="powers">
                {hero.powers.map(( p, index ) => (<p key={index}>{p}{console.log(index)}</p>))}
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                    <button onClick={() => deleteHero(hero.id)} className="btn-delete"> <i className="fas fa-trash"></i> </button>
                </div>
            </div>
        </li>
    )
}

export default Hero
