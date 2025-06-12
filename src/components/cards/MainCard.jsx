import React from "react";

function MainCard({ title, content }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border border-[#979797] px-6 pt-[9px] pb-[13px] lg:h-[128px] lg:w-[255px] lg:flex-1 lg:flex-col lg:flex-nowrap lg:items-start lg:gap-4 lg:pt-[20px] lg:pr-[104px] lg:pb-[27px] lg:pl-[23px]">
      <h2 className="m-0 p-0 text-left font-[Spartan] text-[8px] font-bold whitespace-nowrap uppercase lg:text-xs lg:leading-[25px]">
        {title}
      </h2>
      <h3 className="m-0 p-0 text-left font-[Antonio] text-[20px] font-medium whitespace-nowrap uppercase lg:text-[40px] lg:leading-10">
        {content}
      </h3>
    </div>
  );
}

export default MainCard;
