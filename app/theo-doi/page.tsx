
import TitlePage from "@/components/Forms/TitlePage";
import SelectPageFollow from "@/components/List/SelectPageFollow";
import { IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { IoIosArrowForward } from "react-icons/io";
import { getListBooks, getListFavorite } from "@/api/books";
import { cookies } from "next/headers";

export interface IAppProps { }

export default async function page({ searchParams }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const cookie = await cookies();
  const userId = cookie.get("user")?.value || "";
  const { data: booksByView } = await getListBooks({ sortKey: "views" } as IFilter) || { data: [] };
  const { data: followList, total } = await getListFavorite({ limit: 20, page } as IFilter)
    || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="w-full lg:w-[1200px] border-white dark:text-white dark:bg-[#252525] flex flex-col bg-white gap-2 p-4 m-auto">
        <TitlePage titlePage="Truyện đang theo dõi" />
        <h3 className=" flex md:text-xl font-medium dark:text-[#ff9601] items-center gap-1  text-lg text-[#2980b9] ">
          Truyện đang theo dõi <IoIosArrowForward />
        </h3>
        <SelectPageFollow listBookByView={booksByView} page={page} total={total} userId={userId}   followList={followList} />
      </main>
    </MainLayout>
  );
}
