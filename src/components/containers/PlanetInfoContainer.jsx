import { useEffect, useState } from "react";
import OptionCard from "../cards/OptionCard";
import TextInfo from "../text/TextInfo";
import planetsData from "/data";

function PlanetInfoContainer({ planet, checked }) {
  const sections = ["overview", "internal structure", "surface geology"];

  const [selectedOption, setSelectedOption] = useState("overview");

  return (
    <div className="flex flex-col justify-between gap-16 self-start justify-self-end-safe">
      <div>
        <TextInfo planet={planet} option={selectedOption} />
      </div>
      <div className="flex flex-col gap-4 self-end">
        {sections.map((section) => (
          <OptionCard
            key={section}
            number={sections.indexOf(section) + 1}
            label={section.charAt(0).toUpperCase() + section.slice(1)}
            planet={planet}
            value={section}
            onChange={() => setSelectedOption(section)}
            checked={selectedOption === section}
          />
        ))}
      </div>
    </div>
  );
}

export default PlanetInfoContainer;
