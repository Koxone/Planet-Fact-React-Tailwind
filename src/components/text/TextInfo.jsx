import React from "react";

function TextInfo() {
  return (
    <div className="flex flex-col gap-6 self-end">
      <h2 className="font-[Antonio] text-[80px] font-medium uppercase">
        mercury
      </h2>
      <article className="w-[350px] font-[Spartan] text-sm text-gray-400">
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </article>
      <div className="flex items-center gap-3">
        <span>Source:</span>
        <a className="flex items-center gap-1 underline" href="#">
          Wikipedia
          <img
            src="/src/assets/images/icon-source.svg"
            alt="Wikipedia source icon"
          />
        </a>
      </div>
    </div>
  );
}

export default TextInfo;
