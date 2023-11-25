import React from "react";
import ImageCard from "./ImageCard";

const HeroContent = () => {
  return (
    <div className="flex flex-wrap justify-center mt-5 lg:grid lg:grid-cols-4 gap-2 p-2 lg:px-0 lg:w-full lg:h-[32rem]">
      <ImageCard id={0} src={"/assets/abc.jpg"} />
      <ImageCard id={1} src={"/assets/def.jpg"} />
      <ImageCard id={2} src={"/assets/ai-8.jpg"} />
    </div>
  );
};

export default HeroContent;
