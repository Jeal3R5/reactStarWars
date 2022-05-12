import React from "react";

function Body(props) {
  return (
    <>
      {props.starship.map((ship, index) => {
        console.log(ship);
        return <div key={index}>{ship.name}</div>;
      })}
    </>
  );
}

export default Body;
