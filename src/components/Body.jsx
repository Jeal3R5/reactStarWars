import React from "react";

function Body(props) {
  return (
    <div className="bodyDiv">
      {props.starship.map((ship, index) => {
        console.log(ship);
        return (
          <div key={index} className="shipBox">
            {ship.name}
          </div>
        );
      })}
    </div>
  );
}

export default Body;
