import PlanetImageContainer from "./PlanetImageContainer";
import CardsContainer from "./CardsContainer";
import PlanetInfoContainer from "./PlanetInfoContainer";
import { useEffect, useState } from "react";

function GeneralContainer({ planet }) {
  const [selectedOption, setSelectedOption] = useState("overview");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 pt-[150px] pb-[47px] 
    lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:justify-between lg:overflow-auto lg:px-[165px] lg:pt-[126px] lg:pb-14">
      <PlanetImageContainer
        planet={planet}
        showGeology={
          selectedOption === "surface geology" || selectedOption === "surface"
        }
        showInternal={
          selectedOption === "internal structure" ||
          selectedOption === "structure"
        }
        isMobile={isMobile}
      />
      <PlanetInfoContainer
        planet={planet}
        onOptionChange={setSelectedOption}
        isMobile={isMobile}
      />
      <CardsContainer planet={planet} />
    </div>
  );
}

export default GeneralContainer;
