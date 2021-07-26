import React, {useState} from 'react'

const AddHero = () => {

    const [inputList, setInputList] = useState([{ PowerName: ""}]);    

    // handle input change
    const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
   
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
   
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { PowerName: ""}]);
  };

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
        <form>
          <div className="form-control">
            <label htmlFor="text">Hero's name: </label>
            <input type="text" placeholder="Enter with the hero's name..." />
          </div>
          <div className="form-control">
            <label htmlFor="text">Hero's description: </label>
            <input type="text" placeholder="Enter with hero's description..." />
          </div>
          <label htmlFor="text">Hero's power: </label>

          {inputList.map((x, i) => {

            return (
              <div className="form-control-row">
                <input 
                    type="text"
                    name="PowerName" 
                    value={x.PowerName} 
                    placeholder="Enter with the hero power..."
                    onChange={e => handleInputChange(e, i)}
                    />
                <div className="form-control-row">
                  {inputList.length !== 1 && (
                    <button 
                        className="btn-delete"
                        onClick={() => handleRemoveClick(i)}><i className="fas fa-trash"></i>
                    </button>
                    
                  )}
                  {inputList.length - 1 === i && <button className="btn-add" onClick={handleAddClick}><i className="fas fa-plus"></i></button>}
                </div>
              </div>
            );
          })}
          <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

        </form>
      </>
    );
}

export default AddHero