import * as React from "react";
import { FaComment, FaFilter, FaHeart, FaRegEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export interface ICardHomePageMAinProps {}

export default function CardHomePageMAin(props: ICardHomePageMAinProps) {
  return (
    <nav className="flex w-full  gap-2 flex-col">
      <div className="relative w-full cursor-pointer h-[220px] rounded-md overflow-hidden text-sm">
        <img
          className="w-full h-full object-cover"
          src="https://cdnnvd.com/nettruyen/thumb/quy-di-khoi-phuc-ta-co-the-hoa-than-thanh-dai-yeu.jpg"
          alt=""
        />
        <ul className="bg-[#000000b7] absolute font-sans p-1  left-0 right-0 bottom-0 flex gap-2  text-white items-center justify-start">
          <li className="flex items-center opacity-80 gap-1">
            <FaRegEye />
            234
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaComment />
            23
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaHeart />
            234
          </li>
        </ul>
      </div>
      <h3 className="font-medium cursor-pointer  leading-5  hover:text-blue-700 ">
        Quỷ Dị Khôi Phục: Ta Có Thể Hóa Thân THành Đại Yêu
      </h3>
      <ul className="text-xs flex mt-1 flex-col gap-2 ">
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 94</button>{" "}
          <button className=" text-gray-400 italic">42 phút trước</button>
        </li>
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 93</button>{" "}
          <button className=" text-gray-400 italic">2 giờ trước</button>
        </li>
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 92</button>{" "}
          <button className=" text-gray-400 italic">1 ngày trước</button>
        </li>
      </ul>
    </nav>
  );
}
