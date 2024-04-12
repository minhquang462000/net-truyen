"use client";
import CardHomePageMAin from "@/components/Cards/CardHomePageMain";
import ChangePage from "@/components/Cards/ChangPage";
import CategoryList from "@/components/List/CategoryList";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import * as React from "react";
import { FaHeart, FaRegComment, FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineCloudUpload,
} from "react-icons/md";
import { PiCellSignalFull } from "react-icons/pi";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="w-screen   lg:w-[1200px] text-black bg-white flex flex-col gap-5 p-3 m-auto">
        <ul className="flex font-medium  flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
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
        </ul>
        <section className="lg:grid grid-cols-12 gap-6 ">
          <div className=" lg:col-span-8 flex flex-col md:gap-5 gap-3 ">
            <h1 className="text-2xl lg:text-[30px] text-center">
              Truyện tranh Action - Mới cập nhật
            </h1>
            <select
              className="border lg:hidden text-gray-600 border-gray-300 rounded p-1 px-2 w-full"
              name=""
              id=""
            >
              <option className="p-2" value="">
                Action
              </option>
            </select>
            <p className="border border-gray-300 p-2 lg:p-3 lg:text-base text-sm">
              Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn,
              với diễn biến nhanh
            </p>
            <ul className="flex  justify-center items-center gap-1">
              <li
                className={`border border-gray-300 cursor-pointer  p-1 md:p-2 text-gray-600 rounded-md min-w-[100px] text-center`}
              >
                Tất cả
              </li>
              <li
                className={`border border-gray-300  cursor-pointer p-1 md:p-2 text-gray-600 rounded-md min-w-[100px] text-center`}
              >
                Hoàn thành
              </li>
              <li
                className={`border border-gray-300 cursor-pointer  p-1 md:p-2 text-gray-600 rounded-md min-w-[100px] text-center`}
              >
                Đang tiến hành
              </li>
            </ul>
            <section className="flex flex-col md:flex-row gap-1">
              <p className=" md:w-1/4 md:mt-5">Sắp xếp theo:</p>
              <select
                className="border md:hidden text-gray-600 border-gray-300 rounded p-1 px-2 w-full"
                name=""
                id=""
              >
                <option value="">Ngày cật nhật</option>
                <option value="">Truyện mới</option>
                <option value="">Top All</option>
                <option value="">Top tháng</option>
                <option value="">Top tuần</option>
                <option value="">Top ngày</option>
                <option value="">Theo dõi</option>
                <option value="">Bình luận</option>
                <option value="">Số chapter</option>
                <option value="">Top Follow</option>
              </select>
              <div className="hidden  md:w-3/4  md:block">
                <ul className="w-full font-medium   flex flex-wrap gap-2 mt-2 text-gray-600 border-white">
                  <li className=" flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded  cursor-pointer">
                    Ngày cập nhật
                  </li>
                  <li className=" flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded  cursor-pointer">
                    Truyện mới
                  </li>
                  <li className=" flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded  cursor-pointer">
                    <FaRegEye className="text-lg " />
                    Top all
                  </li>

                  <li className="       cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <FaRegEye className="text-lg " />
                    Top tháng
                  </li>

                  <li className="    cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <FaRegEye className="text-lg " />
                    Top tuần
                  </li>

                  <li className="     cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <FaRegEye className="text-lg " />
                    Top ngày
                  </li>

                  <li className="   cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <FaHeart className="text-lg " />
                    Theo dõi
                  </li>
                  <li className="   cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <FaRegComment className="text-lg " />
                    Bình luận
                  </li>
                  <li className="    cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <IoList className="text-lg " />
                    Số chapter
                  </li>
                  <li className="    cursor-pointer flex items-center min-w-[120px] justify-center gap-1 w-max border  p-2 border-gray-300 rounded">
                    <IoList className="text-lg " />
                    Top Follow
                  </li>
                </ul>
              </div>
            </section>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
              <CardHomePageMAin />
              <CardHomePageMAin />
              <CardHomePageMAin />
              <CardHomePageMAin />
              <CardHomePageMAin />
            </div>
            <ChangePage />
            <h1 className="font-bold text-lg">Bình luận Facebook</h1>
          </div>
          <div className="hidden lg:block w-full col-span-4">
            <CategoryList />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
