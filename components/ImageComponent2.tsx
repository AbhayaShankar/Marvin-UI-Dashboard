import { ArrowDownRight } from "lucide-react";
import React from "react";

const ImageComponent2 = () => {
  return (
    <div className="flex flex-col justify-between h-[400px] sm:h-[450px] md:h-[500px] lg:h-[29rem]">
      <div>
        <button className="py-[2px] px-[10px] rounded-xl text-[#fcfcfc] border-[1px] border-[#fcfcfc] text-sm">
          02
        </button>
      </div>
      <div className="space-y-1">
        <div className="w-full flex items-center justify-between text-lg text-[#fcfcfc] border-b-[1px] border-[#fcfcfc]/30 pb-1 hover:bg-white/[0.075] px-1 rounded-md">
          Free Edit{" "}
          <ArrowDownRight size={20} color="#fcfcfc" strokeWidth={1.75} />
        </div>
        <div className="w-full flex items-center justify-between text-lg text-[#fcfcfc] border-b-[1px] border-[#fcfcfc]/30 pb-1 hover:bg-white/[0.075] px-1 rounded-md">
          Interactive{" "}
          <ArrowDownRight size={20} color="#fcfcfc" strokeWidth={1.75} />
        </div>
        <div className="w-full flex items-center justify-between text-lg text-[#fcfcfc] border-b-[1px] border-[#fcfcfc]/30 pb-1 hover:bg-white/[0.075] px-1 rounded-md">
          Easy Interface{" "}
          <ArrowDownRight size={20} color="#fcfcfc" strokeWidth={1.75} />
        </div>
        <div className="w-full flex items-center justify-between text-lg text-[#fcfcfc] border-b-[1px] border-[#fcfcfc]/30 pb-1 hover:bg-white/[0.075] px-1 rounded-md">
          Compare to Other{" "}
          <ArrowDownRight size={20} color="#fcfcfc" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};

export default ImageComponent2;
