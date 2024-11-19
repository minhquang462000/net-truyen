"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaRegComment, FaRegEye } from "react-icons/fa";
import { IoList } from "react-icons/io5";
export interface IAppProps {
  status: number;
  page: number;
  limit: number;
  setIndexQuery: (index: number) => void;
  indexQuery: number;
}

export default function ListFilterBookDesktop({
  status,
  page,
  limit,
  setIndexQuery,
  indexQuery,
}: IAppProps) {
    const pathName = usePathname();
    const cssLi = `flex items-center  justify-center gap-1  w-max border text-sm  p-1 px-2 border-gray-300 rounded  cursor-pointer`;
  return (
    <div className="hidden  md:w-3/4  md:block">
      <ul className="w-full font-medium   flex flex-wrap gap-2 mt-2 text-gray-600 border-white">
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=new`}
        >
          <li
            onClick={() => setIndexQuery(0)}
            className={`${cssLi} ${
              indexQuery === 0
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            } `}
          >
            Ngày cập nhật
          </li>
        </Link>
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=truyen-moi`}
        >
          <li
            onClick={() => setIndexQuery(1)}
            className={`${cssLi} ${
              indexQuery === 1
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            Truyện mới
          </li>
        </Link>
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=views`}
        >
          <li
            onClick={() => setIndexQuery(2)}
            className={`${cssLi} ${
              indexQuery == 2
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <FaRegEye className="text-lg " />
            Top all
          </li>
        </Link>

        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=monthly`}
        >
          <li
            onClick={() => setIndexQuery(3)}
            className={`${cssLi} ${
              indexQuery === 3
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <FaRegEye className="text-lg " />
            Top tháng
          </li>
        </Link>

        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=weekly`}
        >
          <li
            onClick={() => setIndexQuery(4)}
            className={`${cssLi} ${
              indexQuery === 4
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <FaRegEye className="text-lg " />
            Top tuần
          </li>
        </Link>

        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=day`}
        >
          <li
            onClick={() => setIndexQuery(5)}
            className={`${cssLi} ${
              indexQuery === 5
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <FaRegEye className="text-lg " />
            Top ngày
          </li>
        </Link>
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=theo-doi`}
        >
          <li
            onClick={() => setIndexQuery(6)}
            className={`${cssLi} ${
              indexQuery === 6
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <FaHeart className="text-lg " />
            Theo dõi
          </li>
        </Link>
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=binh-luan`}
        >
          <li
            onClick={() => setIndexQuery(7)}
            className={`${cssLi} ${
              indexQuery === 7
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <FaRegComment className="text-lg " />
            Bình luận
          </li>
        </Link>
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=chapter`}
        >
          <li
            onClick={() => setIndexQuery(8)}
            className={`${cssLi} ${
              indexQuery === 8
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <IoList className="text-lg " />
            Số chapter
          </li>
        </Link>
        <Link
          href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=follow`}
        >
          <li
            onClick={() => setIndexQuery(9)}
            className={`${cssLi} ${
              indexQuery === 9
                ? "bg-[#f7941d] text-white  border-[#f7941d]"
                : "dark:bg-[#fff] dark:hover:text-[#ff0000]"
            }`}
          >
            <IoList className="text-lg " />
            Top Follow
          </li>
        </Link>
      </ul>
    </div>
  );
}
