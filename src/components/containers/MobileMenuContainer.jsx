import planetData from "/data";
import MobileHeaderCard from "../cards/MobileHeaderCard";
import { useState } from "react";

function MobileMenuContainer({ visible, onClick, notifyClick }) {
  return (
    <div
      className={`w-full transform flex-col overflow-hidden transition-all duration-300 ease-in-out ${
        visible
          ? "flex max-h-[1000px] translate-y-0 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-4 opacity-0"
      }`}
    >
      {planetData.map((planet) => (
        <MobileHeaderCard
          key={planet.name}
          name={planet.name}
          color={planet.name.toLowerCase()}
          onClick={() => onClick(planet.name.toLowerCase())}
          notifyClick={notifyClick}
        />
      ))}
    </div>
  );
}

export default MobileMenuContainer;
