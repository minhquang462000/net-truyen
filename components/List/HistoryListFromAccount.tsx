import Link from "next/link";
import * as React from "react";
import HistoryItemCard from "../Cards/HistoryItemCard";

export interface IHistoryListFromAccountProps {}

export default function HistoryListFromAccount(
  props: IHistoryListFromAccountProps
) {
  return (
     <div className="w-full mt-4 min-h-[500px]">
      <p className="my-2">
      Vui lòng <Link className="text-[#288ad6] hover:text-[#ae4ad9]  hover:underline" href="/auth/login">Đăng nhập</Link> để trải nghiệm tính năng này.
      </p>
      <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
        <HistoryItemCard />
        <HistoryItemCard />
        <HistoryItemCard />
        <HistoryItemCard />
        <HistoryItemCard />
        <HistoryItemCard />
      </div>
    </div>
  );
}
