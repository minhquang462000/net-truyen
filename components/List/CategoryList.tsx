import * as React from 'react';

export interface ICategoryListProps {
}

export default function CategoryList (props: ICategoryListProps) {
  return (
    <ul className='border w-full grid grid-cols-2 p-2'>
    <li className='col-span-2 text-[#2980b9] font-bold py-2' >Thể loại</li>
    <li className='border-y col-span-2 hover:text-[#ae4ad9] p-1 cursor-pointer py-2' >Tất cả</li>
    <li className='border-b col-span-1 hover:text-[#ae4ad9] p-1 cursor-pointer py-2'>Action</li>
    <li className='border-b col-span-1 hover:text-[#ae4ad9] p-1 cursor-pointer py-2'>Action</li>
  </ul>
  );
}
