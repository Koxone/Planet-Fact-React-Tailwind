import React from "react";

function PlanetImageContainer({ planet }) {
  return (
    <div className="flex items-center justify-center">
      <img
        className="h-[290px] w-[290px]"
        src={`/src/assets/images/planet-${planet}.svg`}
        alt="Planet Image"
        style={{
          animation: "spin-slow var(--spin-duration) linear infinite",
        }}
      />
    </div>
  );
}

export default PlanetImageContainer;
