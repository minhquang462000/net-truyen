import Link from "next/link";
import { FaHeart, FaRegComment, FaRegEye } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CategoryList from "../List/CategoryList";
import ChangePage from "../Cards/ChangPage";
import PageBookSearchFilter from "./PageBookSearchFilter";
import { getListBooks } from "@/api/books";
import { IFilter } from "@/interfaces";
import { getListCategory } from "@/api/category";
interface IProps {
  status: number;
  sortKey: string;
  q: string;
  page: number;
  IdCategory?: string;
}
export default async function PageBookSearch({
  status,
  sortKey,
  q,
  page,
  IdCategory,
}: IProps) {
  const limit = 20;
  const categories = await getListCategory({ limit: 20 } as IFilter);
  const { data: bookData, total } = (await getListBooks({
    categories: [IdCategory],
    status,
    sortKey,
    page,
    limit,
  } as IFilter)) || { data: [], total: 0 };
  return (
    <main className="w-full   lg:w-[1200px] dark:bg-[#252525] text-black dark:text-white bg-white flex flex-col gap-5 p-3 m-auto">
      <ul className="flex font-medium  flex-wrap lg:font-semibold text-[#288ad6] dark:text-[#ff9601]  items-center gap-1 lg:text-base text-sm">
        <Link href="/">
          {" "}
          <li className="hover:text-[#ae4ad9]  cursor-pointer dark:hover:text-[#ff0000] hover:underline ">
            Trang chủ
          </li>
        </Link>

        <li className=" hover:text-[#ae4ad9] cursor-pointer  flex items-center gap-1 hover:underline ">
          {" "}
          <MdKeyboardDoubleArrowRight color="gray" />
          Thể loại
        </li>
      </ul>
      <section className="lg:grid grid-cols-12 gap-6 ">
        <PageBookSearchFilter
          categories={categories}
          bookData={bookData}
          limit={limit}
          page={page}
          total={total}
          q={q}
          status={status || 0}
          sortKey={sortKey || ""}
        />
        <div className="hidden lg:block w-full col-span-4">
          <CategoryList categories={categories} />
        </div>
      </section>
    </main>
  );
}
