import PlanetImageContainer from "./PlanetImageContainer";
import CardsContainer from "./CardsContainer";
import PlanetInfoContainer from "./PlanetInfoContainer";
import { useState } from "react";

function GeneralContainer({ planet }) {
  const [selectedOption, setSelectedOption] = useState("overview");
  return (
    <div className="grid flex-1 grid-cols-2 grid-rows-[1fr_auto] justify-between overflow-auto px-[165px] pt-[126px] pb-14">
      <PlanetImageContainer
        planet={planet}
        showGeology={selectedOption === "surface geology"}
      />
      <PlanetInfoContainer planet={planet} onOptionChange={setSelectedOption} />
      <CardsContainer planet={planet} />
    </div>
  );
}

export default GeneralContainer;
