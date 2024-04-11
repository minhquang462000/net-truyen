import * as React from "react";
import { BsFillTagsFill } from "react-icons/bs";
import { FaHeart, FaRegEye, FaThumbsUp, FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { RiRssFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export interface IItemCardMainProps {}

export default function ItemCardMain(props: IItemCardMainProps) {
  return (
    <div className="w-full flex flex-col gap-5 ">
      <nav className="text-center">
        <h1 className="text-xl lg:text-2xl font-medium">KIẾM NGHỊCH THƯƠNG KHUNG</h1>
        <p className="lg:text-xs text-sm opacity-70 italic">
          [Cập nhật lúc: 2024-04-10 07:00:14]
        </p>
      </nav>
      <nav className="grid text-lg md:grid-cols-3  gap-3 w-full">
        <img
          className="mx-auto w-[250px] h-[350px] object-cover cursor-pointer"
          src="https://cdnnvd.com/nettruyen/thumb/kiem-nghich-thuong-khung.jpg"
          alt=""
        />
        <div className="md:col-span-2 flex flex-col gap-3  lg:gap-4 p-3 lg:text-xl">
          <ul className="font-medium flex flex-col gap-3 text-[#777676]">
            <li className="flex ">
              <span className="flex gap-1 items-center w-[40%]">
                <FaUser />
                Tác giả
              </span>{" "}
              <span className="w-[60%]">Đang cập nhật</span>
            </li>
            <li className="flex ">
              <span className="flex gap-1 items-center w-[40%]">
                <RiRssFill />
                Tình trạng
              </span>{" "}
              <span className="w-[60%]">Đang tiến hành</span>
            </li>
            <li className="flex w-full items-start justify-between">
              <span className="flex gap-1 items-center w-[40%]">
                {" "}
                <BsFillTagsFill />
                Thể loại
              </span>{" "}
              <ul className=" flex flex-wrap w-[60%] text-[#288ad6] gap-x-2 ">
                <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline">Action</li>
                <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline">
                  Adventure
                </li>
                <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline">Manhua</li>
                <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline">
                  Mystery
                </li>
                <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline">
                  Shounen
                </li>
                <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline">
                  Truyện màu
                </li>
              </ul>
            </li>
            <li className="flex ">
              <span className="flex gap-1 items-center w-[40%]">
                <FaRegEye />
                Lượt xem
              </span>{" "}
              <span className="w-[60%] ">1.234.567</span>
            </li>
          </ul>
          <p className="text-wrap font-light">
            <span className="text-[#288ad6] cursor-pointer hover:text-[#ae4ad9] hover:underline font-medium mr-2">
              Kiếm Nghịch Thương khung
            </span>
            Xếp hạng: 4.5/5 - 914179 Lượt đánh giá.
          </p>
          <nav className="flex justify-between">
            <div className="flex gap-5 cursor-pointer">
              <IoStar className="text-yellow-500 text-2xl" />
              <IoStar className="text-yellow-500 text-2xl" />
              <IoStar className="text-yellow-500 text-2xl" />
              <IoStar className="text-yellow-500 text-2xl" />
              <IoStar className="text-yellow-500 text-2xl" />
            </div>
            <div className="flex text-white text-xs font-semibold gap-2 items-center">
              <button className="bg-[#1877f2] flex items-center gap-1 px-2 p-1 rounded ">
                <FaThumbsUp />
                Like 0
              </button>
              <button className="bg-[#1877f2] px-2 py-1 rounded ">Share</button>
            </div>
          </nav>
          <nav className="text-white text-sm lg:text-base flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <button className="bg-[#d9534f] border border-[d43f3a] flex items-center gap-1 p-2 rounded-md hover:bg-[#c9302c]">
                <FaHeart /> Theo dõi
              </button>
              <span className="text-black text-sm">
                <b className="text-base">3.290.931</b> Người Đã Theo Dõi
              </span>
            </div>
            <div className="flex md:gap-2  gap-1">
              <button className="bg-[#f0ad4e] p-2 rounded-md border hover:bg-[#ec971f] border-[#eea236]">
                Đọc từ đầu
              </button>
              <button className="bg-[#f0ad4e] p-2 rounded-md border hover:bg-[#ec971f] border-[#eea236]">
                Đọc mới nhất
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
