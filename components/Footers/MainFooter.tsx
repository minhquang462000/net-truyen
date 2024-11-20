import Image from "next/image";
import * as React from "react";
import logoNet from "@/public/images/logo-nettruyen.png";
import { ICategory } from "@/interfaces";
import Link from "next/link";
export interface IFooterMainProps {}

export default function MainFooter({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <footer className="w-full lg:text-xs text-[#ddd] text-sm bg-[#222222] ">
      <div className="w-full p-3 lg:grid grid-cols-3  lg:w-[1200px] m-auto">
        <div className="flex mb-3 flex-col gap-3">
          <Image
            className="cursor-pointer"
            src={logoNet}
            alt="logo-nettruyen"
            width={140}
          />
          <nav className="flex flex-col gap-1">
            <span className="flex items-center">
              <button className="pr-1 hover:text-white">Giới thiệu </button>|{" "}
              <button className="pl-1 hover:text-white"> Liên hệ</button>
            </span>
            <span className="flex items-center">
              <button className="pr-1 hover:text-white">Điều Khoản </button>|{" "}
              <button className="pl-1 hover:text-white">
                {" "}
                Chính Sách Bảo Mật
              </button>
            </span>
          </nav>
          <h1 className="text-xl font-bold text-gray-400">
            Liên hệ đặt quảng cáo
          </h1>
          <nav className="flex flex-col gap-2">
            <p>
              Telegram:{" "}
              <button className="hover:text-white"> @nettruyenads</button>
            </p>
            <p>
              Email:{" "}
              <button className="hover:text-white">
                {" "}
                nettruyenads@gmail.com
              </button>
            </p>
            <p>Copyright © 2024 NetTruyen</p>
          </nav>
        </div>

        <nav className="border-t-[1px] lg:col-span-2 lg:border-none border-gray-100 lg:pt-0 pt-2">
          <h2 className="text-lg font-medium mb-2">Từ khóa</h2>
          <ul className="flex flex-wrap gap-2 lg:max-w-[500px] text-white mb-2">
            {categories.map((category, index) => (
              <Link key={index} href={`/tim-truyen/${category?._id}`}>
                <li className="border border-gray-400 rounded-md p-1 lg:py-[2px] cursor-pointer hover:border-white">
                  {category?.name.split(" ").slice(0, 2).join(" ")}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
