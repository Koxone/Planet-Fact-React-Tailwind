import { useEffect, useState } from "react";
import GeneralContainer from "./components/containers/GeneralContainer";
import MainHeader from "./components/header/MainHeader";
import "./index.css";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("mercury");

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetName);
  };

  const optionHandler = (e) => {
    if (e.target.value === "surface geology") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex h-screen flex-col text-white">
      <MainHeader onClick={handlePlanetClick} />
      <GeneralContainer planet={selectedPlanet} showGeology={optionHandler} />
    </div>
  );
}

export default App;
