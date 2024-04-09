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
    <section className="w-full p-3 lg:p-0 lg:bg-[#e4e4e4] bg-[#141414] pb-6">
      <nav className="w-full lg:w-[1200px] m-auto">
        <div className="w-full lg:hidden">
          <div className="flex items-center justify-between   bg-white">
            <input
              className="outline-none px-2 placeholder:text-gray-500 bg-transparent"
              placeholder="Tìm truyện..."
              type="text"
            />
            <IoMdSearch className="cursor-pointer hover:bg-gray-100 p-1 w-8 h-8" />
          </div>
        </div>
        <tr className="flex mt-2 lg:mt-0 text-xs lg:text-sm lg:flex-row lg:text-black  text-white flex-col ">
          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 lg:flex items-center  lg:p-2  lg:border-r-[1px] border-gray-300   py-1 cursor-pointer">
            <span className="lg:hidden">TRANG CHỦ</span>
            <FaHome className="hidden lg:block text-lg" />
          </td>
          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100    lg:p-2  lg:border-r-[1px] border-gray-300  py-1 cursor-pointer">
            HOT
          </td>
          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100   lg:p-2  lg:border-r-[1px] border-gray-300   py-1 cursor-pointer">
            THEO DÕI
          </td>
          <td className=" relative cursor-pointer lg:p-0  lg:border-r-[1px] border-gray-300 py-1 group/category">
            <span className="flex gap-1 hover:text-[#d0b32e] lg:p-2 lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 items-center">
              {" "}
              THỂ LOẠI <TiArrowSortedDown className="lg:text-base text-xs" />
            </span>
            <div className="hidden lg:absolute lg:bg-white z-50 lg:shadow-md shadow-black lg:w-[500px] top-9 group-hover/category:block">
              <ul className="w-full lg:px-4 lg:grid-cols-4 pg:mt-0   p-3 text-[10px] lg:text-xs lg:font-medium grid lg:gap-y-3 gap-y-1 grid-cols-2 lg:border-none border-t-[1px] mt-2 border-gray-600">
                <li className="font-bold text-[#e74c3c] cursor-pointer">
                  TẤT CẢ
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9]        cursor-pointer">
                  Action
                </li>
              </ul>
            </div>
          </td>
          <td className=" group/rank py-1 relative  lg:p-0 lg:border-r-[1px] border-gray-300  cursor-pointer">
            <span className="flex gap-1 hover:text-[#d0b32e] lg:p-2  lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 items-center">
              {" "}
              XẾP HẠNG <TiArrowUnsorted className="lg:text-base text-xs" />
            </span>
            <div className=" hidden lg:absolute z-50 lg:shadow-md shadow-black lg:w-[400px] top-9 lg:bg-white group-hover/rank:block">
              <ul className="w-full lg:p-0 lg:mt-0  p-3 text-sm grid  grid-cols-2  mt-2 border-white">
                <li className="hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 flex items-center hover:bg-white pl-3 p-1 lg:p-2  gap-1   border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top all
                </li>
                <li className="font-bold text-[#e74c3c] border-r flex items-center hover:bg-white pl-3    gap-1   border-t border-l lg:p-2 cursor-pointer">
                  <PiCellSignalFull className="text-[13px] " />
                  Truyện Full
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 flex items-center hover:bg-white pl-3 lg:p-2    gap-1   border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top tháng
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 border-r  flex items-center hover:bg-white pl-3 lg:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FaRegThumbsUp className="text-[13px] " />
                  Yêu thích
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 flex items-center hover:bg-white pl-3 lg:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top tuần
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 border-r   flex items-center hover:bg-white pl-3 lg:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FiRefreshCw className="text-[13px] " />
                  Mới cập nhật
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 flex items-center hover:bg-white pl-3 lg:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <FaRegEye className="text-[13px] " />
                  Top ngày
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100  border-r   flex items-center hover:bg-white pl-3 lg:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <MdOutlineCloudUpload className="text-[13px] " />
                  Truyện mới
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100 flex items-center border-b hover:bg-white pl-3 lg:p-2 p-1  gap-1  border-t border-l  cursor-pointer">
                  <IoList className="text-[13px] " />
                  Số chapter
                </li>
                <li className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100  flex items-center border hover:bg-white pl-3 lg:p-2 p-1  gap-1  cursor-pointer">
                  <FaRegComment className="text-[13px] " />
                  Bình luận
                </li>
              </ul>
            </div>
          </td>
          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100   lg:p-2  lg:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            TÌM TRUYỆN
          </td>

          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100   lg:p-2  lg:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            CON GÁI
          </td>
          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100   lg:p-2  lg:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            CON TRAI
          </td>
          <td className=" text-[#eb3349] lg:hover:bg-gray-100   lg:p-2  lg:border-r-[1px] border-gray-300 py-1 cursor-pointer">
           TRUYỆN CHỮ HAY
          </td>
          <td className=" hover:text-[#d0b32e] lg:hover:text-[#ae4ad9] lg:hover:bg-gray-100   lg:p-2  lg:border-r-[1px] border-gray-300 py-1 cursor-pointer">
            TẢI APP
          </td>
        </tr>
      </nav>
      <div className="flex w-full text-white lg:hidden flex-col mt-2  ">
        <button className=" hover:text-[#d0b32e] w-full text-start border-b-[1px] border-gray-800 py-2">
          Đăng nhập
        </button>
        <button className=" hover:text-[#d0b32e] w-full text-start border-b-[1px] border-gray-800 py-2">
          Đăng ký
        </button>
      </div>
    </section>
  );
}
