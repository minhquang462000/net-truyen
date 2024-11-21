"use client";
import Image from "next/image";
import logoNet from "@/public/images/logo-nettruyen.png";
import { FaRegLightbulb, FaSearch } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import HeaderSelects from "./HeaderSelects";
import { IoMdSearch } from "react-icons/io";
import InfoCard from "../Cards/InfoCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import bg_header from "@/public/images/bg_header_2017.jpg";
import { ICategory } from "@/interfaces";
import Cookies from 'js-cookie';
import PopupAccount from "../Popup/PopupAccount";
export interface IMainHeaderProps {
  categories: ICategory[]
}
export default function MainHeader({ categories }: IMainHeaderProps) {
  const [showSelect, setShowSelect] = useState(false);
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const user = Cookies.get("user");
  return (
    <header className="w-full sticky top-0 z-50">
      <section style={{ backgroundImage: `url(${bg_header.src})` }} className="w-full m-auto ">
        <div className=" flex w-full lg:w-[1200px] m-auto justify-between  h-[50px]  p-4 items-center">
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
              onClick={() => setTheme(!theme)}
              className={`cursor-pointer text-xl ${theme && "text-[#ffdb38]"
                } `}
            />
            <BiSolidMessageRounded className="cursor-pointer text-2xl" />
          </span>
          <div
            onClick={() => setShowSelect(!showSelect)}
            className="flex md:hidden items-center gap-3"
          >
            <FaSearch className="text-white text-[22px]" />
            <button className="p-[2px] bg-[#d0b32e] lg:hidden text-[30px] text-white rounded-sm">
              {" "}
              {showSelect ? <IoClose /> : <VscThreeBars />}
            </button>
          </div>
          {user ? <div className="hidden md:block"><PopupAccount /></div> :
            <div className="text-white hidden lg:block font-semibold text-sm">
              <Link href="/auth/login">
                {" "}
                <button className="hover:underline">Đăng nhập</button> /
              </Link>
              <Link href="/auth/register">
                <button className="hover:underline"> Đăng ký</button>
              </Link>
            </div>}
        </div>
      </section>
      <div className="hidden md:block">
        {" "}
        <HeaderSelects categories={categories} show />
      </div>
      <div className="md:hidden">
        <HeaderSelects categories={categories} show={showSelect} />
      </div>
    </header>
  );
}
