import React from "react";

function MainHeader() {
  return (
    <div className="flex items-center justify-between border-b-1 border-[#979797] px-8 py-[22px]">
      <p className="font-[Antonio] text-[28px] font-medium uppercase">
        the planets
      </p>
      <div className="flex items-center gap-8">
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">mercury</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">venus</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">earth</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">mars</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">jupiter</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">saturn</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">uranus</button>
        <button className="text-xs font-[Inter] uppercase leading-6 font-bold cursor-pointer">neptune</button>
      </div>
    </div>
  );
}

export default MainHeader;
