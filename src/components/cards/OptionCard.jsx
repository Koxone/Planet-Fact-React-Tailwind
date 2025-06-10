import React from "react";

function OptionCard({ number = "01", label = "Overview", planet = "" }) {
  const colorMap = {
    Mercury: "has-[:checked]:bg-[#419ebb]",
    Venus: "has-[:checked]:bg-[#eda249]",
    Earth: "has-[:checked]:bg-[#6f2ed6]",
    Mars: "has-[:checked]:bg-[#d14c32]",
    Jupiter: "has-[:checked]:bg-[#db3a34]",
    Saturn: "has-[:checked]:bg-[#cd5120]",
    Uranus: "has-[:checked]:bg-[#1ec2a4]",
    Neptune: "has-[:checked]:bg-[#2d68f0]",
  };

  const selectedClass = colorMap[planet] || "";

  return (
    <label
      className={`flex h-12 w-[350px] cursor-pointer items-center gap-6 border border-[#979797] pl-6 ${selectedClass}`}
    >
      <input name="option" value="overview" type="radio" className="hidden" />
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
