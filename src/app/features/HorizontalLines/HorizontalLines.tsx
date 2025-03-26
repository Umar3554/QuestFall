//HorizontalLines
import { FC } from "react";
import React from "react";

const HorizontalLines: FC = () => {
  return (
    <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 hidden lg:block w-[70%]">
      <div className="border-t-2 border-dotted border-[#46708F] w-full"></div>
    </div>
  );
};

export default HorizontalLines;
