//PublicOwnedMoney
import { FC } from "react";
import React from "react";
import TopPortion from "../TopPortion/TopPosrtion";
import MobileLayout from "../MobileLayout/MobileLayout";
import DesktopLayout from "../DesktopLayout/DesktopLayout";

const PublicOwnedMoney: FC = () => {
  return (
    <div className="flex h-auto lg:h-[1200px] bg-gradient-to-b from-[#001734] to-[#00051D] border-[1px] border-[#001F51] w-full lg:w-[90%]">
      <div className="h-full w-full pl-0 lg:pl-8 xl:pl-12 pt-0 pb-36 pr-0">
        <TopPortion />
        <DesktopLayout />
        <MobileLayout />
      </div>
    </div>
  );
};

export default PublicOwnedMoney;
