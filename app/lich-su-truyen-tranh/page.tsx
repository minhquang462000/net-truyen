import { MainLayout } from "@/layouts";
import { IoIosArrowForward } from "react-icons/io";
import TitlePage from "@/components/Forms/TitlePage";
import PageHistoryBook from "@/components/Pages/PageHistoryBook";
import { IFilter, PropParams } from "@/interfaces";
import { getListBooks } from "@/api/books";

export interface IAppProps { }

export default async function page({ searchParams }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const { data: booksByView } = await getListBooks({ sortKey: "views" } as IFilter) || { data: [] };
  const { data: bookNew, total } = await getListBooks({ page, limit: 20 } as IFilter) || { data: [] };
  return (
    <MainLayout>
      <main className="w-full dark:bg-[#252525] dark:text-white lg:w-[1200px] border-white flex flex-col bg-white gap-2 p-4 m-auto">
        <TitlePage titlePage="Lịch sử đọc truyện" />
        <h3 className=" flex md:text-xl font-medium dark:text-[#ff9601] items-center gap-1  text-lg text-[#2980b9] ">
          Lịch sử đọc truyện <IoIosArrowForward />
        </h3>
        <PageHistoryBook bookNew={bookNew} page={page} bookTop={booksByView} total={total} />
      </main>
    </MainLayout>
  );
}
