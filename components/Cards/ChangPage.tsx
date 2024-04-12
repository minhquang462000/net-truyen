import * as React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export interface IChangePageProps {
}

export default function ChangePage (props: IChangePageProps) {
  return (
    <div className='flex justify-center my-5 gap-1 flex-wrap items-center text-gray-500'>
      <button className='w-9 border rounded bg-white hover:bg-gray-200 flex items-center justify-center h-9'><IoIosArrowBack /></button>
      <button className='w-9 border rounded bg-white hover:bg-gray-200 flex items-center justify-center h-9'>1</button>
      <button className='w-9 border rounded bg-white hover:bg-gray-200 flex items-center justify-center h-9'><IoIosArrowForward /></button>
    </div>
  );
}
