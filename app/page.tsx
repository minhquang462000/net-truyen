'use client'
import CardHomePageMAin from "@/components/Cards/CardHomePageMain";
import CardTopWeek from "@/components/Cards/CardTopWeek";
import MainHeader from "@/components/Headers/MainHeader";
import SlideHome from "@/components/Slide/SlideHome";
import { MainLayout } from "@/layouts";

import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
   <MainLayout>
       
     <main className="w-screen lg:w-[1200px] bg-white flex flex-col gap-5 p-4 m-auto">
    <SlideHome/>
    <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
    <CardHomePageMAin/>
    <section className="w-full col-span-4">
    <tr className="w-full text-sm md:text-base grid grid-cols-3 text-center">
      <td className="py-2 bg-white h-max cursor-pointer border-t-[3px] border-l  border-t-[#ae4ad9]">Top Tháng</td>
      <td className="py-2 bg-gray-100 h-max cursor-pointer border-t-[3px] border-gray-100  hover:border-t-[#ae4ad9]">Top Tuần</td>
      <td className="py-2 bg-gray-100 h-max cursor-pointer border-t-[3px] border-gray-100  hover:border-t-[#ae4ad9]">Top Ngày</td>
    </tr>
   <nav>
    <CardTopWeek/>
   </nav>
    </section>
    </div>

    </main>
   </MainLayout>
  );
}
