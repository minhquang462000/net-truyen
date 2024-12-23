import { getListBooks } from "@/api/books";
import CardHomePageMAin from "@/components/Cards/CardHomePageMain";
import ChangePage from "@/components/Cards/ChangPage";
import InfoCard from "@/components/Cards/InfoCard";
import HistoryList from "@/components/List/HistoryList";
import SlideHome from "@/components/Slide/SlideHome";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ListBookTop from "@/components/List/ListBookTop";
import RootPagination from "@/components/RootPagination";
import Link from "next/link";

export default async function Home({ searchParams, params }: PropParams) {
  const pageTruyen = (await params).truyen;
  const limit = 20;
  const page = Number((await searchParams)?.page) || 1;
  let title = ""
  let titleSlide = ""
  let category
  switch (pageTruyen) {
    case "truyen-hot":
      title = "Truyện Hot"
      titleSlide = "Truyện Hot Full"
      break;
    case "truyen-con-gai":
      title = "Truyện tranh dành cho con gái"
      titleSlide = "Truyện Con Gái Full"
      category = "673f03704ee65717a7d0beca"
      break;
    case "truyen-con-trai":
      title = "Truyện tranh dành cho con trai"
      titleSlide = "Truyện Con Trai Full"
      category = "673f037f4ee65717a7d0becf"
      break;
    default:
      break;
  }
  const { data: bookFull } = (await getListBooks({
    limit,
    page,
    sortKey: "views",
    status: 2,
    categories: [category],
  } as IFilter)) || { data: [] };

  const { data: bookNew, total } = (await getListBooks({
    sortKey: "views",
    limit,
    page,
    categories: [category],
  } as IFilter)) || { data: [] };
  const { data: bookTopMonth } = (await getListBooks({
    sortKey: "monthly",
  } as IFilter)) || { data: [] };
  return (
    <MainLayout>
      <main className="w-full  lg:w-[1200px] pb-10 dark:bg-[#252525] dark:text-white bg-white flex flex-col gap-5 p-4 m-auto">
        <InfoCard />
        <SlideHome title={titleSlide} bookData={bookFull} />
        <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <section className="lg:col-span-8  w-full">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4 ">
              <nav className="flex justify-between col-span-2 md:col-span-4">
                <h3 className=" flex items-center gap-1 dark:text-[#ff9601]  text-xl font-medium text-[#2980b9] mb-3">
                  {title}
                  <IoIosArrowForward className="hidden md:block" />
                </h3>
                <Link href="/tim-truyen"
                  className="border w-8 text-orange-600 hover:text-[#ae4ad9] md:mt-0 mt-2 border-orange-500 p-[6px] md:h-8 h-7 rounded-full">
                  <FaFilter />
                </Link>
              </nav>
              {bookNew?.map((book: IBook, index: number) => (
                <CardHomePageMAin key={index} book={book} />
              ))}
            </div>
            {bookNew?.length <= 0 && <p className="font-light italic text-gray-500">Không có truyện rồi ...</p>}
            <RootPagination limit={limit} page={page} total={total} />
          </section>
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            <HistoryList />
            <ListBookTop booksInit={bookTopMonth} />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
