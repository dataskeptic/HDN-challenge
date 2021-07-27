import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const HeroesPowers = () => {

    const [text, setText] = useState('');
    const [power, setPower] = useState('');
    const { heroes } = useContext(GlobalContext);

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
                    {heroes.map( p => (<p key={p.id}>{p.powers}</p>))}
                </ul>
                {power}
        </div>
    )
}

export default HeroesPowers
