import React from "react";

function PlanetImageContainer() {
  return (
    <div className="flex items-center justify-center">
      <img
        className="h-[290px] w-[290px]"
        src="/src/assets/images/planet-mercury.svg"
        alt="Planet Image"
        style={{
          animation: "spin-slow var(--spin-duration) linear infinite",
        }}
      />
    </div>
  );
}

export default PlanetImageContainer;
