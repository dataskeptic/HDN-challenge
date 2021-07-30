import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Hero from "../components/Hero";



const EditHero = ({ hero, edit, handleCancel }) => {


    const [name, setName] = useState(hero.name ||'');
    const [description, setDescription] = useState(hero.description || '');
    const [powers, setPowers] = useState(hero.powers || []);

    const { addHero } = useContext(GlobalContext);

    // handle input change
    const handleNameChange = (value) => {
      setName(value);
    };

    // handle input change
    const handleDescriptionChange = (value) => {
      setDescription(value)
    };

    // handle input change
    const handlePowersChange = (value) => {
      const list = [...powers, value];
      setPowers(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
      const list = [...powers];
      list.splice(index, 1);
      setPowers(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
      setPowers([...powers, {}]);
    };

    // Adding new Hero
    const handleSubmit = (e) => {
        e.preventDefault();



        /* const newHero = {
          name, 
          description, 
          powers
        };
        addHero(newHero);
        alert("A new hero has been added")
        console.log(newHero); */
    }

    return (
        <div className="hero">
            <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Hero's name: </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Enter with the hero's name..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="text">Hero's description: </label>
            <textarea
              type="text"
              required
              value={description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              placeholder="Enter with hero's description..."
            />
          </div>
          <label htmlFor="text">Hero's power: </label>

          {powers.map((x, i) => {
            return (
              <div className="form-control-row">
                <input
                  type="text"
                  required
                  name="powers"
                  value={x.power}
                  placeholder="Enter with the hero power..."
                  onChange={(e) => handlePowersChange(e)}
                />
                <div className="form-control-row">
                  {powers.length !== 1 && (
                    <button
                      className="btn-delete"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  )}
                  {powers.length - 1 === i && (
                    <button className="btn-add" onClick={handleAddClick}>
                      <i className="fas fa-plus"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <button style={{width:'75px', marginRight: '5px'}} className="btn-hero">Edit Hero</button>
          <button onClick={() => handleCancel()} style={{width:'75px'}} className="btn-hero">Cancel</button>
           
        </form>
      
        </div>
    )
}

export default EditHero
