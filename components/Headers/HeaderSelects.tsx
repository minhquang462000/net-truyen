import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import PopUpCategory from "../Popup/PopUpCategory";
import PopUpTop from "../Popup/PopUpTop";
import { ICategory } from "@/interfaces";

export interface IHeaderSelectsProps {
  show?: boolean
  categories:ICategory[]
}

export default function HeaderSelects({ show ,categories}: IHeaderSelectsProps) {
  const cssli = `hover:text-[#d0b32e] md:hover:text-[#ae4ad9] cursor-pointer dark:hover:bg-transparent   tex-sm  dark:hover:text-[#d0b32e] md:hover:bg-gray-100    md:px-3 md:h-[40px] items-center flex   md:border-r-[1px] border-gray-300    `
  return (
    <section className={`w-full  md:p-0 md:bg-[#e4e4e4] px-3 transitionProperty-[max-height] duration-300  dark:bg-[#000] dark:text-white bg-[#141414]  ${show ? "max-h-[1000px]" : "max-h-0 overflow-hidden"}`}>
      <div className="w-full lg:w-[1200px] flex flex-col gap-1 lg:flex-row lg:gap-0 m-auto">
        <div className="w-full mt-3 md:hidden">
          <div className="flex items-center justify-between   bg-white">
            <input
              className="outline-none px-2 placeholder:text-gray-500 bg-transparent"
              placeholder="Tìm truyện..."
              type="text"
            />
            <IoMdSearch className=" hover:bg-gray-100 p-1 w-8 h-8" />
          </div>
        </div>
        <ul className="flex mt-2 md:mt-0 text-xs md:text-sm md:flex-row md:text-black dark:text-white md:justify-center lg:justify-start text-white md:gap-0 gap-2 flex-col ">
          <Link href="/">
            {" "}
            <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 md:flex items-center  md:px-4 md:h-[40px] flex   md:border-r-[1px] border-gray-300 ">
              <span className="md:hidden">TRANG CHỦ</span>
              <FaHome className="hidden md:block text-md" />
            </li>
          </Link>
          <Link href={""}><li className={cssli}>HOT</li></Link>
          <Link href={""}><li className={cssli}>THEO DÕI</li></Link>
          <Link href={""}><li className={cssli}>LỊCH SỬ</li></Link>
          <PopUpCategory categories={categories}/>
          <PopUpTop />
          <Link href={""}><li className={cssli}>TÌM TRUYỆN</li></Link>
          <Link href={""}><li className={cssli}>CON GÁI</li></Link>
          <Link href={""}><li className={cssli}>CON TRAI</li></Link>
        </ul>
      </div>
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
      </div>
    </section>
  );
}
