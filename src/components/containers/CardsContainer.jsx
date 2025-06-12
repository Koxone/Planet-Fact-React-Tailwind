import planetData from "/data";
import MainCard from "../cards/MainCard";

function CardsContainer({ planet }) {
  const infoCard = [
    { label: "ROTATION TIME", key: "rotation" },
    { label: "REVOLUTION TIME", key: "revolution" },
    { label: "RADIUS", key: "radius" },
    { label: "AVERAGE TEMP", key: "temperature" },
  ];

  const planetInfo = planetData.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase(),
  );
  return (
    <div className="mt-7 flex h-fit w-full flex-col gap-4 self-end lg:col-span-2 lg:mt-0 lg:flex-row">
      {infoCard.map((card) => (
        <MainCard
          key={card.label}
          title={card.label}
          content={planetInfo?.[card.key] || "N/A"}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
