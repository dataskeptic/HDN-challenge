import React, {useState} from 'react'

const AddHero = () => {

    const [heroName, setHeroName] = useState('');
    const [description, setDescription] = useState('');
    const [powerList, setpowerList] = useState(['']);

    // handle input change
    const handleInputChange = (e, index) => {
      const { value } = e.target;
      const list = [...powerList];
      list[index] = value;
      setpowerList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
      const list = [...powerList];
      list.splice(index, 1);
      setpowerList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
      setpowerList([...powerList, {}]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const hero = {heroName, description, powerList};
        alert("A new hero has been added")
        console.log(hero);
    }

    return (
      <>
        <h2
          style={{
            color: "white",
            borderBottom: "2px solid #6A040F",
            paddingBottom: "10px",
          }}
        >
          Add new hero
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Hero's name: </label>
            <input
              type="text"
              required
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
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

          {powerList.map((x, i) => {
            return (
              <div className="form-control-row">
                <input
                  type="text"
                  required
                  name="PowerName"
                  value={x.PowerName}
                  placeholder="Enter with the hero power..."
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="form-control-row">
                  {powerList.length !== 1 && (
                    <button
                      className="btn-delete"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  )}
                  {powerList.length - 1 === i && (
                    <button className="btn-add" onClick={handleAddClick}>
                      <i className="fas fa-plus"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <button className="btn-hero">Add new hero</button>
           {/* <p>{heroName}</p>
          <p>{description}</p>
          <div style={{ marginTop: 20 }}>{JSON.stringify(powerList)}</div>  */}
        </form>
      </>
    );
}

export default AddHero