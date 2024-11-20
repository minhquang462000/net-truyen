"use client";
import { IBook, ICategory } from "@/interfaces";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RootPagination from "../RootPagination";
import CardHomePageMAin from "../Cards/CardHomePageMain";
import ListFilterBookMobile from "../List/ListFilterBookMobile";
import ListFilterBookDesktop from "../List/ListFilterBookDesktop";

export interface IAppProps {
  status: number;
  sortKey: string;
  q: string;
  page: number;
  limit: number;
  total: number;
  bookData: IBook[];
  categories: ICategory[];
}

export default function PageBookSearchFilter({
  status,
  categories,
  sortKey,
  q,
  page,
  limit,
  bookData,
  total,
}: IAppProps) {
  const pathName = usePathname();
  const router = useRouter();
  const [sort, setSort] = useState("");
  const [indexQuery, setIndexQuery] = useState(0);
  const [query, setQuery] = useState<{ [key: string]: any }>({
    page,
    limit,
    status,
    sortKey,
    q: sortKey ? "" : q,
  });
  const buildUrl = (filters: Record<string, any>) => {
    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          query.append(key, val);
        });
      } else if (value) {
        query.set(key, value);
      }
    });
    return `${pathName}?${query.toString()}`;
  };
  const handleQuery = (queryType: string, value: any) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      [queryType]: value,
    }));
    const finalUrl = buildUrl({ ...query, [queryType]: value });
    router.push(finalUrl);
  };
  useEffect(() => {
    const sortQuery = sort.split(":");
    if (sortQuery[1] === "q") {
      setIndexQuery(parseInt(sortQuery[0]));
      handleQuery(sortQuery[1], sortQuery[2]);
    }
    if (sortQuery[1] === "sortKey") {
      setIndexQuery(parseInt(sortQuery[0]));
      handleQuery(sortQuery[1], sortQuery[2]);
    }
  }, [sort, handleQuery]);
  useEffect(() => {
    if (q === "new" || q === "undefined") {
      setIndexQuery(0);
    } else if (q === "truyen-moi") {
      setIndexQuery(1);
    } else if (q === "theo-doi") {
      setIndexQuery(6);
    } else if (q === "binh-luan") {
      setIndexQuery(7);
    } else if (q === "chapter") {
      setIndexQuery(8);
    } else if ((q = "follow")) {
      setIndexQuery(9);
    } else if (sortKey === "views") {
      setIndexQuery(2);
    } else if (sortKey === "monthly") {
      setIndexQuery(3);
    } else if (sortKey === "weekly") {
      setIndexQuery(4);
    } else if (sortKey === "day") {
      setIndexQuery(5);
    }
  }, [q]);

  return (
    <div className=" lg:col-span-8 flex flex-col pb-5 md:gap-5 gap-3 ">
      <h4 className="text-2xl text-center">Tất cả thể loại truyện tranh</h4>
      <select
        className="border lg:hidden text-gray-600 border-gray-300 rounded p-1 px-2 w-full"
        name=""
        id=""
      >
        <option className="p-1 px-2" value="">
          Tất cả
        </option>
        {categories.map((category, index) => (
          <option key={index} className="p-1 px-2" value={category?._id}>
            {category?.name}
          </option>
        ))}
      </select>
      <p className="border border-gray-300 p-1 px-2 lg:p-3 lg:text-base text-sm">
        Tất cả các thể loại truyện tranh
      </p>
      <ul className="flex  justify-center text-sm items-center gap-1">
        <li
          onClick={() => handleQuery("status", 0)}
          className={`border border-gray-300 ${
            status === 0
              ? "bg-[#00B9F2] text-white  border-[#00b9f2] "
              : "dark:bg-white"
          } cursor-pointer  p-1 text-gray-600    px-2 rounded-md min-w-[100px] text-center`}
        >
          Tất cả
        </li>
        <li
          onClick={() => handleQuery("status", 2)}
          className={`border border-gray-300 ${
            status === 2
              ? "bg-[#00B9F2] text-white  border-[#00b9f2] "
              : "dark:bg-white"
          }   cursor-pointer p-1 text-gray-600    px-2 rounded-md min-w-[100px] text-center`}
        >
          Hoàn thành
        </li>
        <li
          onClick={() => handleQuery("status", 1)}
          className={`border border-gray-300 ${
            status === 1
              ? "bg-[#00B9F2] text-white  border-[#00b9f2] 0"
              : "dark:bg-white"
          }  cursor-pointer  p-1 text-gray-600    px-2 rounded-md min-w-[100px] text-center`}
        >
          Đang tiến hành
        </li>
      </ul>
      <section className="flex outline-none flex-col md:flex-row gap-1">
        <p className="md:w-1/4 md:mt-5">Sắp xếp theo:</p>
        <ListFilterBookMobile setSort={setSort} />
        <ListFilterBookDesktop
          status={status}
          page={page}
          limit={limit}
          setIndexQuery={setIndexQuery}
          indexQuery={indexQuery}
        />
      </section>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
        {bookData?.map((book, index) => (
          <CardHomePageMAin key={index} book={book} />
        ))}
      </div>
      <RootPagination
        limit={limit}
        page={page}
        handleQuery={handleQuery}
        total={total}
      />
      <h4 className="font-bold text-lg">Bình luận Facebook</h4>
    </div>
  );
}
