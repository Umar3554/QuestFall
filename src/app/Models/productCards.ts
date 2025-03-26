import { StaticImageData } from "next/image";

export interface CardData {
  title: string;
  image: StaticImageData;
  description: string;
  id: number;
}
