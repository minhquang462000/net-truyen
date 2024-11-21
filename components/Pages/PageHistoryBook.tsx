"use client";
import HistoryListFromDevice from "../List/HistoryListFromDevice";
import HistoryListFromAccount from "../List/HistoryListFromAccount";
import { useCallback, useState } from "react";
import { useReviewBook } from "@/stores/addListBookRead";
import { IBook } from "@/interfaces";
import ListBookTop from "../List/ListBookTop";
export interface IAppProps {
  bookTop: IBook[];
  bookNew: IBook[];
  total: number
  page: number
}

export default function PageHistoryBook({ bookTop, bookNew, total, page }: IAppProps) {
  const { reviewBook } = useReviewBook();
  const [tabindex, setTabIndex] = useState(0);
  const renderByTab = useCallback(() => {
    switch (tabindex) {
      case 0:
        return <HistoryListFromDevice reviewBook={reviewBook} />;
      case 1:
        return <HistoryListFromAccount page={page} total={total} bookNew={bookNew} />;
      default:
        return null;
    }
  }, [tabindex, page, reviewBook]);
  return (
    <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
      <section className="lg:col-span-8  w-full">
        <nav className="w-full flex border-b-[1px] border-gray-500 justify-center">
          <h2
            onClick={() => setTabIndex(0)}
            className={`p-2 px-4 dark:hover:text-[#ff9601]  text-[#288ad6] hover:text-[#ae4ad9]  ${tabindex === 0 ? "border-b-4 dark:text-[#ff9601] dark:border-[#ff0000] border-[#d0b32e] font-bold" : " dark:text-white"
              } cursor-pointer -mb-[2px] `}
          >
            Lịch sử đọc truyện
          </h2>
          <h2
            onClick={() => setTabIndex(1)}
            className={`p-2 px-4 text-[#288ad6] dark:hover:text-[#ff9601]  hover:text-[#ae4ad9] ${tabindex === 1 ? "border-b-4 dark:text-[#ff9601] dark:border-[#ff0000] border-[#d0b32e] font-bold" : "dark:text-white"
              }  cursor-pointer -mb-[2px] `}
          >
            Truyện mới
          </h2>
        </nav>
        {renderByTab()}

        <h3 className="font-bold text-xl mt-5">Bình luận facebook</h3>
      </section>
      <ListBookTop booksInit={bookTop} />
    </div>
  );
}
