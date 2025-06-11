import React from "react";

function MobileHeaderCard({ name, color, onClick, notifyClick }) {
  return (
    <div
      onClick={notifyClick}
      className="flex w-full items-center gap-6 border-b-1 border-[#979797] bg-[var(--color-background-blue)] px-8 py-[22px]"
    >
      <div
        onClick={onClick}
        className="flex w-full cursor-pointer items-center gap-6 transition-transform duration-100 ease-in-out hover:*:scale-110"
      >
        <div
          className={`h-5 w-5 rounded-full border-transparent bg-[var(--color-${color})]`}
        ></div>
        <p className="text-[15px] leading-6 font-bold tracking-widest uppercase">
          {name}
        </p>
      </div>
    </div>
  );
}

export default MobileHeaderCard;
