'use client'
import { IBook, ICategory, IFilter } from '@/interfaces';
import ChangePage from '../Cards/ChangPage';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegComment, FaRegEye } from 'react-icons/fa';
import { IoList } from 'react-icons/io5';
import Link from 'next/link';
import RootPagination from '../RootPagination';

export interface IAppProps {
    status: number
    sortKey: string
    q: string
    page: number
    limit: number
    bookData: IBook[]
    categories: ICategory[]
}

export default function PageBookSearchFilter({ status, categories, sortKey, q, page, limit, bookData }: IAppProps) {
    const pathName = usePathname();
    const router = useRouter();
    const [sort, setSort] = useState("");
    useEffect(() => {
        const sortQuery = sort.split(":");
        if (sortQuery[0] === "q") {
            handleQuery("sortKey", "");
            handleQuery(sortQuery[0], sortQuery[1]);
        }
        if (sortQuery[0] === "sortKey") {
            handleQuery(sortQuery[0], sortQuery[1]);
        }
    }, [sort]);
    useEffect(() => {
      if (q ==="new") {setIndex}
    }, [])
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
    const cssLi = `flex items-center  justify-center gap-1  w-max border text-sm  p-1 px-2 border-gray-300 rounded  cursor-pointer`

    return (
        <div className=" lg:col-span-8 flex flex-col md:gap-5 gap-3 ">
            <h4 className="text-2xl text-center">
                Tất cả thể loại truyện tranh
            </h4>
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
                <li onClick={() => handleQuery("status", 0)}
                    className={`border border-gray-300 ${status === 0 ? "bg-[#00B9F2] text-white  border-[#00b9f2] " : "dark:bg-white"} cursor-pointer  p-1 text-gray-600    px-2 rounded-md min-w-[100px] text-center`}
                >
                    Tất cả
                </li>
                <li onClick={() => handleQuery("status", 2)}
                    className={`border border-gray-300 ${status === 2 ? "bg-[#00B9F2] text-white  border-[#00b9f2] " : "dark:bg-white"}   cursor-pointer p-1 text-gray-600    px-2 rounded-md min-w-[100px] text-center`}
                >
                    Hoàn thành
                </li>
                <li onClick={() => handleQuery("status", 1)}
                    className={`border border-gray-300 ${status === 1 ? "bg-[#00B9F2] text-white  border-[#00b9f2] 0" : "dark:bg-white"}  cursor-pointer  p-1 text-gray-600    px-2 rounded-md min-w-[100px] text-center`}
                >
                    Đang tiến hành
                </li>
            </ul>
            <section className="flex outline-none flex-col md:flex-row gap-1">
                <p className="md:w-1/4 md:mt-5">Sắp xếp theo:</p>
                <select
                    onChange={(e) => setSort(e.target.value)}
                    className="border md:hidden text-gray-600   dark:bg-white  border-gray-300 rounded p-1 px-2 w-full"
                    name=""
                    id=""
                >
                    <option value="q:new">Ngày cật nhật</option>
                    <option value="q:truyen-moi">Truyện mới</option>
                    <option value="sortKey:views">Top All</option>
                    <option value="sortKey:monthly">Top tháng</option>
                    <option value="sortKey:weekly">Top tuần</option>
                    <option value="sortKey:day">Top ngày</option>
                    <option value="q:theo-doi">Theo dõi</option>
                    <option value="q:binh-luan">Bình luận</option>
                    <option value="q:so-chapter">Số chapter</option>
                    <option value="q:top-follow">Top Follow</option>
                </select>
                <div className="hidden  md:w-3/4  md:block">
                    <ul className="w-full font-medium   flex flex-wrap gap-2 mt-2 text-gray-600 border-white">
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=new`} >
                            <li
                                onClick={() => setIndexQuery(0)}
                                className={`${cssLi} ${indexQuery === 0 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"} `}>
                                Ngày cập nhật
                            </li>
                        </Link>
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=truyen-moi`}>
                            <li
                                onClick={() => setIndexQuery(1)}
                                className={`${cssLi} ${indexQuery === 1 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                Truyện mới
                            </li>
                        </Link>
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=views`}>
                            <li
                                onClick={() => setIndexQuery(2)}
                                className={`${cssLi} ${indexQuery == 2 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <FaRegEye className="text-lg " />
                                Top all
                            </li>
                        </Link>

                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=monthly`}>
                            <li
                                onClick={() => setIndexQuery(3)}
                                className={`${cssLi} ${indexQuery === 3 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <FaRegEye className="text-lg " />
                                Top tháng
                            </li>
                        </Link>

                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=weekly`}>
                            <li
                                onClick={() => setIndexQuery(4)}
                                className={`${cssLi} ${indexQuery === 4 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <FaRegEye className="text-lg " />
                                Top tuần
                            </li>
                        </Link>

                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&sortKey=day`}>
                            <li
                                onClick={() => setIndexQuery(5)}
                                className={`${cssLi} ${indexQuery === 5 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <FaRegEye className="text-lg " />
                                Top ngày
                            </li>
                        </Link>
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=theo-doi`}>
                            <li
                                onClick={() => setIndexQuery(6)}
                                className={`${cssLi} ${indexQuery === 6 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <FaHeart className="text-lg " />
                                Theo dõi
                            </li>
                        </Link>
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=binh-luan`}>
                            <li
                                onClick={() => setIndexQuery(7)}
                                className={`${cssLi} ${indexQuery === 7 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <FaRegComment className="text-lg " />
                                Bình luận
                            </li>
                        </Link>
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=so-chapter`}>
                            <li
                                onClick={() => setIndexQuery(8)}
                                className={`${cssLi} ${indexQuery === 8 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <IoList className="text-lg " />
                                Số chapter
                            </li>
                        </Link>
                        <Link href={`${pathName}?status=${status}&page=${page}&limit=${limit}&q=top-follow`}>
                            <li
                                onClick={() => setIndexQuery(9)}
                                className={`${cssLi} ${indexQuery === 9 ? "bg-[#f7941d] text-white  border-[#f7941d]" : "dark:bg-[#fff] dark:hover:text-[#ff0000]"}`}>
                                <IoList className="text-lg " />
                                Top Follow
                            </li>
                        </Link>
                    </ul>
                </div>
            </section>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
                {/* <CardHomePageMAin />
        <CardHomePageMAin />
        <CardHomePageMAin />
        <CardHomePageMAin />
        <CardHomePageMAin /> */}
            </div>
            <RootPagination limit={limit} page={page} handleQuery={handleQuery} total={200} />
            <h4 className="font-bold text-lg">Bình luận Facebook</h4>
        </div>
    );
}
