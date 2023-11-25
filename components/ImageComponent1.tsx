import { ArrowDownRight, MoveDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ImageComponent1 = () => {
  return (
    <div className="flex flex-col justify-between h-[400px] sm:h-[450px] md:h-[500px] lg:h-[29rem]">
      <div>
        <button className="py-[2px] px-[10px] rounded-xl text-[#fcfcfc] border-[1px] border-[#fcfcfc] text-sm">
          01
        </button>
      </div>
      <div className="space-y-2 px-2">
        <div className="flex items-center justify-start">
          <Image
            src="/assets/user-1.jpg"
            width={500}
            height={500}
            alt="user-profile-pic"
            className="h-10 w-10 aspect-square object-contain rounded-full border-[1px] border-white/80"
          />
          <Image
            src="/assets/user-2.jpg"
            width={500}
            height={500}
            alt="user-profile-pic"
            className="h-10 w-10 aspect-square object-contain rounded-full border-[1px] border-white/80 -translate-x-2"
          />
          <Image
            src="/assets/user-3.jpg"
            width={500}
            height={500}
            alt="user-profile-pic"
            className="h-10 w-10 aspect-square object-contain rounded-full border-[1px] border-white/80 -translate-x-4"
          />
        </div>
        <p className="text-white text-lg tracking-wider">
          Learn from best mentors
        </p>
        <div>
          <button className="py-1 px-[10px] rounded-xl text-[#fcfcfc] border-[1px] border-[#fcfcfc] text-sm flex items-center gap-1">
            Start Learning{" "}
            <ArrowDownRight size={20} color="#fcfcfc" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent1;
