import * as React from 'react';
import { FaRegComment, FaRegEye, FaRegThumbsUp } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { IoList } from 'react-icons/io5';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { PiCellSignalFull } from 'react-icons/pi';
import { TiArrowUnsorted } from 'react-icons/ti';

export interface IAppProps {
}

export default function PopUpTop(props: IAppProps) {
  return (
    <li className=" group/rank   cursor-pointer relative   md:border-r-[1px] border-gray-300  ">
      <span className="flex  hover:text-[#d0b32e] md:px-3 md:h-[40px]    md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 items-center">
        {" "}
        XẾP HẠNG <TiArrowUnsorted className="md:text-base text-xs" />
      </span>
      <div className="max-h-0 md:absolute md:bg-white z-50 overflow-hidden md:shadow-md shadow-black md:w-[500px] top-[100%] group-hover/rank:max-h-[400px] transitionProperty-[max-height] duration-300">
        <ul className="w-full md:p-0 md:mt-0  p-3 text-sm grid  grid-cols-2  mt-2 border-white">
          <li className="hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 p-1 md:p-2     border-t border-l  ">
            <FaRegEye size={18} />
            Top all
          </li>
          <li className="font-bold text-[#e74c3c] border-r flex items-center hover:bg-white pl-3       border-t border-l md:p-2 ">
            <PiCellSignalFull size={18} />
            Truyện Full
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 md:p-2       border-t border-l  ">
            <FaRegEye size={18} />
            Top tháng
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 border-r  flex items-center hover:bg-white pl-3 md:p-2 p-1    border-t border-l  ">
            <FaRegThumbsUp size={18} />
            Yêu thích
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 md:p-2 p-1    border-t border-l  ">
            <FaRegEye size={18} />
            Top tuần
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 border-r   flex items-center hover:bg-white pl-3 md:p-2 p-1    border-t border-l  ">
            <FiRefreshCw size={18} />
            Mới cập nhật
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 flex items-center hover:bg-white pl-3 md:p-2 p-1    border-t border-l  ">
            <FaRegEye size={18} />
            Top ngày
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100  border-r   flex items-center hover:bg-white pl-3 md:p-2 p-1    border-t border-l  ">
            <MdOutlineCloudUpload size={18} />
            Truyện mới
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100 flex items-center border-b hover:bg-white pl-3 md:p-2 p-1    border-t border-l  ">
            <IoList size={18} />
            Số chapter
          </li>
          <li className=" hover:text-[#d0b32e] md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#d0b32e] md:hover:bg-gray-100  flex items-center border hover:bg-white pl-3 md:p-2 p-1    ">
            <FaRegComment size={18} />
            Bình luận
          </li>
        </ul>
      </div>
    </li>
  );
}
