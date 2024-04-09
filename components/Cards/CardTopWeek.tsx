import * as React from 'react';
import { FaRegEye } from 'react-icons/fa';

export interface ICardTopWeekProps {
}

export default function CardTopWeek (props: ICardTopWeekProps) {
  return (
    <div className='w-full h-[70px] lg:h-[80px] text-sm md:text-base gap-2 lg:py-3  p-2 py-3 border-x border-b flex justify-between items-center'>
      <span className='w-1/12 text-lg text-end text-[#26b9fe] font-sans'>01</span>
      <img className='w-[25%] md:w-[10%] lg:w-[25%] h-full object-cover' src="https://cdnnvd.com/nettruyen/thumb/thien-ha-de-nhat-y-lai-mon.jpg" alt="" />
      <nav className='flex flex-col w-8/12  h-full  justify-between'>
        <h3 className='font-medium w-full cursor-pointer hover:text-blue-600 truncate'>Thiên Hạ Đệ Nhất Lại Y Môn sdhas sdag sad </h3>
        <span className='flex items-center md:text-sm text-xs justify-between '>
            <p className='font-medium cursor-pointer hover:text-blue-600'>Chương 59</p>
            <span className='flex gap-1 text-gray-500 italic font-light items-center'><FaRegEye /> 4k</span>
        </span>
      </nav>
    </div>
  );
}
