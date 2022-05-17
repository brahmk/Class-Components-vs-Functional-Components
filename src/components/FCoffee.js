import React from "react";
import { useState, useEffect } from "react";

function FCoffee({ firstName }) {
  
  const [coffeeList, setCoffeeList] = useState();
  const [temperature, setTemperature] = useState('hot');
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((response) => response.json())
      .then((data) => setCoffeeList(data)) //shorthand: .then(setCoffeeList)
      .catch(console.error);
  }, [temperature]);
  const handleClick = () => {
    if (temperature == 'hot'){
        setTemperature('iced')
    }    if (temperature == 'iced'){
        setTemperature('hot')
    } 
  };
  return (
    <>
      <h1>Coffee List (F)</h1>
      <p> Hello {firstName}</p>
      <p>What type of coffee do you like?</p>
      <button onClick={handleClick}>Iced/Hot</button>
      {!coffeeList ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>{temperature} coffees:</h2>
          {coffeeList.map(coffee => {
              return <p key = {coffee.id}> {coffee.title}</p>
          })}
        </>
      )}
    </>
  );
}

export default FCoffee;
