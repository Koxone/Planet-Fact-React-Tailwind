// import { useState } from "react";
// import MobileOptionCard from "./MobileOptionCard";

// function MobileOptions({ number, label, color }) {
//   const [selectedOption, setSelectedOption] = useState("overview");
//   const sections = ["overview", "structure", "surface"];

//   return (
//     <div
//       className={`absolute top-[100%] left-0 flex w-full items-center border-t-1 border-b-1 border-[#979797] px-6 py-5 md:invisible md:hidden`}
//     >
//       <div className="relative flex w-full cursor-pointer justify-between">
//         <input name="option" type="radio" className="hidden" />
//         {sections.map((section, index) => (
//           <MobileOptionCard
//             key={section}
//             label={section.charAt(0).toUpperCase() + section.slice(1)}
//             color={color}
//             value={section}
//             checked={selectedOption === section}
//             onChange={() => setSelectedOption(section)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MobileOptions;
// {
//   /* <div className="absolute top-[100%] left-0 flex w-full items-center border-t-1 border-b-1 border-[#979797] px-6 py-5">
//   <input className="font-[Spartan] text-[9px] font-bold tracking-widest uppercase">
//     overview
//   </input>
// </div>; */
// }
