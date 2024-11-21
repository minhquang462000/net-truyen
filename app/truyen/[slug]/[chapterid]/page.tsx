import CommentListItem from "@/components/List/CommentListItem";
import { MainLayout } from "@/layouts";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaHome, FaListUl, FaUndo } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosWarning,
} from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img_chapter from "@/public/images/image_chapter.jpg";
export interface IpageProps { }

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="w-full  dark:bg-[#252525] dark:text-white  lg:w-[1200px] bg-white flex flex-col gap-2 p-2  m-auto">
        <ul className="flex  font-medium flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
          <Link href="/">
            {" "}
            <li className="hover:text-[#ae4ad9] dark:hover:text-white dark:text-white cursor-pointer hover:underline  ">
              Trang chủ
            </li>
          </Link>
          <li className=" hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Thể loại
          </li>

          <li className="hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Kiếm nghịch thương khung
          </li>
          <li className="hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Chapter 1
          </li>
        </ul>
        <nav className=" text-xl flex gap-1 flex-col">
          <span className="flex flex-wrap gap-1 ">
            <h3 className="hover:text-[#ae4ad9] cursor-pointer hover:underline font-medium text-[#288ad6]">
              Kiếm Nghịch Thương Khung{" "}
            </h3>
            <p>- Chapter 1</p>
          </span>
          <p className="text-base italic ">
            [Cập nhật lúc: 2024-03-15 06:50:13]
          </p>
        </nav>
        <section className="text-center flex flex-col gap-2 justify-center">
          <nav className="flex text-sm justify-center">
            <div className="w-2 md:w-6  relative">
              <span className="animate-ping absolute w-3 h-3 top-1 left-1  inline-flex  rounded-full bg-red-500 opacity-75"></span>
              <span className="absolute w-3 h-3 top-1 left-1 inline-flex rounded-full bg-red-500"></span>
            </div>
            <h3 className="">
              Nếu không xem được truyện vui lòng đổi{" "}
              <span className="hover:text-[#ae4ad9] cursor-pointer hover:underline font-medium text-[#288ad6]">
                {`"SERVER ẢNH"`}
              </span>{" "}
              bên dưới
            </h3>
          </nav>
          <p className="text-[#ff0000] font-bold text-sm px-3">
            {`  Vui lòng bấm "BÁO LỖI" nếu không xem được truyện`}
          </p>
          <div className="flex gap-1 justify-center text-white font-medium">
            <button className="hover:bg-[#449b44] bg-[#5cb85c] p-1 px-2  rounded-md border border-[#4cae4c]">
              Server 1
            </button>
            <button className="hover:bg-[#286090] bg-[#337ab7] p-1 px-2  rounded-md border border-[#204d74]">
              Server 2
            </button>
          </div>
          <button className="bg-[#f0ad4e] p-1 px-2 w-max m-auto rounded-md flex items-center text-white gap-1 font-medium border hover:bg-[#ec971f] border-[#eea236]">
            <IoIosWarning /> Báo lỗi
          </button>
          <div className="flex items-center gap-2 overflow-hidden justify-center">
            <div className="flex items-center gap-3">
              <FaHome className="cursor-pointer text-xl text-[#d9534f] hover:text-[#c9302c]" />
              <FaListUl className="cursor-pointer text-xl text-[#d9534f] hover:text-[#c9302c]" />
              <FaUndo className="cursor-pointer text-xl text-[#d9534f] hover:text-[#c9302c]" />
            </div>
            <nav className="flex items-center justify-between max-w-[400px] lg:justify-center w-[50%] gap-1">
              <IoIosArrowBack className="text-white cursor-pointer font-bold bg-[#d9534f] w-8 h-8 p-1 rounded-l-md hover:bg-[#c9302c]" />
              <select className="border p-1 w-[90%] " name="" id="">
                <option value="">Chapter 1</option>
                <option value="">Chapter 2</option>
              </select>
              <IoIosArrowForward className="text-white cursor-pointer font-bold bg-[#d9534f] w-8 h-8 p-1 rounded-r-md hover:bg-[#c9302c]" />
            </nav>
            <button className="bg-[#d9534f] text-white text-xs font-bold border h-8 border-[d43f3a] flex items-center gap-1  p-1 rounded-md hover:bg-[#c9302c]">
              <FaHeart /> Theo dõi
            </button>
          </div>
        </section>
        <ul className="w-full py-4 flex justify-center items-center flex-col bg-black gap-1">
          {Array.from({ length: 20 }).map((_, index) => (
            <li key={index}>
              <Image
                width={600}
                height={1000}
                className="w-full aspect-[3/4] lg:w-[600px] object-cover"
                src={img_chapter}
                alt=""
              />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-1">
          <button className="bg-[#d9534f] text-white text-xs font-bold border h-8 border-[d43f3a] flex items-center gap-1  p-1 px-2 rounded-md hover:bg-[#c9302c]">
            <IoIosArrowBack size={15} /> Chap trước
          </button>
          <button className="bg-[#d9534f] text-white text-xs font-bold border h-8 border-[d43f3a] flex items-center gap-1  p-1 px-2 rounded-md hover:bg-[#c9302c]">
            Chap sau
            <IoIosArrowForward size={15} />
          </button>
        </div>
        <ul className="flex  font-medium flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
          <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline ">
            Trang chủ
          </li>

          <li className=" hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Thể loại
          </li>

          <li className="hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Kiếm nghịch thương khung
          </li>
          <li className="hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Chapter 1
          </li>
        </ul>
        <CommentListItem />
      </main>
    </MainLayout>
  );
}
