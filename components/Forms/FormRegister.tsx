'use client'

import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";

export interface IAppProps {
}

export default function FormRegister(props: IAppProps) {
    return (
        <section className="flex w-full flex-col gap-4 lg:w-[500px] md:w-[80%] mb-5 m-auto">
            <span>
                <h3 className="text-xl font-bold">ĐĂNG KÝ TÀI KHOẢN</h3>
                <div className="bg-[#ee2c74] w-[60px] mt-1 h-1 "></div>
            </span>
            <div className="flex flex-col gap-5 text-sm">
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Name:</label>
                    <input
                        className="border rounded text-black p-2 focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
                        type="name"
                        placeholder="Name"
                        name=""
                        id=""
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Email:</label>
                    <input
                        className="border rounded text-black p-2 focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
                        type="email"
                        placeholder="Email"
                        name=""
                        id=""
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Mật khẩu:</label>
                    <input
                        className="border rounded p-2 text-black focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
                        type="password"
                        placeholder="Mật khẩu"
                        name=""
                        id=""
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Xác nhận mật khẩu:</label>
                    <input
                        className="border rounded p-2 text-black focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
                        type="confirmPass"
                        placeholder="Xác nhận mật khẩu"
                        name=""
                        id=""
                    />
                </div>
                {" "}
                <Link href={"/auth/login"}>
                    {" "}
                    <p className="text-sm flex gap-1 items-center justify-end text-end text-[#288ad6] dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9] cursor-pointer hover:underline  ">
                        <TbArrowBackUp />  Đăng nhập
                    </p>
                </Link>
            </div>
            <div className="flex text-white flex-col gap-3">
                <button className="flex items-center p-2 gap-2 rounded justify-center  text-black font-light bg-[#f7d749] ">
                    Đăng ký
                </button>
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
        </section>
    );
}
