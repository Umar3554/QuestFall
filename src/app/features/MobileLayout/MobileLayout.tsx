//VerticalLines
import { FC } from "react";
import { cardData } from "@/app/features/CardData";
import React from "react";
import MyCard from "@/app/features/MyCard/MyCard";

const MobileLayout: FC = () => {
  return (
    <div className="lg:hidden flex flex-col items-center mt-10">
      {cardData.map((card, index) => (
        <React.Fragment key={card.id}>
          {/* Card */}
          <MyCard cardData={card} />

          {/* Connection after card except last */}
          {index < cardData.length - 1 && (
            <>
              {/* Vertical Line */}
              <div className="h-20 w-[1px]">
                <div className="h-full border-l-[1px] border-dotted border-[#46708F]" />
              </div>

              {/* Text Box */}
              <div className="w-[15rem] h-[112px] bg-[#000C27] p-4 text-white rounded-md border-[1px] border-[#022D4F] flex items-center justify-center text-center">
                {index === 0
                  ? "Fair token distribution based on mining power"
                  : "Burning adds value to the entire community"}
              </div>

              {/* Vertical Line */}
              <div className="h-20 w-[1px]">
                <div className="h-full border-l-[1px] border-dotted border-[#46708F]" />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileLayout;
