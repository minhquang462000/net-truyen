"use client";
import Image from "next/image";
import * as React from "react";
import logoNet from "@/public/images/logo-nettruyen.png";
import { FaInfoCircle, FaRegLightbulb, FaSearch } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose, IoSearch } from "react-icons/io5";
import HeaderSelects from "./HeaderSelects";
import { IoMdSearch } from "react-icons/io";
import InfoCard from "../Cards/InfoCard";
import Link from "next/link";

export interface IMainHeaderProps {}

export default function MainHeader(props: IMainHeaderProps) {
  const [showSelect, setShowSelect] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <header>
      <div className="w-full m-auto bg-[#3a315f]">
        <nav className=" flex w-full lg:w-[1200px] m-auto justify-between  p-4 py-2 items-center">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src={logoNet}
              alt="logo-nettruyen"
              width={150}
            />
          </Link>
          <div className="hidden md:block">
            <div className="flex  items-center justify-between w-[400px]  bg-white">
              <input
                className="outline-none px-2 placeholder:text-gray-500 bg-transparent"
                placeholder="Tìm truyện..."
                type="text"
              />
              <IoMdSearch className="cursor-pointer hover:bg-gray-200 p-2 w-8 h-8" />
            </div>
          </div>
          <span className="flex gap-3 text-white items-center">
            <FaRegLightbulb
              onClick={() => setDarkMode(!darkMode)}
              className={`cursor-pointer text-xl ${
                darkMode && "text-[#ffdb38]"
              } `}
            />
            <BiSolidMessageRounded className="cursor-pointer text-2xl" />
          </span>
          <button
            onClick={() => setShowSelect(!showSelect)}
            className="flex md:hidden items-center gap-3"
          >
            <FaSearch className="text-white text-[22px]" />
            <button className="p-[2px] bg-[#d0b32e] text-[30px] text-white rounded-sm">
              {" "}
              {showSelect ? <IoClose /> : <VscThreeBars />}
            </button>
          </button>
          <div className="text-white hidden lg:block font-semibold text-sm">
            <Link href="/auth/login">
              {" "}
              <button className="hover:underline">Đăng nhập</button> /
            </Link>
            <Link href="/auth/register">
              <button className="hover:underline"> Đăng ký</button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="hidden md:block">
        {" "}
        <HeaderSelects />
      </div>
      {showSelect ? <HeaderSelects /> : <InfoCard />}
    </header>
  );
}
