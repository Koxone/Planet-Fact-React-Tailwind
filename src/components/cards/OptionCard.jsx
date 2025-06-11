import React from "react";

function OptionCard({ number, label, planet = "", value, onChange, checked }) {
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
      className={`invisible relative hidden h-12 w-[350px] cursor-pointer items-center justify-center gap-6 border border-[#979797] pl-6 hover:bg-neutral-500 md:visible md:static md:flex md:justify-normal ${selectedClass}`}
    >
      <input
        name="option"
        value={value}
        type="radio"
        className="hidden"
        onChange={() => onChange?.(value)}
        checked={checked}
      />
      <p className="invisible hidden font-[Spartan] text-xs leading-7 font-bold tracking-widest uppercase md:visible md:block">
        {number}
      </p>
      <p className="font-[Spartan] text-xs leading-7 font-bold tracking-widest uppercase md:w-auto md:text-left md:text-inherit md:normal-case md:transition-none md:duration-0 md:peer-checked:text-inherit">
        {label}
      </p>
      <div
        className={`absolute bottom-[-70%] left-[-2%] h-1 w-[85px] md:invisible md:hidden bg-[var(--color-${planet})] opacity-0 transition-opacity duration-200 peer-checked:opacity-100`}
      ></div>
    </label>
  );
}

export default OptionCard;
