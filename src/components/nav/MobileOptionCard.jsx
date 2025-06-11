import React from "react";

function MobileOptionCard({ label, color, value, checked, onChange }) {
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
  const selectedClass = colorMap[color] || "";

  return (
    <label
      className={`relative flex cursor-pointer items-center justify-center md:invisible md:hidden`}
    >
      <input
        name="options"
        value={value}
        type="radio"
        className={`peer hidden`}
        onChange={() => onChange?.(value)}
        checked={checked}
      />
      <p className="w-[85px] text-center font-[Spartan] text-xs leading-7 font-bold tracking-widest text-neutral-400 uppercase transition-all duration-200 peer-checked:text-white">
        {label}
      </p>
      <div
        className={`absolute bottom-[-70%] left-[-2%] h-1 w-[85px] bg-[var(--color-${color})] opacity-0 transition-opacity duration-200 peer-checked:opacity-100`}
      ></div>
    </label>
  );
}

export default MobileOptionCard;
