"use client";

import { useGetEmailForLogin } from "@/stores/getEmailLocal";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";

export interface IAppProps {}

export default function FormRegister(props: IAppProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { setEmail } = useGetEmailForLogin();
  const router = useRouter();
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    name: "",
    confirmPw: "",
  });
  const handleRegister = async () => {
    if (
      dataRegister.email == "" ||
      dataRegister.password == "" ||
      dataRegister.name == "" ||
      dataRegister.confirmPw == ""
    ) {
      toast.warning("Vui lòng điền đầy đủ thông tin");
    } else if (dataRegister.password != dataRegister.confirmPw) {
      toast.error("Mật khẩu nhập lại không đồng nhất");
    } else {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
          dataRegister
        );
        toast.success("Đăng ký thành công");
        setEmail(dataRegister.email);
        router.push("/dang-nhap");
      } catch (err: any) {
        toast.error(err.response.data.error);
      }
    }
  };
  return (
    <section className="flex w-full flex-col gap-4 lg:w-[500px] md:w-[80%] mb-5 m-auto">
      <ToastContainer autoClose={1500} />
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
            onChange={(e) =>
              setDataRegister({ ...dataRegister, name: e.target.value })
            }
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
            onChange={(e) =>
              setDataRegister({ ...dataRegister, email: e.target.value })
            }
            placeholder="Email"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col relative gap-1">
          <label htmlFor="">Mật khẩu:</label>
          <input
            className="border rounded p-2 text-black focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, password: e.target.value })
            }
            placeholder="Mật khẩu"
            id=""
          />
          <button
            className="text-[#26b9fe] absolute top-8 right-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEye size={25} />
            ) : (
              <FaRegEyeSlash size={25} />
            )}
          </button>
        </div>
        <div className="flex flex-col relative gap-1">
          <label htmlFor="">Xác nhận mật khẩu:</label>
          <input
            className="border rounded p-2 text-black focus:shadow shadow-[#26b9fe]  outline-none border-gray-300 focus:ring-1 ring-[#26b9fe]"
            type={showPassword2 ? "text" : "password"}
            name="confirmPw"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, confirmPw: e.target.value })
            }
            placeholder="Xác nhận mật khẩu"
            id=""
          />
          <button
            className="text-[#26b9fe] absolute top-8 right-4"
            onClick={() => setShowPassword2(!showPassword2)}
          >
            {showPassword2 ? (
              <FaRegEye size={25} />
            ) : (
              <FaRegEyeSlash size={25} />
            )}
          </button>
        </div>
        <Link href={"/auth/login"}>
          {" "}
          <p className="text-sm flex gap-1 items-center justify-end text-end text-[#288ad6] dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9] cursor-pointer hover:underline  ">
            <TbArrowBackUp /> Đăng nhập
          </p>
        </Link>
      </div>
      <div className="flex text-white flex-col gap-3">
        <button
          onClick={handleRegister}
          className="flex items-center p-2 gap-2 rounded justify-center  text-black font-light bg-[#f7d749] "
        >
          Đăng ký
        </button>
        {/* <button className="flex items-center p-2 gap-2 rounded hover:bg-[#2d4373] bg-[#3b5998] ">
          <FaFacebookF className="text-xl w-[10%]  " />
          <p className="text-xs w-[90%] font-medium text-center ">
            {" "}
            Đăng ký bằng tài khoản Facebook
          </p>
        </button> */}
        <button  className="flex items-center p-2 gap-2 rounded hover:bg-[#dd4b39] bg-[#c23321] ">
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
