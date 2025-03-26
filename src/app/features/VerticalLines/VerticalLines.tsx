//VerticalLines
import { FC } from "react";
import { cardData } from "@/app/features/CardData";
import React from "react";

const VerticalLines: FC = () => {
  return (
    <div className="absolute top-72 left-0 right-0 hidden lg:flex justify-between mx-auto w-[70%]">
      {cardData.map((_, index) => (
        <div
          key={index}
          className="w-[1px] h-32 bg-gradient-to-b from-[#6C8AC4] to-transparent"
        >
          <div className="w-full h-full border-l-2 border-dotted border-[#46708F]"></div>
        </div>
      ))}
    </div>
  );
};

export default VerticalLines;
