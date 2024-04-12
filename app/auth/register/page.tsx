"use client";
import { MainLayout } from "@/layouts";
import * as React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <MainLayout>
      <main className="w-screen   lg:w-[1200px] text-black bg-white flex flex-col gap-5 p-3 m-auto">
        <ul className="flex font-medium  flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
          <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline ">
            Trang chủ
          </li>

          <li className=" hover:text-[#ae4ad9] cursor-pointer flex items-center gap-1 hover:underline ">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Đăng ký
          </li>
        </ul>
        <div className="flex w-full flex-col gap-4 lg:w-[500px] md:w-[80%] mb-5 m-auto">
          <span>
            <h1 className="text-xl font-bold">ĐĂNG KÝ TÀI KHOẢN</h1>
            <div className="bg-[#ee2c74] w-[60px] mt-1 h-1 "></div>
          </span>
          <p className="text-sm">
            Hiện tại chỉ hỗ trợ đăng ký tài khoản qua tài khoản Facebook hoặc
            Google
          </p>
          <div className="flex text-white flex-col gap-3">
            <button className="flex items-center p-2 gap-2 rounded hover:bg-[#2d4373] bg-[#3b5998] ">
              <FaFacebookF className="text-xl w-[10%]  " />
              <p className="text-xs w-[90%] font-medium text-center ">
                {" "}
                Đăng ký bằng tài khoản Facebook
              </p>
            </button>
            <button className="flex items-center p-2 gap-2 rounded hover:bg-[#dd4b39] bg-[#c23321] ">
              <FaGoogle className="text-xl w-[10%]  " />
              <p className="text-xs w-[90%] font-medium text-center ">
                {" "}
                Đăng ký bằng tài khoản Google
              </p>
            </button>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
