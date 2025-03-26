//MyCard
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/app/components/ui/card/card";
import { ProductsCardProps } from "@/app/Models/productsCardProps";
import { FC } from "react";
import Image from "next/image";

const MyCard: FC<ProductsCardProps> = ({ cardData }) => {
  return (
    <div>
      <Card
        className="w-[15rem] 2xl:w-80 h-80 xl:h-72 relative overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center justify-center"
        style={{
          background: "radial-gradient(#007BB4, #003458)",
          border: "1px solid #004B84",
        }}
      >
        <div className="flex flex-col gap-2 items-center justify-center h-full w-full p-5 lg:p-6 xl:p-7 2xl:p-8 space-y-2 hover:bg-white hover:bg-opacity-10 transition-opacity">
          <div className="relative w-16 h-16 mb-2">
            <Image
              src={cardData.image}
              alt={cardData.title}
              fill
              className="object-contain"
            />
          </div>
          <CardTitle
            value={cardData.title}
            className="text-center text-[#FFFFFF] text-[22px] font-gilroy font-medium 
             leading-[33px] tracking-[0.14em] inline-block align-middle"
          />
          <CardDescription
            value={cardData.description}
            className="text-center text-sm text-[#789BDA] leading-[25px] tracking-[0.08em] inline-block align-middle"
          />
        </div>
      </Card>
    </div>
  );
};

export default MyCard;
