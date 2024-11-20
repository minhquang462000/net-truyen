import SelectPageFollow from "@/components/List/SelectPageFollow";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface IAppProps {}

export default function page(props: IAppProps) {
  return (
    <MainLayout>
      <main className="w-full lg:w-[1200px] border-white flex flex-col bg-white gap-2 p-4 m-auto">
        <ul className="flex  flex-wrap lg:font-semibold text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
          <Link href="/">
            {" "}
            <li className="hover:text-[#ae4ad9] cursor-pointer hover:underline ">
              Trang chủ
            </li>
          </Link>

          <li className=" hover:text-[#ae4ad9] cursor-pointer flex items-center gap-1 hover:underline ">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            Theo dõi
          </li>
        </ul>
        <h3 className=" flex md:text-xl font-medium items-center gap-1  text-lg text-[#2980b9] ">
          Truyện đang theo dõi <IoIosArrowForward />
        </h3>
        <SelectPageFollow />
      </main>
    </MainLayout>
  );
}
