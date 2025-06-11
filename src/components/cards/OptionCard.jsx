import React from "react";

function OptionCard({ number, label, planet = "", value }) {
  const colorMap = {
    mercury: "has-[:checked]:bg-[#419ebb]",
    venus: "has-[:checked]:bg-[#eda249]",
    earth: "has-[:checked]:bg-[#6f2ed6]",
    mars: "has-[:checked]:bg-[#d14c32]",
    jupiter: "has-[:checked]:bg-[#db3a34]",
    saturn: "has-[:checked]:bg-[#cd5120]",
    uranus: "has-[:checked]:bg-[#1ec2a4]",
    neptune: "has-[:checked]:bg-[#2d68f0]",
  };

  const selectedClass = colorMap[planet] || "";

  return (
    <label
      className={`flex h-12 w-[350px] cursor-pointer items-center gap-6 border border-[#979797] pl-6 ${selectedClass}`}
    >
      <input name="option" value={value} type="radio" className="hidden" />
      <p className="font-[Spartan] text-xs leading-7 font-bold tracking-widest uppercase">
        {number}
      </p>
      <p className="font-[Spartan] text-xs leading-7 font-bold tracking-widest uppercase">
        {label}
      </p>
    </label>
  );
}

export default OptionCard;
