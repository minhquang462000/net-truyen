
import { getListBooks } from "@/api/books";
import CardHomePageMAin from "@/components/Cards/CardHomePageMain";
import ChangePage from "@/components/Cards/ChangPage";
import InfoCard from "@/components/Cards/InfoCard";
import HistoryList from "@/components/List/HistoryList";
import SlideHome from "@/components/Slide/SlideHome";
import { IBook, IFilter } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ListBookTop from "@/components/List/ListBookTop";

export default async function Home() {
  const { data: bookNew } = await getListBooks({} as IFilter) || { data: [] };
  const { data: bookTop } = await getListBooks({ sortKey: "views" } as IFilter) || { data: [] };
  return (
    <MainLayout>
      <main className="w-screen lg:w-[1200px] dark:bg-[#252525] dark:text-white bg-white flex flex-col gap-5 p-4 m-auto">
        <InfoCard />
        <SlideHome bookData={bookTop} />
        <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <section className="lg:col-span-8  w-full">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
              <nav className="flex justify-between col-span-2 md:col-span-4">
                <h3 className=" flex items-center gap-1  text-lg text-[#2980b9] mb-3">
                  NetTruyen Chính thức - Đọc truyện tranh miễn phí{" "}
                  <IoIosArrowForward className="hidden md:block" />
                </h3>
                <button className="border w-8 text-orange-600 hover:text-[#ae4ad9] md:mt-0 mt-2 border-orange-500 p-[6px] md:h-8 h-7 rounded-full">
                  <FaFilter />
                </button>
              </nav>
              {bookNew?.map((book: IBook, index: number) => <CardHomePageMAin key={book._id} book={book} />)}
            </div>
            <ChangePage />
          </section>
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            <HistoryList />
            <ListBookTop />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
