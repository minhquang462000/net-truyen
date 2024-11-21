"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import PopUpCategory from "../Popup/PopUpCategory";
import PopUpTop from "../Popup/PopUpTop";
import { ICategory } from "@/interfaces";
import { usePathname } from "next/navigation";
import Cookies from 'js-cookie';
import PopupAccount from "../Popup/PopupAccount";
import SearchHeader from "../Forms/SearchHeader";
export interface IHeaderSelectsProps {
  show?: boolean;
  categories: ICategory[];
}
export default function HeaderSelects({
  show,
  categories,
}: IHeaderSelectsProps) {
  const cssli = `hover:text-[#d0b32e] md:hover:text-[#ae4ad9] cursor-pointer dark:hover:bg-transparent   tex-sm  dark:hover:text-[#ff9601] md:hover:bg-gray-100    md:px-3 md:h-[40px] items-center flex   md:border-r-[1px] border-gray-300`;
  const pathName = usePathname();
  const keyHeader = pathName.split("/")[1];
  const user = Cookies.get("user");
  return (
    <section
      className={`w-full  md:p-0 md:bg-[#e4e4e4] px-3 transitionProperty-[max-height] duration-300  dark:bg-[#000] dark:text-white bg-[#141414]  ${show ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
        }`}
    >
      <div className="w-full lg:w-[1200px] flex flex-col gap-1 lg:flex-row lg:gap-0 m-auto">
        <div className="w-full mt-3 md:hidden">
        <SearchHeader/>
        </div>
        <ul className="flex mt-2 md:mt-0 text-xs md:text-sm md:flex-row md:text-black dark:text-white md:justify-center lg:justify-start text-white md:gap-0 gap-2 flex-col ">
          <Link href="/">
            {" "}
            <li
              className={`hover:text-[#ff9601] md:hover:text-[#ae4ad9]  dark:hover:bg-transparent 
             dark:hover:text-[#ff9601] md:hover:bg-gray-100 md:flex items-center  md:px-4 md:h-[40px] 
             flex   md:border-r-[1px] border-gray-300
              ${keyHeader === "" ? "lg:text-[#ae4ad9]  lg:bg-white dark:text-[#ff9601] dark:bg-black" : ""}`}
            >
              <span className="md:hidden">TRANG CHỦ</span>
              <FaHome className="hidden md:block " size={18} />
            </li>
          </Link>
          <Link href={"/truyen-hot"}>
            <li className={`${cssli} ${keyHeader === "truyen-hot" ? "text-[#ae4ad9] bg-white dark:text-[#ff9601] dark:bg-black" : ""}`}>HOT</li>
          </Link>
          <Link href={"/theo-doi"}>
            <li
              className={`${cssli} ${keyHeader === "theo-doi"
                ? "text-[#ae4ad9] bg-white dark:text-[#ff9601] dark:bg-black"
                : ""
                }`}
            >
              THEO DÕI
            </li>
          </Link>
          <Link href={"/lich-su-truyen-tranh"}>
            <li className={`${cssli} ${keyHeader === "lich-su-truyen-tranh" ? "text-[#ae4ad9] bg-white dark:text-[#ff9601] dark:bg-black" : ""}`}>LỊCH SỬ</li>
          </Link>
          <PopUpCategory categories={categories} />
          <PopUpTop />
          <Link href={"/tim-truyen"}>
            <li
              className={`${`${cssli} ${keyHeader === "tim-truyen"
                ? "text-[#ae4ad9] bg-white dark:text-[#ff9601] dark:bg-black"
                : ""
                }`}`}
            >
              TÌM TRUYỆN
            </li>
          </Link>
          <Link href={"/truyen-con-gai"}>
            <li className={`${cssli} ${keyHeader === "truyen-con-gai" ? "text-[#ae4ad9] bg-white dark:text-[#ff9601] dark:bg-black" : ""}`}>CON GÁI</li>
          </Link>
          <Link href={"/truyen-con-trai"}>
            <li className={`${cssli} ${keyHeader === "truyen-con-trai" ? "text-[#ae4ad9] bg-white dark:text-[#ff9601] dark:bg-black" : ""}`}>CON TRAI</li>
          </Link>
        </ul>
      </div>
      {user ? <div className="md:hidden py-3 pb-[150px]"> <PopupAccount /></div> :
        <div className="flex w-full text-sm text-white md:hidden flex-col  gap-2 my-2 ">
          <Link href="/auth/login">
            <button className=" hover:text-[#d0b32e] w-full text-start border-b-[1px] pb-1 border-gray-800 ">
              Đăng nhập
            </button>
          </Link>
          <Link href="/auth/register">
            <button className=" hover:text-[#d0b32e] w-full  text-start border-b-[1px] pb-1 border-gray-800 ">
              Đăng ký
            </button>
          </Link>
        </div>}
    </section>
  );
}
