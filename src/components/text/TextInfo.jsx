import { useState, useEffect } from "react";
import planetData from "/data";

function TextInfo({ planet, option }) {
  const [selectedPlanet, setSelectedPlanet] = useState(planet);

  const planetInfo = planetData.find(
    (p) => p.name.toLowerCase() === selectedPlanet.toLowerCase(),
  );
  const text = planetInfo.overview.content;

  useEffect(() => {
    setSelectedPlanet(planet);
  }, [planet]);

  return (
    <div className="flex flex-col gap-6 self-end">
      <h2 className="font-[Antonio] text-[80px] font-medium uppercase">
        {planetInfo?.name}
      </h2>
      <article className="w-[350px] font-[Spartan] text-sm text-gray-400">
        {text}
      </article>
      <div className="flex items-center gap-3">
        <span>Source:</span>
        <a className="flex items-center gap-1 underline" href="#">
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
