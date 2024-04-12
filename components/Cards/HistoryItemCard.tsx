import * as React from "react";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";

export interface IHistoryListItemCardProps {}

export default function HistoryItemCard(props: IHistoryListItemCardProps) {
  return (
    <div className="flex  flex-col gap-3 w-full items-center">
      <div className="w-full rounded overflow-hidden relative h-[180px] md:h-[220px]   ">
        <img
          className="w-full h-full object-cover"
          src="https://cdnnvd.com/nettruyen/thumb/su-thuc-tinh-cua-hac-ma-phap-su-sau-66666-nam.jpg"
          alt=""
        />
        <button className="flex absolute py-1 md:py-2 left-0 right-0 bottom-0  text-white w-full justify-center font-medium bg-[#000000b9] items-center   ">
          {" "}
          <IoIosClose className="text-2xl" />
          Xoá
        </button>
      </div>
      <div className=" flex w-full gap-2  flex-col ">
        <h3 className=" w-full leading-6  cursor-pointer hover:text-blue-600">
          Sự thực tinh của hắc mạ pháp su sau 66666 năm
        </h3>
        <div className="flex items-center md:text-sm text-xs  justify-between">
          <p className="flex text-gray-400 items-center cursor-pointer hover:text-blue-600 ">
            Đọc tiếp chương 1 <IoIosArrowForward />
          </p>
        </div>
      </div>
    </div>
  );
}
