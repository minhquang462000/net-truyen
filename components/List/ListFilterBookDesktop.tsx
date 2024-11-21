"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaRegComment, FaRegEye } from "react-icons/fa";
import { IoList } from "react-icons/io5";
export interface IAppProps {
  handleQuery: any;
  query: string;
}

export default function ListFilterBookDesktop({
  query,
  handleQuery,
}: IAppProps) {
  const cssLi = `flex items-center  justify-center gap-1  w-max border text-sm  p-1 px-2 border-gray-300 rounded  cursor-pointer`;
  return (
    <div className="hidden  md:w-3/4  md:block">
      <ul className="w-full font-medium   flex flex-wrap gap-2 mt-2 text-gray-600 border-white">
        <li
          onClick={() => handleQuery("q", "new")}
          className={`${cssLi} ${
            query === "new" || !query
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          } `}
        >
          Ngày cập nhật
        </li>
        <li
          onClick={() => handleQuery("q", "truyen-moi")}
          className={`${cssLi} ${
            query === "truyen-moi"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          Truyện mới
        </li>
        <li
          onClick={() => handleQuery("q", "views")}
          className={`${cssLi} ${
            query == "views"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <FaRegEye className="text-lg " />
          Top all
        </li>

        <li
          onClick={() => handleQuery("q", "monthly")}
          className={`${cssLi} ${
            query === "monthly"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <FaRegEye className="text-lg " />
          Top tháng
        </li>

        <li
          onClick={() => handleQuery("q", "weekly")}
          className={`${cssLi} ${
            query === "weekly"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <FaRegEye className="text-lg " />
          Top tuần
        </li>

        <li
          onClick={() => handleQuery("q", "day")}
          className={`${cssLi} ${
            query === "day"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <FaRegEye className="text-lg " />
          Top ngày
        </li>
        <li
          onClick={() => handleQuery("q", "theo-doi")}
          className={`${cssLi} ${
            query === "theo-doi"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <FaHeart className="text-lg " />
          Theo dõi
        </li>
        <li
          onClick={() => handleQuery("q", "binh-luan")}
          className={`${cssLi} ${
            query === "binh-luan"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <FaRegComment className="text-lg " />
          Bình luận
        </li>
        <li
          onClick={() => handleQuery("q", "chapter")}
          className={`${cssLi} ${
            query === "chapter"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <IoList className="text-lg " />
          Số chapter
        </li>
        <li
          onClick={() => handleQuery("q", "follow")}
          className={`${cssLi} ${
            query === "follow"
              ? "bg-[#f7941d] text-white  border-[#f7941d]"
              : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
          }`}
        >
          <IoList className="text-lg " />
          Top Follow
        </li>
      </ul>
    </div>
  );
}
