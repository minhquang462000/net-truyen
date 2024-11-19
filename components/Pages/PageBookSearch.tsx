
import Link from "next/link";
import { FaHeart, FaRegComment, FaRegEye } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import {
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import CategoryList from "../List/CategoryList";
import ChangePage from "../Cards/ChangPage";
import PageBookSearchFilter from "./PageBookSearchFilter";
interface IProps {
    status: number
    sortKey: string
}
export default function PageBookSearch({ status, sortKey }: IProps) {
    return (
        <main className="w-screen   lg:w-[1200px] text-black bg-white flex flex-col gap-5 p-3 m-auto">
            <ul className="flex font-medium  flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
                <Link href="/">
                    {" "}
                    <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline ">
                        Trang chủ
                    </li>
                </Link>

                <li className=" hover:text-[#ae4ad9] cursor-pointer flex items-center gap-1 hover:underline ">
                    {" "}
                    <MdKeyboardDoubleArrowRight color="gray" />
                    Thể loại
                </li>
            </ul>
            <section className="lg:grid grid-cols-12 gap-6 ">
                <PageBookSearchFilter status={status} sortKey={sortKey} />
                <div className="hidden lg:block w-full col-span-4">
                    <CategoryList />
                </div>
            </section>
        </main>
    );
}
