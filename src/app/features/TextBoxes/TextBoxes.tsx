import { FC } from "react";
import React from "react";

const TextBoxes: FC = () => {
  return (
    <div className="absolute -bottom-44 left-1/2 transform -translate-x-1/2 w-full hidden lg:flex justify-center gap-72">
      <div className="w-[253px] h-[112px] bg-[#000C26] p-4 text-[#FFFFFF] rounded-md border-[1px] border-[#022D4F] flex items-center justify-center font-gilroy font-medium text-[16px] leading-[25px] tracking-[0.08em] text-center">
        Fair token distribution based on mining power
      </div>
      <div className="w-[253px] h-[112px] bg-[#000C26] p-4 text-[#FFFFFF] rounded-md border-[1px] border-[#022D4F] flex items-center justify-center font-gilroy font-medium text-[16px] leading-[25px] tracking-[0.08em] text-center">
        Burning adds value to the entire community
      </div>
    </div>
  );
};

export default TextBoxes;
