'use client'
import ChangePage from '../Cards/ChangPage';
import { usePathname } from 'next/navigation';
import { FaHeart, FaRegComment, FaRegEye } from 'react-icons/fa';
import { IoList } from 'react-icons/io5';

export interface IAppProps {
    status: number
    sortKey: string
}

export default function PageBookSearchFilter({ status, sortKey }: IAppProps) {
    const pathName = usePathname();
    const cssLi = `flex items-center min-w-[120px] justify-center gap-1 w-max border  p-1 px-2 border-gray-300 rounded  cursor-pointer`
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
                    Action
                </option>
            </select>
            <p className="border border-gray-300 p-1 px-2 lg:p-3 lg:text-base text-sm">
                Tất cả các thể loại truyện tranh
            </p>
            <ul className="flex  justify-center items-center gap-1">
                <li
                    className={`border border-gray-300 ${status === 0 ? "bg-[#00B9F2] text-white" : ""} cursor-pointer  p-1 text-gray-600 rounded-md min-w-[100px] text-center`}
                >
                    Tất cả
                </li>
                <li
                    className={`border border-gray-300 ${status === 2 ? "bg-[#00B9F2] text-white" : ""}   cursor-pointer p-1 text-gray-600 rounded-md min-w-[100px] text-center`}
                >
                    Hoàn thành
                </li>
                <li
                    className={`border border-gray-300 ${status === 1 ? "bg-[#00B9F2] text-white" : ""}  cursor-pointer  p-1 text-gray-600 rounded-md min-w-[100px] text-center`}
                >
                    Đang tiến hành
                </li>
            </ul>
            <section className="flex outline-none flex-col md:flex-row gap-1">
                <p className="md:w-1/4 md:mt-5">Sắp xếp theo:</p>
                <select
                    className="border md:hidden text-gray-600 border-gray-300 rounded p-1 px-2 w-full"
                    name=""
                    id=""
                >
                    <option value="">Ngày cật nhật</option>
                    <option value="">Truyện mới</option>
                    <option value="">Top All</option>
                    <option value="">Top tháng</option>
                    <option value="">Top tuần</option>
                    <option value="">Top ngày</option>
                    <option value="">Theo dõi</option>
                    <option value="">Bình luận</option>
                    <option value="">Số chapter</option>
                    <option value="">Top Follow</option>
                </select>
                <div className="hidden  md:w-3/4  md:block">
                    <ul className="w-full font-medium   flex flex-wrap gap-2 mt-2 text-gray-600 border-white">
                        <li className={cssLi}>
                            Ngày cập nhật
                        </li>
                        <li className={cssLi}>
                            Truyện mới
                        </li>
                        <li className={cssLi}>
                            <FaRegEye className="text-lg " />
                            Top all
                        </li>

                        <li className={cssLi}>
                            <FaRegEye className="text-lg " />
                            Top tháng
                        </li>

                        <li className={cssLi}>
                            <FaRegEye className="text-lg " />
                            Top tuần
                        </li>

                        <li className={cssLi}>
                            <FaRegEye className="text-lg " />
                            Top ngày
                        </li>

                        <li className={cssLi}>
                            <FaHeart className="text-lg " />
                            Theo dõi
                        </li>
                        <li className={cssLi}>
                            <FaRegComment className="text-lg " />
                            Bình luận
                        </li>
                        <li className={cssLi}>
                            <IoList className="text-lg " />
                            Số chapter
                        </li>
                        <li className={cssLi}>
                            <IoList className="text-lg " />
                            Top Follow
                        </li>
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
            <ChangePage />
            <h4 className="font-bold text-lg">Bình luận Facebook</h4>
        </div>
    );
}
