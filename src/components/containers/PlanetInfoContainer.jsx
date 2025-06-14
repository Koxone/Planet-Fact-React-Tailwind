import { useEffect, useState } from "react";
import OptionCard from "../cards/OptionCard";
import TextInfo from "../text/TextInfo";
import MobileOptionCard from "../nav/MobileOptionCard";
import planetsData from "/data";

function PlanetInfoContainer({ planet, onOptionChange, isMobile }) {
  const sections = ["overview", "internal structure", "surface geology"];
  const sectionsMobile = ["overview", "structure", "surface"];

  const [selectedOption, setSelectedOption] = useState("overview");

  useEffect(() => {
    onOptionChange?.(selectedOption);
  }, [selectedOption]);

  const planetMargin = {
    mercury: "mt-[98px]",
    venus: "mt-[76px]",
    earth: "mt-[67px]",
    mars: "mt-[88px]",
    jupiter: "mt-[41px]",
    saturn: "mt-[24px]",
    uranus: "mt-[65px]",
    neptune: "mt-[67px]",
  };

  const marginHandler = planetMargin[planet.toLowerCase()];

  return (
    <div className={`${marginHandler} flex flex-col justify-between self-start justify-self-end-safe lg:mt-4 lg:gap-16`}>
      <div>
        <TextInfo planet={planet} option={selectedOption} />
      </div>

      {isMobile ? (
        <div
          className={`absolute top-[86px] left-0 flex w-full items-center border-t-1 border-b-1 border-[#979797] px-6 py-5`}
        >
          <div className="relative flex w-full cursor-pointer justify-between">
            <input name="option" type="radio" className="hidden" />
            {sectionsMobile.map((sectionMobile) => (
              <MobileOptionCard
                key={sectionMobile}
                label={
                  sectionMobile.charAt(0).toUpperCase() + sectionMobile.slice(1)
                }
                color={planet}
                value={sectionMobile}
                checked={selectedOption === sectionMobile}
                onChange={() => setSelectedOption(sectionMobile)}
              />
            ))}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default PlanetInfoContainer;
