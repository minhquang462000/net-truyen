import { MainLayout } from "@/layouts";
import { IoIosArrowForward } from "react-icons/io";
import TitlePage from "@/components/Forms/TitlePage";
import PageHistoryBook from "@/components/Pages/PageHistoryBook";

export interface IAppProps {}

export default function page(props: IAppProps) {
  return (
    <MainLayout>
      <main className="w-full lg:w-[1200px] border-white flex flex-col bg-white gap-2 p-4 m-auto">
        <TitlePage titlePage="Lịch sử đọc truyện" />
        <h3 className=" flex md:text-xl font-medium items-center gap-1  text-lg text-[#2980b9] ">
          Lịch sử đọc truyện <IoIosArrowForward />
        </h3>
        <PageHistoryBook />
      </main>
    </MainLayout>
  );
}
