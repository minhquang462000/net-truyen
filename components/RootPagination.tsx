"use client";
import { convertNumber } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export interface IRootPaginationProps {
  page: any;
  limit: number;
  total: number;
}
export default function RootPagination(props: IRootPaginationProps) {
  const { page, limit, total } = props;
  const pathName = usePathname();
  const totalPage = Math.ceil(total / Number(limit));
  const nextPage = page + 1 > totalPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  const renderPagination = () => {
    if (totalPage <= 10) {
      return Array.from({ length: totalPage }, (_, index) => (
        <Link href={`${pathName}/?page=${index + 1}`} key={index}>
          <button
            className={`flex items-center ${
              page === index + 1
                ? "bg-[#337AB7] dark:border-transparent text-white"
                : "dark:text-white bg-white dark:border-transparent hover:bg-gray-200 dark:hover:bg-transparent dark:hover:text-[#ff9601] dark:hover:border-[#ff9601]  dark:bg-[#3a3a3a]"
            } 
            w-8 border rounded  flex items-center justify-center h-8 `}
          >
            {index + 1}
          </button>
        </Link>
      ));
    }
    let pages = [page];
    let results: string[] = [];
    const firstPages = [1, 2];
    const lastPages = [totalPage - 1, totalPage];
    let i = 1;
    const doneSides: string[] = [];

    while (pages.length < 7) {
      const left = page - i;
      if (left <= 0 || firstPages.includes(left)) {
        if (!doneSides.includes("left")) {
          const filter = pages.filter((item) => !firstPages.includes(item));
          pages = [...firstPages, ...filter];
          doneSides.push("left");
        }
      } else {
        pages = [left, ...pages];
      }

      const right = page + i;

      if (right > totalPage || lastPages.includes(right)) {
        if (!doneSides.includes("right")) {
          const filter = pages.filter((item) => !lastPages.includes(item));
          pages = [...filter, ...lastPages];
          doneSides.push("right");
        }
      } else {
        if (!pages.includes(right)) {
          pages = [...pages, right];
        }
      }
      i++;
    }

    results = pages.map((item) => item.toString());
    if (!doneSides.includes("left")) {
      results = [
        ...firstPages.map((item) => item.toString()),
        "...",
        ...pages.map((item) => item.toString()),
      ];
    }

    if (!doneSides.includes("right")) {
      results = [
        ...results.map((item) => item.toString()),
        "...",
        ...lastPages.map((item) => item.toString()),
      ];
    }
    return results.map((item, index) => {
      if (item == "...") {
        return (
          <li
            key={index}
            className={` w-8 border rounded cursor-wait bg-white dark:border-transparent dark:bg-[#3a3a3a] dark:text-white dark:hover:border-[#ff9601] dark:horver:text-[#ff9601] dark:hover:bg-transparent hover:bg-gray-200 flex items-end justify-center h-8`}
          >
            {item}
          </li>
        );
      }
      return (
        <Link href={`${pathName}/?page=${item}`} key={index}>
          <button
            className={`flex items-center ${
              parseInt(item) == page
                ? "bg-[#337AB7] dark:border-transparent text-white"
                : "dark:text-white bg-white dark:border-transparent hover:bg-gray-200 dark:hover:bg-transparent dark:hover:text-[#ff9601] dark:hover:border-[#ff9601]  dark:bg-[#3a3a3a]"
            } w-8 border rounded  flex items-center justify-center h-8  `}
          >
            {convertNumber(parseInt(item))}
          </button>
        </Link>
      );
    });
  };
  return (
    <div
      className={`w-max max-w-full m-auto mt-10 p-[1px]  ${
        totalPage <= 1 && "hidden"
      }`}
      aria-label="Page navigation example"
    >
      <ul className="flex justify-center  gap-1 text-sm font-medium flex-wrap items-center text-gray-500">
        <Link href={`${pathName}/?page=${prevPage ?? 1}`}>
          <li
            className={`w-8 border rounded  bg-white dark:bg-[#3a3a3a] dark:hover:bg-transparent dark:hover:text-[#ff9601] dark:border-transparent dark:hover:border-[#ff9601] dark:text-white hover:bg-gray-200 flex items-center justify-center h-8 ${
              page == 1 && "cursor-wait"
            }`}
          >
            <IoIosArrowBack />
          </li>
        </Link>

        {renderPagination()}
        <Link href={`${pathName}/?page=${nextPage ?? totalPage}`}>
          <li
            className={`w-8 border rounded bg-white dark:bg-[#3a3a3a] dark:hover:bg-transparent dark:hover:text-[#ff9601] dark:border-transparent dark:hover:border-[#ff9601] dark:text-white hover:bg-gray-200 flex items-center justify-center h-8 ${
              page == totalPage && "cursor-wait"
            }`}
          >
            <IoIosArrowForward />
          </li>
        </Link>
      </ul>
    </div>
  );
}
