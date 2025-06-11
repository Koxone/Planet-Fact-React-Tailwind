import planetData from "/data";
import MainCard from "../cards/MainCard";

function CardsContainer() {
  return (
    <div className="flex h-fit w-full gap-4 self-end">
      <MainCard title="rotation time" content="58.6 days" />
      <MainCard title="revolution time" content="87.97 days" />
      <MainCard title="radius" content="2,439.7 km" />
      <MainCard title="average temp." content="430°C" />
    </div>
  );
}

export default CardsContainer;
