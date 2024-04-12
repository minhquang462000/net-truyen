"use client";
import CardTopMonth from "@/components/Cards/CardTopMonth";
import ContentItem from "@/components/Cards/ContentItem";
import ItemCardMain from "@/components/Cards/ItemCardMain";
import ChapterListItem from "@/components/List/ChaterListItem";
import CommentListItem from "@/components/List/CommentListItem";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import * as React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface IAppProps {}

export default function page(props: IAppProps) {
  return (
    <MainLayout>
      <main className="w-screen font-medium lg:w-[1200px] bg-white flex flex-col gap-5 p-4 m-auto">
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
            Thể loại
          </li>

          <li className="hover:text-[#ae4ad9] cursor-pointer flex items-center gap-1 hover:underline ">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Kiếm nghịch thương khung
          </li>
        </ul>
        <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <nav className="lg:col-span-8 w-full">
            <ItemCardMain />
            <ContentItem />
            <ChapterListItem />
            <CommentListItem />
          </nav>
          <CardTopMonth />
        </div>
      </main>
    </MainLayout>
  );
}
