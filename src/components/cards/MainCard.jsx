import React from "react";

function MainCard({ title = "", content = "" }) {
  return (
    <div className="flex w-fit flex-col gap-4 border border-[#979797] pt-[20px] pr-[104px] pb-[27px] pl-[23px]">
      <h2 className="m-0 p-0 text-left font-[Spartan] text-xs leading-[25px] font-bold whitespace-nowrap uppercase">
        {title}
      </h2>
      <h3 className="m-0 p-0 text-left font-[Antonio] text-[40px] leading-10 font-medium whitespace-nowrap uppercase">
        {content}
      </h3>
    </div>
  );
}

export default MainCard;
