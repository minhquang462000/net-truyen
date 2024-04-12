import Link from "next/link";
import * as React from "react";
import { FaHome, FaRegComment, FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { PiCellSignalFull } from "react-icons/pi";
import { TiArrowSortedDown, TiArrowUnsorted } from "react-icons/ti";

export interface IHeaderSelectsProps {}

export default function HeaderSelects(props: IHeaderSelectsProps) {
  return (
    <section className="w-full p-3 md:p-0 md:bg-[#e4e4e4] bg-[#141414] pb-6">
      <nav className="w-full lg:w-[1200px] tex m-auto">
        <div className="w-full md:hidden">
          <div className="flex items-center justify-between   bg-white">
            <input
              className="outline-none px-2 placeholder:text-gray-500 bg-transparent"
              placeholder="Tìm truyện..."
              type="text"
            />
            <IoMdSearch className="cursor-pointer hover:bg-gray-100 p-1 w-8 h-8" />
          </div>
        </div>
        <tr className="flex mt-2 md:mt-0 text-xs md:text-sm md:flex-row md:text-black md:justify-center lg:justify-start text-white flex-col ">
          <Link href="/">
            {" "}
            <td className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 md:flex items-center  md:p-4 md:py-2  md:border-r-[1px] border-gray-300   py-1 cursor-pointer">
              <span className="md:hidden">TRANG CHỦ</span>
              <FaHome className="hidden md:block text-md" />
            </td>
          </Link>
          <td className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100    md:p-2  md:border-r-[1px] border-gray-300  py-1 cursor-pointer">
            HOT
          </td>
          <Link href="/theo-doi">
            <td className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300   py-1 cursor-pointer">
              THEO DÕI
            </td>
          </Link>
          <Link href="/lich-su-truyen-tranh">
            {" "}
            <td className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300   py-1 cursor-pointer">
              LỊCH SỬ
            </td>
          </Link>
          <td className=" relative cursor-pointer md:p-0  md:border-r-[1px] border-gray-300 py-1 group/category">
            <span className="flex gap-1 hover:text-[#d0b32e] md:p-2 md:hover:text-[#ae4ad9] md:hover:bg-gray-100 items-center">
              {" "}
              THỂ LOẠI <TiArrowSortedDown className="md:text-base text-xs" />
            </span>
            <div className="hidden md:absolute md:bg-white z-50 md:shadow-md shadow-black md:w-[500px] top-9 group-hover/category:block">
              <ul className="w-full md:px-4 md:grid-cols-4 pg:mt-0   p-3 text-[10px] md:text-xs md:font-medium grid md:gap-y-3 gap-y-1 grid-cols-2 md:border-none border-t-[1px] mt-2 border-gray-600">
                <li className="font-bold text-[#e74c3c] cursor-pointer">
                  TẤT CẢ
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
              </ul>
            </div>
          </td>
          <td className=" group/rank py-1 relative  md:p-0 md:border-r-[1px] border-gray-300  cursor-pointer">
            <span className="flex gap-1 hover:text-[#d0b32e] md:p-2  md:hover:text-[#ae4ad9] md:hover:bg-gray-100 items-center">
              {" "}
              XẾP HẠNG <TiArrowUnsorted className="md:text-base text-xs" />
            </span>
            <div className=" hidden md:absolute z-50 md:shadow-md shadow-black md:w-[400px] top-9 md:bg-white group-hover/rank:block">
              <ul className="w-full md:p-0 md:mt-0  p-3 text-sm grid  grid-cols-2  mt-2 border-white">
                <li className="hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 p-1 md:p-2  gap-1   border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top all
                </li>
                <li className="font-bold text-[#e74c3c] border-r flex items-center hover:bg-white pl-3    gap-1   border-t border-l md:p-2 cursor-pointer">
                  <PiCellSignalFull className="text-[13px] " />
                  Truyện Full
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 md:p-2    gap-1   border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top tháng
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 border-r  flex items-center hover:bg-white pl-3 md:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FaRegThumbsUp className="text-[13px] " />
                  Yêu thích
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 md:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top tuần
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 border-r   flex items-center hover:bg-white pl-3 md:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FiRefreshCw className="text-[13px] " />
                  Mới cập nhật
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 md:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top ngày
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100  border-r   flex items-center hover:bg-white pl-3 md:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <MdOutlineCloudUpload className="text-[13px] " />
                  Truyện mới
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100 flex items-center border-b hover:bg-white pl-3 md:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <IoList className="text-[13px] " />
                  Số chapter
                </li>
                <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100  flex items-center border hover:bg-white pl-3 md:p-2 p-1  gap-1  cursor-pointer">
                  <FaRegComment className="text-[13px] " />
                  Bình luận
                </li>
              </ul>
            </div>
          </td>
          <Link href="/tim-truyen/">
            <td className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300 py-1 cursor-pointer">
              TÌM TRUYỆN
            </td>
          </Link>

          <td className=" hover:text-[#d0b32e] md:hidden lg:block md:hover:text-[#ae4ad9] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            CON GÁI
          </td>
          <td className=" hover:text-[#d0b32e] md:hidden lg:block md:hover:text-[#ae4ad9] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            CON TRAI
          </td>
          <td className=" text-[#eb3349] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            TRUYỆN CHỮ HAY
          </td>
          <td className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] md:hover:bg-gray-100   md:p-2  md:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            TẢI APP
          </td>
        </tr>
      </nav>
      <div className="flex w-full text-white md:hidden flex-col mt-2  ">
        <Link href="/auth/login">
          <button className=" hover:text-[#d0b32e] w-full text-start border-b-[1px] border-gray-800 py-2">
            Đăng nhập
          </button>
        </Link>
        <Link href="/auth/register">
          <button className=" hover:text-[#d0b32e] w-full text-start border-b-[1px] border-gray-800 py-2">
            Đăng ký
          </button>
        </Link>
      </div>
    </section>
  );
}
