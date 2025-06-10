import PlanetImageContainer from "./PlanetImageContainer";
import CardsContainer from "./CardsContainer";
import PlanetInfoContainer from "./PlanetInfoContainer";

function GeneralContainer() {
  return (
    <div className="grid flex-1 grid-cols-2 grid-rows-[1fr_auto] justify-between overflow-auto px-[165px] pt-[126px] pb-14">
      <PlanetImageContainer />
      <PlanetInfoContainer />
      <CardsContainer />
    </div>
  );
}

export default GeneralContainer;
