import OptionCard from "../cards/OptionCard";
import TextInfo from "../text/TextInfo";
import planetsData from "/data";

function PlanetInfoContainer({ planet }) {
  const sections = ["overview", "internal structure", "surface geology"];
  return (
    <div className="flex flex-col justify-between gap-16 self-start justify-self-end-safe">
      <div>
        <TextInfo planet={planet} />
      </div>
      <div className="flex flex-col gap-4 self-end">
        {sections.map((section) => (
          <OptionCard
            key={section}
            number={sections.indexOf(section) + 1}
            label={section.charAt(0).toUpperCase() + section.slice(1)}
            planet={planet}
            value={section}
          />
        ))}
      </div>
    </div>
  );
}

export default PlanetInfoContainer;
