import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Hero from '../components/Hero'

const HeroesPowers = () => {

    const [text, setText] = useState('');
    const [power, setPower] = useState('');
    const [herosFilter, setHeroesFiler] = useState([{}]);
    const { hero } = useContext(GlobalContext);

    useEffect(() => {
     
        hero.filter( hero => hero.powers.map(( e ) => (e.powers === power ) && setHeroesFiler(...herosFilter, setHeroesFiler)))
        
    }, [power])

    const handleSubmit = (e) => {
        e.preventDefault();
        setPower(text)       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex'}}>
                    <input
                    type="text"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter with the hero's name..."
                    />
                    <button className="btn-search"><i className="fas fa-search"></i></button>
                </div>
            </form>
                <ul style={{color: 'aliceblue'}}>
                    { herosFilter.length > 0 ? (herosFilter.map( p => (<Hero key={p.id} hero={p} />))) : '' }
                </ul>
        </div>
    )
}

export default HeroesPowers
