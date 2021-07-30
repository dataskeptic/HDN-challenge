import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import EditHero from './EditHero'

const Hero = ( { hero } ) => {

    const [edit, setEdit] = useState(false);
    const { deleteHero } = useContext(GlobalContext);

    const handleCancel= () => {
        setEdit(false);
    }

    return (
        <li>
            {
                edit === true ? <EditHero hero={hero} edit={edit} handleCancel={handleCancel}/> : 
                <div className="hero">
                    <h3 style={{ width: '100%', textAlign:'center' ,color: 'aliceblue'}}>{hero.name}</h3>
                    
                    <h3>Description:</h3>
                    {hero.description}
                    <h3 style={{paddingTop: '10px'}}>Powers</h3>
                    <div className="powers">
                    {hero.powers.map(( p, index ) => (<p key={index}>{p}{console.log(index)}</p>))}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button onClick={() => setEdit(true)} className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                        <button onClick={() => deleteHero(hero._id)} className="btn-delete"> <i className="fas fa-trash"></i></button>
                    </div>
                </div>
            }
        </li>
    )
}

export default Hero
