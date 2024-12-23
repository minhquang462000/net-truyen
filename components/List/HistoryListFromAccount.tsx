'use client'
import Link from "next/link";
export interface IHistoryListFromAccountProps { }
import Cookies from 'js-cookie';
import { IBook } from "@/interfaces";
import HistoryItemCard from "../Cards/HistoryItemCard";
import RootPagination from "../RootPagination";
import CardHomePageMAin from "../Cards/CardHomePageMain";
export default function HistoryListFromAccount(
  { bookNew, total, page }: { bookNew: IBook[], total: number, page: number }
) {
  const user = Cookies.get("user");
  return (
    <div className="w-full mt-4 min-h-[500px]">
     <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
        {bookNew?.map((item, index) =>
          <CardHomePageMAin  key={index} book={item} />)}
      </div>
      <RootPagination page={page} limit={20} total={total} />
    </div>
  );
}
