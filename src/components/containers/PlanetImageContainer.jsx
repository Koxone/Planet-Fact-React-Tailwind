import React from "react";

function PlanetImageContainer({ planet, showGeology, showInternal, isMobile }) {
  const planetStyles = isMobile
    ? {
        mercury: "h-[111px] w-[111px]",
        venus: "h-[154px] w-[154px]",
        earth: "h-[173px] w-[173px]",
        mars: "h-[129px] w-[129px]",
        jupiter: "h-[224px] w-[224px]",
        saturn: "h-[256px] w-[256px]",
        uranus: "h-[176px] w-[176px]",
        neptune: "h-[173px] w-[173px]",
      }
    : {
        mercury: "h-[290px] w-[290px]",
        venus: "h-[400px] w-[400px]",
        earth: "h-[450px] w-[450px]",
        mars: "h-[336px] w-[336px]",
        jupiter: "h-[582px] w-[582px]",
        saturn: "h-[666px] w-[666px]",
        uranus: "h-[458px] w-[458px]",
        neptune: "h-[450px] w-[450px]",
      };

  const planetGeology = {
    mercury: "top-[50%] left-[22%]",
    venus: "top-[60%] left-[30%]",
    earth: "top-[65%] left-[32%]",
    mars: "top-[57%] left-[26%]",
    jupiter: "top-[63%] left-[36%]",
    saturn: "top-[60%] left-[36%]",
    uranus: "top-[65%] left-[32%]",
    neptune: "top-[65%] left-[32%]",
  };

  const planetClass = planetStyles[planet];
  const planetGeo = planetGeology[planet];

  return (
    <div className="flex items-center justify-center">
      <div
        className={`relative flex items-center justify-center ${planetClass}`}
      >
        {showInternal ? (
          <img
            className="h-full w-full"
            src={`/src/assets/images/planet-${planet}-internal.svg`}
            alt="Planet Image"
            style={{
              animation: "spin-slow var(--spin-duration) linear infinite",
            }}
          />
        ) : (
          <img
            className="h-full w-full object-contain"
            src={`/src/assets/images/planet-${planet}.svg`}
            alt="Planet Image"
            style={{
              animation: "spin-slow var(--spin-duration) linear infinite",
            }}
          />
        )}
        <img
          className={`absolute ${planetGeo} h-[199px] w-[163px] ${showGeology ? "block" : "hidden"}`}
          src={`/src/assets/images/geology-${planet}.png`}
          alt=""
        />
      </div>
    </div>
  );
}

export default PlanetImageContainer;
