import React from "react";

// function Body(props) {
//   return (
//     <div className="bodyDiv">
//       {props.starship.map((ship, index) => {
//         console.log(ship);
//         return (
//           <div key={index} className="shipBox">
//             {ship.name}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Body;


function Body(props) {
  return (
    <div className="bodyDiv">
      {props.starship.map((ship, index) => {
        console.log(ship);
        return (
          <div key={index} className="shipBox">
            <div class="ship-card">
              <div class="ship-card-inner">
                <div class="ship-card-front">
                  <p>{ship.name}</p>
                </div>
                <div class="ship-card-back">
                  <div>{ship.model}</div>
                  <br />
                  <div>{ship.starship_url}</div>
                  <a href="{ship.url}">For more details...</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Body;