import { ICategory } from '@/interfaces';
import Link from 'next/link';
import * as React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

export interface IAppProps {
}

export default function PopUpCategory({ categories }: { categories: ICategory[] }) {
  return (
    <li className=" relative cursor-pointer  md:p-0  md:border-r-[1px] border-gray-300 py-1 lg:py-0 group/category">
      <span className="flex  hover:text-[#ff9601]  md:px-3 md:h-[40px]    md:hover:text-[#ae4ad9] gap-2 dark:hover:bg-transparent dark: dark:hover:text-[#ff9601] md:hover:bg-gray-100 items-center">
        {" "}
        THỂ LOẠI <TiArrowSortedDown className="md:text-base text-xs" />
      </span>
      <div className="max-h-0 md:absolute md:bg-white  dark:text-white  dark:lg:text-black z-50 overflow-hidden md:shadow-md shadow-black md:w-[500px] top-[100%] group-hover/category:max-h-[400px] transitionProperty-[max-height] duration-300">
        <ul className="w-full md:px-4 md:grid-cols-4 gap-3 pg:mt-0   p-3  md:font-medium grid md:gap-y-3 gap-y-1 grid-cols-2 md:border-none border-t-[1px] mt-2 border-gray-600">
          <Link href={"/tim-truyen"}>
            <li className="font-bold text-[#e74c3c] ">
              TẤT CẢ
            </li>
          </Link>
          {categories?.map((category, index) => (
            <li key={index} className=" hover:text-[#ff9601]  md:hover:text-[#ae4ad9] dark:hover:bg-transparent dark: dark:hover:text-[#ff9601]        ">
              <Link href={`/tim-truyen/${category?._id}.html`}>  {category?.name.split(" ").slice(0, 2).join(" ")}</Link>
            </li>))}
        </ul>
      </div>
    </li>
  );
}
