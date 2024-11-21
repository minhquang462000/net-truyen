import { IBook } from "@/interfaces";
import { convertToSlug, formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { format } from "path";
import { BsFillTagsFill } from "react-icons/bs";
import { FaHeart, FaRegEye, FaThumbsUp, FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { RiRssFill } from "react-icons/ri";
export interface IAppProps {
  book: IBook;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function ItemCardMain({ book }: IAppProps) {
  return (
    <div className="w-full flex dark:text-white  flex-col gap-5 ">
      <nav className="text-center">
        <h1 className="text-xl lg:text-2xl font-medium">{book?.name}</h1>
        <p className="lg:text-xs dark: text-[#fafafa] text-sm opacity-70 italic">
          [Cập nhật lúc: {formatDate(book?.createdAt)}]
        </p>
      </nav>
      <div className="grid text-lg md:grid-cols-3  gap-3 w-full">
        <Image
          width={250}
          height={350}
          className="mx-auto w-[250px] h-[350px] object-cover cursor-pointer"
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt=""
        />
        <div className="md:col-span-2 flex flex-col gap-3  lg:gap-4 p-3 lg:text-lg">
          <ul className="font-medium flex flex-col gap-3 dark:text-white text-[#777676]">
            <li className="flex ">
              <span className="flex gap-1 items-center w-[40%]">
                <FaUser />
                Tác giả
              </span>{" "}
              <span className="w-[60%]">{book?.authors[0].name}</span>
            </li>
            <li className="flex ">
              <span className="flex gap-1 items-center w-[40%]">
                <RiRssFill />
                Tình trạng
              </span>{" "}
              <span className="w-[60%]">
                {book?.status === 0
                  ? "Sắp ra mắt"
                  : book?.status === 1
                  ? "Đang tiến hành"
                  : "Hoàn Thành"}
              </span>
            </li>
            <li className="flex w-full items-start justify-between">
              <span className="flex gap-1 items-center w-[40%]">
                {" "}
                <BsFillTagsFill />
                Thể loại
              </span>{" "}
              <ul className=" flex flex-wrap  w-[60%] text-[#288ad6] dark:text-[#ff9601] gap-x-2 ">
                {book?.categories.map((category, index) => (
                  <li
                    key={index}
                    className="hover:text-[#ae4ad9] font-normal dark:hover:text-[#ff0000] hover:underline"
                  >
                    {category?.name},
                  </li>
                ))}
              </ul>
            </li>
            <li className="flex ">
              <span className="flex gap-1 items-center w-[40%]">
                <FaRegEye />
                Lượt xem
              </span>{" "}
              <span className="w-[60%] ">{book?.views || 0}</span>
            </li>
          </ul>
          <p className="text-wrap font-light">
            <span className="text-[#288ad6] dark:text-[#ff9601] dark:hover:text-[#ff0000]  cursor-pointer hover:text-[#ae4ad9] hover:underline font-medium mr-2">
              {book?.name}
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
              <button className="bg-[#d9534f] border border-[#d43f3a] flex items-center gap-1 p-2 py-1 rounded-md hover:bg-[#c9302c]">
                <FaHeart /> Theo dõi
              </button>
              <span className=" text-sm">
                <b className="text-base">{book?.views}</b> Người Đã Theo Dõi
              </span>
            </div>
            <div className="flex md:gap-2  gap-1">
              <Link
                href={`/truyen/${convertToSlug(book?.name)}/chapter-1.html}`}
              >
                <button className="bg-[#f0ad4e] p-2 py-1 rounded-md border hover:bg-[#ec971f] border-[#eea236]">
                  Đọc từ đầu
                </button>
              </Link>
              <Link
                href={`/truyen/${convertToSlug(book?.name)}/chapter-end.html}`}
              >
                <button className="bg-[#f0ad4e] p-2 py-1 rounded-md border hover:bg-[#ec971f] border-[#eea236]">
                  Đọc mới nhất
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
