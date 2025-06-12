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
    <div className="flex flex-col gap-6 self-end">
      <h2 className="font-[Antonio] text-[80px] font-medium uppercase">
        {planetInfo?.name}
      </h2>
      <article className="w-[350px] font-[Spartan] text-sm text-gray-400">
        {renderText()}
      </article>
      <div className="flex items-center gap-3">
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
