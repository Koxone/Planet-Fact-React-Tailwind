import { useEffect, useState } from "react";
import GeneralContainer from "./components/containers/GeneralContainer";
import MainHeader from "./components/header/MainHeader";
import "./index.css";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("mercury");

  const handlePlanetClick = (planetName) => {
    setSelectedPlanet(planetName);
  };

  return (
    <div className="flex h-screen flex-col text-white">
      <MainHeader onClick={handlePlanetClick} />
      <GeneralContainer planet={selectedPlanet} />
    </div>
  );
}

export default App;
