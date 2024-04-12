import * as React from "react";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";

export interface IHistoryListProps {}

export default function HistoryList(props: IHistoryListProps) {
  return (
    <div className="border-[1px] border-[#ddd] text-sm lg:text-base p-1 md:p-2 w-full text-black">
      <nav className="flex items-center justify-between border-b p-1">
        <h2 className="md:text-lg text-base  hover:text-[#ae4ad9] cursor-pointer hover:underline text-[#288ad6]">
          Lịch sử đọc truyện
        </h2>
        <p className="md:text-sm text-xs  italic hover:text-blue-600 hover:underline cursor-pointer">Xem tất cả</p>
      </nav>
      <ul className="p-2 w-full">
        <li className="flex  justify-between gap-3 w-full items-center">
          <img
            className="w-1/4 h-[55px]  md:h-[60px] object-cover"
            src="https://cdnnvd.com/nettruyen/thumb/su-thuc-tinh-cua-hac-ma-phap-su-sau-66666-nam.jpg"
            alt=""
          />
          <div className=" flex w-3/4 gap-2  flex-col ">
            <h3 className=" w-full truncate font-medium cursor-pointer hover:text-blue-600">
              Sự thực tinh của hắc mạ pháp su sau 66666 năm
            </h3>
            <div className="flex items-center md:text-sm text-xs  justify-between">
              <p className="flex text-gray-400 items-center cursor-pointer hover:text-blue-600 ">
                Đọc tiếp chương 1 <IoIosArrowForward />
              </p>
              <p className="flex italic items-center cursor-pointer hover:text-blue-600 ">
                {" "}
                <IoIosClose className="text-lg md:text-xl"/>
                Xoá
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
