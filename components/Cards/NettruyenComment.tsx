import Image from "next/image";
import * as React from "react";
import { GoClock } from "react-icons/go";
import df_avatar from "@/public/images/anonymous.png"
export interface INettruyenCommentProps {}

export default function NettruyenComment(props: INettruyenCommentProps) {
  const [showbtnPost, setShowbtnPost] = React.useState(false);
  return (
    <div className="w-full px-2 text-sm flex flex-col gap-2 lg:text-base p-1">
      <p className="text-[red] italic mt-2 font-medium">
        Bình luận không được tính để tăng cấp độ
      </p>
      <nav className="w-full  flex  flex-col">
        <div>
          <textarea
            onClick={() => setShowbtnPost(true)}
            name=""
            id=""
            placeholder={
              !showbtnPost
                ? "Mời bạn thảo luận, vui lòng không spam,share link kiếm tiền,thiếu lành mạnh,...để tránh bị khoá tài khoản"
                : ""
            }
            className={`w-full text-black  outline-none border p-2 ${
              !showbtnPost ? "h-[80px]" : "h-[120px]"
            }`}
          />
        </div>
        <div className={`w-full  text-start  ${!showbtnPost && "hidden"}`}>
          <input
            placeholder="Họ tên (Bắt buộc)"
            type="text"
            className="border text-black outline-none p-2"
          />{" "}
          <button className=" rounded p-2 px-3  bg-[#385898] font-bold w-max text-white">
            Gửi
          </button>
        </div>
      </nav>
      <tr className="flex flex-col gap-2">
        <td className="w-full gap-2 flex justify-between">
          <div className="flex w-[15%] gap-1 lg:w-[10%] flex-col">
            <Image
              width={100}
              height={100}
              className="w-10 h-10  object-cover "
              src={df_avatar}
              alt=""
            />
          </div>
          <nav className=" flex w-[85%] lg:w-[90%] text-blue-600 flex-col ">
            <div className="border-[0.5px]  lg:px-2  text-sm md:text-base border-gray-300 p">
              <span className="flex items-center  border-b p-2 gap-5">
                <h3 className="font-bold">Nguyễn Minh Quang</h3>
                <p className="italic">Chapter 46</p>
              </span>
              <p className="p-2 w-full ">Truyện như lol</p>
            </div>
            <span className="flex underline decoration-dotted text-xs md:text-sm text-[#777676] items-center gap-1 py-2">
              <GoClock />1 năm trước
            </span>
          </nav>
        </td>
      </tr>
    </div>
  );
}
