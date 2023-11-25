import { ChevronsDown } from "lucide-react";
import React from "react";

const ImageComponent3 = () => {
  return (
    <div className="flex flex-col justify-between h-[400px] sm:h-[450px] md:h-[500px] lg:h-[29rem]">
      <div>
        <button className="py-[2px] px-[10px] rounded-xl text-[#fcfcfc] border-[1px] border-[#fcfcfc] text-sm">
          03
        </button>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <p className="font-extrabold text-[72px] text-[#fcfcfc]">+20K</p>
          <div className="text-white brightness-125 text-xl w-full lg:max-w-[50%]">
            Glass Pattern generated this week in the first release.
          </div>
          <ChevronsDown size={56} color="#fcfcfc" strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
};

export default ImageComponent3;
