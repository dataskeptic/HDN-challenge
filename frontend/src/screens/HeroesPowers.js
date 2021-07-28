import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Hero from '../components/Hero'

const HeroesPowers = () => {

    const [text, setText] = useState('');
    const [power, setPower] = useState('');
    const { heroes, getHeroes } = useContext(GlobalContext);

    useEffect(() => {
        getHeroes();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPower(text)  
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex'}}>
                    <input
                        style={{ marginBottom: "20px"}}
                        type="text"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter with an power..."
                    />
                    <button className="btn-search"><i className="fas fa-search"></i></button>
                </div>
            </form>
                <ul style={{color: 'aliceblue'}}>
                    {heroes.map( hero => (<div key={hero.id}>{ hero.powers.map( p => p === power && <Hero key={hero._id} hero={hero} />) }</div>))}
                </ul>
        </div>
    )
}

export default HeroesPowers
