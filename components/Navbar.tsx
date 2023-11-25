import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-start justify-between pb-5">
      <div className="font-extrabold text-[22px] cursor-pointer">AIPatrn</div>
      <div className="flex flex-col-reverse sm:flex-row items-start sm:gap-8 md:gap-16">
        <div className="flex flex-col sm:flex-row items-start sm:gap-8 md:gap-16">
          <div>
            <Link href={"/"}>
              <div className="text-black/90 font-semibold cursor-pointer">
                Home Page
              </div>
            </Link>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                Generator
              </div>
            </Link>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                pricing page
              </div>
            </Link>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                Blog News
              </div>
            </Link>
          </div>
          <div>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                About us
              </div>
            </Link>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                Features
              </div>
            </Link>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                Collection - 2023
              </div>
            </Link>
            <Link href={"/dummy"}>
              <div className="text-[#9898a2] hover:text-black/75 cursor-pointer">
                Career
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-2 lg:mb-0 ">
          <button className="flex item-center justify-center border-[1px] border-slate-200 rounded-2xl py-1 px-5 font-semibold hover:border-black/25 transition-all duration-200 ease img">
            Menu
            <Image
              src={"/drop-down.png"}
              width={400}
              height={400}
              className="w-2 h-full m-auto ml-2"
              alt="drop-down-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
