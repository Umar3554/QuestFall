//VerticalLines
import { FC } from "react";
import { cardData } from "@/app/features/CardData";
import React from "react";
import MyCard from "@/app/features/MyCard/MyCard";
import HorizontalLines from "../HorizontalLines/HorizontalLines";
import VerticalLines from "../VerticalLines/VerticalLines";
import TextBoxes from "../TextBoxes/TextBoxes";

const DesktopLayout: FC = () => {
  return (
    <div className="relative mt-10 hidden lg:flex justify-between pl-0 pr-10 xl:pl-20 xl:pr-20">
      {cardData.map((card) => (
        <MyCard key={card.id} cardData={card} />
      ))}
      <VerticalLines />
      <HorizontalLines />
      <TextBoxes />
    </div>
  );
};

export default DesktopLayout;
