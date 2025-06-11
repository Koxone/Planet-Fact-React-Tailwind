import React from "react";

function MobileOptionCard({ label, color, value, checked, onChange }) {
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
{/* <input
        name="option"
        value={value}
        type="radio"
        className="hidden"
        onChange={() => onChange?.(value)}
        checked={checked}
      /> */}