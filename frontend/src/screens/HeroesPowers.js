import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Hero from "../components/Hero";

const HeroesPowers = () => {
  const [text, setText] = useState("");
  const [power, setPower] = useState("");
 /*  const [heroesByPower, setHeroesByPower] = useState([{}]); */
  const { heroes, getHeroes } = useContext(GlobalContext);

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPower(text);
  };

  /* const getHeroByPower = (hero) = {
    setHeroesByPower([...heroesByPower, hero])
  } */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <input
            style={{ marginBottom: "20px" }}
            type="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter with an power..."
          />
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      {/*   This ul will show the list of the heros, using de 'Hero' component, the same component  
            that it's used on the HeroList it's been reusing right here.
                  */}
      <ul style={{ color: "aliceblue" }}>
        {heroes.map((hero) => (
          <div key={hero.id}>
            {hero.powers.map(
              (p) => p === power && (<Hero key={hero._id} hero={hero} />)
            )}
         {/*    {heroesByPower.length < 0 ? (<p>tem nada aqui</p>) : (<div>console.log(heroesByPower)</div>)
               heroesByPower.map( heroesByPower => <Hero key={heroesByPower._id} hero={heroesByPower} /> ) 
            }  */}           
            {/* In the above command we are looping through the powers array and checking 
                if matches with the power insert in the input fild */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HeroesPowers;
