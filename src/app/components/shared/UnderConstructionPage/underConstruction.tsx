import bgImage from "@/assets/images/iceBg-small.jpg";
import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-Awesomegray gap-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative flex flex-col justify-center items-center text-center p-6 bg-black shadow-2xl shadow-black bg-opacity-5 backdrop-blur-lg rounded-3xl border-white border-2">
        <h1 className="text-5xl font-inter font-bold text-white mt-12">
          Coming Soon!
        </h1>
        <p className="text-lg font-inter font-bold text-white mt-4">
          We're working hard to finish the development of this page.
        </p>
        <p className="text-white font-inter font-bold">
          Stay tuned for something amazing!
        </p>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mt-8"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
