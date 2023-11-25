import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      
      className="relative"
    >
      <Image
        src={"/assets/curved.png"}
        alt="curved-line-png"
        width={400}
        height={500}
        className="absolute z-[-1] w-28 h-64 transform rotate-[20deg]  right-48 top-48 sm:top-28 lg:top-16"
      />
      <Image
        src={"/assets/asterisk-1.png"}
        alt="curved-line-png"
        width={400}
        height={500}
        className="absolute z-[-1] w-12 h-12 rotate-6 left-48 -top-16"
      />
      <Image
        src={"/assets/asterisk-2.png"}
        alt="curved-line-png"
        width={400}
        height={500}
        className="absolute z-[-1] w-10 h-10 -rotate-6 right-96 top-24"
      />
      <h3 className="capitalize text-[#63626e] text-lg tracking-wide">
        revolutionize your
      </h3>
      <h1 className="text-[48px] font-semibold  leading-[60px] tracking-[1px] lg:max-w-[550px] ">
        Creative Projects with the ultimate AI-Powered Pattern.
      </h1>
      <div className="pt-3 lg:pt-0 lg:absolute bottom-2 left-[200px]">
        <div className="flex items-center gap-5">
          <Link href={"/generation"}>
            <button className="px-5 py-[10px] text-xs text-[#fcfcfc] bg-gray-800 uppercase tracking-tight rounded-full">
              Start generating
            </button>
          </Link>
          <div className="leading-0 text-sm text-[#9898a2]">
            <p className="">The Next generation</p>
            <p>
              <span className="text-black/90">Production</span> for designers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
