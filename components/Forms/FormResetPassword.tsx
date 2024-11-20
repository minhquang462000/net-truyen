'use client'

import Link from "next/link";
import { BsArrowRepeat } from "react-icons/bs";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export interface IFormLoginProps {
}

export default function FormResetPassword(props: IFormLoginProps) {
    return (
        <section className="flex flex-col gap-4 w-full md:w-[80%] lg:w-[500px] mb-5 m-auto">
            <span>
                <h3 className="text-xl font-bold">QUÊN MẬT KHẨU</h3>
                <div className="bg-[#ee2c74] w-[60px] mt-1 h-1 "></div>
            </span>
            <div className="flex flex-col gap-5 text-sm">
                <p className="text-[#ff0000] ">Trường hợp không nhận được email để đặt lại mật khẩu, vui lòng
                    <span className="hover:text-[#ae4ad9] px-1 text-[#288ad6] dark:text-[#ff9601] dark:hover:text-[#ff0000] cursor-pointer hover:underline">liên hệ</span>với chúng tôi</p>
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

            </div>
            <div className="flex items-center w-full gap-2">
                <span className="border rounded border-gray-300 w-1/2 h-[35px] text-xl text-[#288ad6] flex items-center justify-center ">8PMH</span>
                <button className="border rounded border-gray-300 w-max h-[35px] px-3 text-xl  flex items-center justify-center "><BsArrowRepeat /></button>
                <input className="border rounded text-black w-full px-2 h-[35px]  outline-none border-gray-300 " placeholder="Nhập Capcha" type="text" />
            </div>
            <button className="flex items-center p-2 gap-2 rounded justify-center  text-black font-light bg-[#f7d749] ">
                Gửi
            </button>
        </section>
    );
}
