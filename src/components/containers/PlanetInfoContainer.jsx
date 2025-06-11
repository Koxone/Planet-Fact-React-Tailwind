import OptionCard from "../cards/OptionCard";
import TextInfo from "../text/TextInfo";
import planetsData from "/data";

function PlanetInfoContainer({ planet }) {
  return (
    <div className="flex flex-col justify-between gap-16 self-start justify-self-end-safe">
      <div>
        <TextInfo planet={planet} />
      </div>
      <div className="flex flex-col gap-4 self-end">
        <OptionCard number="01" label="overview" planet="Mercury" />
        <OptionCard number="02" label="internal structure" planet="Mercury" />
        <OptionCard number="03" label="surface geology" planet="Mercury" />
      </div>
    </div>
  );
}

export default PlanetInfoContainer;
