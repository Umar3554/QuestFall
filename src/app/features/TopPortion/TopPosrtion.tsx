import { FC } from "react";
import Image from "next/image";
import React from "react";
import boxes from "@/assets/images/boxes.png";
import sword from "@/assets/images/sword.png";

const TopPortion: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[50vh]">
      <div className="flex flex-col gap-8 h-full w-full lg:w-[70%] px-10 xl:px-20 pt-2 md:pt-24 order-2 lg:order-1">
        <p className="font-medium md:font-semibold text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] leading-[40px] tracking-[0.14em]">
          Publicly Owned Money
        </p>
        <p className="font-medium text-[20px] md:text-[22px] leading-[40px] tracking-[0.14em]">
          Every QFT token in circulation should be initially mined, as no tokens
          are pre-minted or sold by the team.
        </p>
        <div className="flex flex-col gap-0">
          <div className="w-12 border-[2px] border-[#122F55]"></div>
          <div className="w-full border-[1px] border-[#122F55]"></div>
        </div>
        <p className="font-medium text-[20px] md:text-[22px] leading-[40px] tracking-[0.14em]">
          This gives QFT a true crypto nature, as it is a token issued solely by
          the system and only as a reward to users for the value they add.
        </p>
      </div>
      {/* Image container */}
      <div className="relative h-full w-full lg:w-[30%] order-1 lg:order-2 flex-1 min-h-[380px] lg:min-h-[500px]">
        {/* Boxes background */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src={boxes.src} // Access the src property
            alt="boxes"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Sword foreground */}
        <div className="relative h-full w-full">
          {/* Added relative positioning to this container */}
          <div className="relative h-[70%] w-[70%] lg:h-[60%] lg:w-[60%] mx-auto mt-[5%] lg:mt-[10%]">
            <img
              src={sword.src} // Access the src property
              alt="sword"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPortion;
