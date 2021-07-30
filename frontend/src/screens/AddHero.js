import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddHero = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [powers, setPowers] = useState([""]);

  const { addHero } = useContext(GlobalContext);

  // handle input change
  const handleInputChange = (e, index) => {
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

  // Adding new Hero
  const handleSubmit = (e) => {
    e.preventDefault();

    const newHero = {
      name,
      description,
      powers,
    };
    addHero(newHero);
    alert("A new hero has been added");
    console.log(newHero);
  };

  return (
    <>
      <h2
        style={{
          color: "white",
          paddingBottom: "10px",
        }}
      >
        Add new hero
      </h2>
      <form>
        <div className="form-control">
          <label htmlFor="text">Hero's name: </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter with the hero's name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Hero's description: </label>
          <textarea
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => handleInputChange(e, i)}
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
        <button onClick={handleSubmit} className="btn-hero">
          Add new hero
        </button>
        {/* <p>{hero}</p>
          <p>{description}</p>
          <div style={{ marginTop: 20 }}>{JSON.stringify(powers)}</div>  */}
      </form>
    </>
  );
};

export default AddHero;
