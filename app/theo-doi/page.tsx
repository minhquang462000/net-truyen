"use client";
import CardTopMonth from "@/components/List/ListBookTop";
import ChangePage from "@/components/Cards/ChangPage";
import FollowListNewUpdate from "@/components/List/FollowListNewUpdate";
import FollowListUnread from "@/components/List/FollowListUnread";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface IAppProps {}

export default function page(props: IAppProps) {
  const [tabindex, setTabIndex] = React.useState(0);
  const renderByTab = React.useCallback(() => {
    switch (tabindex) {
      case 0:
        return <FollowListNewUpdate />;
      case 1:
        return <FollowListUnread />;
      default:
        return null;
    }
  }, [tabindex]);
  return (
    <MainLayout>
      <main className="w-screen lg:w-[1200px] border-white flex flex-col bg-white gap-2 p-4 m-auto">
        <ul className="flex  flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
        <Link href="/">
            {" "}
            <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline ">
              Trang chủ
            </li>
          </Link>

          <li className=" hover:text-[#ae4ad9] cursor-pointer flex items-center gap-1 hover:underline ">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
         Theo dõi
          </li>
        </ul>
        <h1 className=" flex md:text-xl font-medium items-center gap-1  text-lg text-[#2980b9] ">
          Truyện đang theo dõi <IoIosArrowForward />
        </h1>
        <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <section className="lg:col-span-8  w-full">
            <nav className="w-full flex border-b-[1px] border-gray-500 justify-center">
              <h2
                onClick={() => setTabIndex(0)}
                className={`p-2 px-4 text-[#288ad6] hover:text-[#ae4ad9]  ${
                  tabindex === 0 && "border-b-4 border-[#d0b32e] font-bold"
                } cursor-pointer -mb-[2px] `}
              >
                Mới cập nhật
              </h2>
              <h2
                onClick={() => setTabIndex(1)}
                className={`p-2 px-4 text-[#288ad6] hover:text-[#ae4ad9] ${
                  tabindex === 1 && "border-b-4 border-[#d0b32e] font-bold"
                }  cursor-pointer -mb-[2px] `}
              >
               Chưa đọc
              </h2>
            </nav>
            {renderByTab()}
            <ChangePage/>
            <h1 className="font-bold text-xl mt-5">Bình luận facebook</h1>
          </section>
        
          <CardTopMonth />
        </div>
      </main>
    </MainLayout>
  );
}
