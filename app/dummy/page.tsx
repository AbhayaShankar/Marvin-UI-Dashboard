import Link from "next/link";
import React from "react";

const DummyRoutePage = () => {
  return (
    <div>
      <Link href={"/"}>
        <button className="px-5 py-[10px] text-xs text-[#fcfcfc] bg-gray-800 uppercase tracking-tight rounded-full">
          Back to Home
        </button>
      </Link>
      <h1 className="mt-3 text-lg">DummyRoutePage</h1>
    </div>
  );
};

export default DummyRoutePage;
