'use client';

import { logout } from "@/api/login";
import Link from "next/link";
import { useState } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDiamond } from "react-icons/md";

export interface IAppProps {
}

export default function PopupAccount(props: IAppProps) {
    return (
        <div className="relative text-sm lg:text-base  group">
            <button
                className="flex text-white gap-1 dark:hover:text-[#ff0000]  items-center ">
                <FaUser /> Tài khoản <IoMdArrowDropdown />
            </button>
            <ul className={`text-black absolute top-[100%]  hidden group-hover:block  border text-sm bg-white font-light px-3 p-2 w-[200px] rounded-md`}>
                <Link href={"/account/dashboard"}>
                    <li className="flex items-center hover:text-[#AE4AD9] mb-[5px] gap-1">
                        <FaUser />  Trang cá nhân
                    </li>
                </Link>
                <Link href={"/account/follow"}>
                    <li className="flex items-center hover:text-[#AE4AD9] mb-[5px] gap-1">
                        <GiWhiteBook /> Truyện theo dõi
                    </li>
                </Link>
                <Link href={"/account/linhthach"}>
                    <li className="flex items-center hover:text-[#AE4AD9] mb-[5px] gap-1">
                        <MdDiamond />  Linh Thạch
                    </li>
                </Link>
                <Link href={"/auth/login"}>
                    <li onClick={() => logout()} className="flex items-center hover:text-[#AE4AD9] mb-[5px] gap-1">
                        <FaSignOutAlt />  Thoát
                    </li>
                </Link>
            </ul>
        </div>
    );
}
