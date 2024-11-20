"use client";
import CardTopMonth from "@/components/List/ListBookTop";
import ContentItem from "@/components/Cards/ContentItem";
import ItemCardMain from "@/components/Cards/ItemCardMain";
import ChapterListItem from "@/components/List/ChaterListItem";
import CommentListItem from "@/components/List/CommentListItem";
import HistoryListFromAccount from "@/components/List/HistoryListFromAccount";
import HistoryListFromDevice from "@/components/List/HistoryListFromDevice";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TitleAuth from "@/components/Forms/TitlePage";
import TitlePage from "@/components/Forms/TitlePage";

export interface IAppProps {}

export default function page(props: IAppProps) {
  const [tabindex, setTabIndex] = React.useState(0);
  const renderByTab = React.useCallback(() => {
    switch (tabindex) {
      case 0:
        return <HistoryListFromDevice />;
      case 1:
        return <HistoryListFromAccount />;
      default:
        return null;
    }
  }, [tabindex]);
  return (
    <MainLayout>
      <main className="w-screen lg:w-[1200px] border-white flex flex-col bg-white gap-2 p-4 m-auto">
      <TitlePage titlePage="Lịch sử đọc truyện"/>
        <h1 className=" flex md:text-xl font-medium items-center gap-1  text-lg text-[#2980b9] ">
          Lịch sử đọc truyện <IoIosArrowForward />
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
                Từ thiết bị
              </h2>
              <h2
                onClick={() => setTabIndex(1)}
                className={`p-2 px-4 text-[#288ad6] hover:text-[#ae4ad9] ${
                  tabindex === 1 && "border-b-4 border-[#d0b32e] font-bold"
                }  cursor-pointer -mb-[2px] `}
              >
                Theo tài khoản
              </h2>
            </nav>
            {renderByTab()}
            <h1 className="font-bold text-xl mt-5">Bình luận facebook</h1>
          </section>
        
          {/* <CardTopMonth /> */}
        </div>
      </main>
    </MainLayout>
  );
}
