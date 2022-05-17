import "./App.css";
import React, { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //state to hold ship info
  const [starship, setStarship] = useState([]);
  //API call to get starship info
  const getStarship = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    //convert response to an object
    const data = await response.json();
    setStarship(data.results);
  };
  useEffect(() => {
    getStarship();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Body starship={starship} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
