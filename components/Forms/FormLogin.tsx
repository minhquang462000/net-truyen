'use client'

import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
export default function FormLogin() {
    return (
        <section className="flex flex-col gap-4 w-full md:w-[80%] lg:w-[500px] mb-5 m-auto">
            <span>
                <h3 className="text-xl font-bold">ĐĂNG NHẬP</h3>
                <div className="bg-[#ee2c74] w-[60px] mt-1 h-1 "></div>
            </span>
            <div className="flex flex-col gap-5 text-sm">
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
                        name=""
                        placeholder="Mật khẩu"
                        id=""
                    />
                </div>
                <ul className="flex gap-2 text-[#288ad6]  items-end justify-end">
                    <Link href={"/auth/reset-password"}>
                        {" "}
                        <li className="text-sm text-end dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9] cursor-pointer hover:underline  ">
                            Quên mật khẩu
                        </li>
                    </Link>
                    <Link href={"/auth/register"}>
                        {" "}
                        <li className="text-sm text-end hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  cursor-pointer hover:underline  ">
                            Đăng ký
                        </li>
                    </Link>
                </ul>
            </div>
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
        </section>
    );
}
