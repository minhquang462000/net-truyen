"use client";
import CardHomePageMAin from "@/components/Cards/CardHomePageMain";
import CardTopMonth from "@/components/Cards/CardTopMonth";
import ChangePage from "@/components/Cards/ChangPage";
import InfoCard from "@/components/Cards/InfoCard";
import HistoryList from "@/components/List/HistoryList";
import SlideHome from "@/components/Slide/SlideHome";
import { MainLayout } from "@/layouts";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <MainLayout>
      <main className="w-screen lg:w-[1200px] bg-white flex flex-col gap-5 p-4 m-auto">
        <SlideHome />
        <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <section className="lg:col-span-8  w-full">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
              <nav className="flex justify-between col-span-2 md:col-span-4">
                <h1 className=" flex items-center gap-1  text-lg text-[#2980b9] mb-3">
                  NetTruyen Chính thức - Đọc truyện tranh miễn phí{" "}
                  <IoIosArrowForward className="hidden md:block" />
                </h1>
                <FaFilter className="border w-8 text-orange-600 hover:text-[#ae4ad9] md:mt-0 mt-2 border-orange-500 p-[6px] md:h-8 h-7 rounded-full" />
              </nav>
              <CardHomePageMAin />
              <CardHomePageMAin />
              <CardHomePageMAin />
              <CardHomePageMAin />
              <CardHomePageMAin />
            </div>
            <ChangePage />
          </section>
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            <HistoryList />
            <CardTopMonth />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
