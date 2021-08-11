import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const EditHero = ({ hero, handleCancel }) => {
  const [name, setName] = useState(hero.name || "");
  const [description, setDescription] = useState(hero.description || "");
  const [powers, setPowers] = useState(hero.powers || []);

  const { addHero, deleteHero, getHeroes } = useContext(GlobalContext);

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line
  }, []);

  // handle input name change
  const handleNameChange = (value) => {
    setName(value);
  };

  // handle input description change
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  // handle input powers change
  const handlePowersChange = (e, index) => {
    const { value } = e.target;
    const list = [...powers];
    list[index] = value;
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

  // Eding Hero
  const handleSubmit = (e) => { 

    deleteHero(hero._id);

     const editHero = {
      name,
      description,
      powers,
    };
    addHero(editHero);
    alert("The hero has been edited");
    console.log(editHero);
    handleCancel();  
    e.preventDefault();
    
  };

  return (
    <div className="hero">
      <form>
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
            <div key={i} className="form-control-row">
              <input
                type="text"
                required
                name="powers"
                value={x.power}
                placeholder="Enter with the hero power..."
                onChange={(e) => handlePowersChange(e, i)}
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
        <button
          style={{ width: "75px", marginRight: "5px" }}
          className="btn-hero"
          onClick={handleSubmit}
        >
          Edit Hero
        </button>
        <button
          onClick={() => handleCancel()}
          style={{ width: "75px" }}
          className="btn-hero"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditHero;
