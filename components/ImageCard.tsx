import Image from "next/image";
import React from "react";
import ImageComponent1 from "./ImageComponent1";
import ImageComponent2 from "./ImageComponent2";
import ImageComponent3 from "./ImageComponent3";

export interface ArrayOfAIPoweredImagesProps {
  id: number;
  src: string;
}

interface InsideCardProps {
  id: number;
  content: React.ReactElement;
}

const InsideCard = [
  {
    id: 0,
    content: <ImageComponent1 />,
  },
  {
    id: 1,
    content: <ImageComponent2 />,
  },
  {
    id: 2,
    content: <ImageComponent3 />,
  },
];

const ImageCard = ({ id, src }: ArrayOfAIPoweredImagesProps) => {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer img
    ${id === 0 && "col-span-1"}
    ${id === 1 && "col-span-1"}
    ${id === 2 && "col-span-2"}
    `}
    >
      <Image
        src={src}
        alt={`ai-powered-image ${id}`}
        width={800}
        height={800}
        className={`h-[450px] sm:h-[480px] md:h-[540px] object-cover w-[400px] lg:w-full lg:h-full ${
          id === 0 ? "object-top" : "object-bottom"
        } transition-all delay-75 duration-300 ease-in`}
      />
      <div className="absolute top-0 left-0 p-[10px] pb-5 w-full font-light">
        {InsideCard.map((card) => (
          <div key={card.id}>{card.id === id && card.content}</div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
