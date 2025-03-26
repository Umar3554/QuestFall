import { FC } from "react";
import React from "react";
import PublicOwnedMoney from "@/app/features/PublicOwnedMoney/PublicOwnedMoney";

const Home: FC = () => {
  return (
    <div className="bg-[#050317] h-full p-3 lg:p-20 flex items-center justify-center font-gilroy">
      <PublicOwnedMoney />
    </div>
  );
};

export default Home;
