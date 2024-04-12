import { MainLayout } from "@/layouts";
import Link from "next/link";
import * as React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
            Đăng nhập
          </li>
        </ul>
        <div className="flex flex-col gap-4 w-full md:w-[80%] lg:w-[500px] mb-5 m-auto">
          <span>
            <h1 className="text-xl font-bold">ĐĂNG NHẬP</h1>
            <div className="bg-[#ee2c74] w-[60px] mt-1 h-1 "></div>
          </span>
          <section className="flex flex-col gap-5 text-sm">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email:</label>
              <input
                className="border rounded p-2 focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Mật khẩu:</label>
              <input
                className="border rounded p-2 focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
                type="password"
                name=""
                id=""
              />
            </div>
            <Link href={"/auth/register"}>
              {" "}
              <p className="text-sm font-medium text-end hover:text-[#ae4ad9] cursor-pointer hover:underline  text-[#288ad6]">
                Đăng ký mới
              </p>
            </Link>
          </section>
          <div className="flex text-white text-sm flex-col gap-3">
            <button className="flex items-center p-2 gap-2 rounded justify-center  text-black font-light bg-[#f7d749] ">
              Đăng nhập
            </button>
            <button className="flex items-center p-2 gap-2 rounded hover:bg-[#2d4373] bg-[#3b5998] ">
              <FaFacebookF className="text-xl w-[10%]  " />
              <p className=" w-[90%] font-medium text-center ">
                {" "}
                Đăng nhập bằng tài khoản Facebook
              </p>
            </button>
            <button className="flex items-center p-2 gap-2 rounded hover:bg-[#dd4b39] bg-[#c23321] ">
              <FaGoogle className="text-xl w-[10%]  " />
              <p className=" w-[90%] font-medium text-center ">
                {" "}
                Đăng nhập bằng tài khoản Google
              </p>
            </button>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
