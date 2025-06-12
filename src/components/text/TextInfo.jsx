import { useState, useEffect } from "react";
import planetData from "/data";

function TextInfo({ planet, option }) {
  const [selectedPlanet, setSelectedPlanet] = useState(planet);

  const planetInfo = planetData.find(
    (p) => p.name.toLowerCase() === selectedPlanet.toLowerCase(),
  );

  useEffect(() => {
    setSelectedPlanet(planet);
  }, [planet]);

  const renderText = () => {
    switch (option) {
      case "overview":
        return planetInfo.overview.content;
      case "internal structure":
      case "structure":
        return planetInfo.structure.content;
      case "surface geology":
      case "surface":
        return planetInfo.geology.content;
      default:
        return planetInfo.overview.content;
    }
  };
  const renderSource = () => {
    switch (option) {
      case "overview":
        return planetInfo.overview.source;
      case "internal structure":
      case "structure":
        return planetInfo.structure.source;
      case "surface geology":
      case "surface":
        return planetInfo.geology.source;
      default:
        return planetInfo.overview.source;
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 lg:self-end">
      <h2 className="text-center font-[Antonio] text-[40px] font-medium uppercase lg:text-left lg:text-[80px]">
        {planetInfo?.name}
      </h2>
      <article className="text-center font-[Spartan] text-[11px] text-gray-400 lg:w-[350px] lg:text-left lg:text-sm">
        {renderText()}
      </article>
      <div className="flex self-center lg:self-start items-center gap-3">
        <span>Source:</span>
        <a
          className="flex items-center gap-1 underline"
          href={`${renderSource()}`}
        >
          Wikipedia
          <img
            src="/src/assets/images/icon-source.svg"
            alt="Wikipedia source icon"
          />
        </a>
      </div>
    </div>
  );
}

export default TextInfo;
