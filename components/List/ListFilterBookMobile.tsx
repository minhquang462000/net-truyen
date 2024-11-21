'use client';

import { useEffect } from "react";

export interface IAppProps {}

export default function ListFilterBookMobile({
  handleQuery,
  query,
}: {
  handleQuery: any;
  query: string;
}) {
  return (
    <select
      onChange={(e) => handleQuery("q", e.target.value)}
      value={query}
      className="border md:hidden text-gray-600   dark:bg-white  border-gray-300 rounded p-1 px-2 w-full"
      name=""
      id=""
    >
      <option value="new">Ngày cập nhật</option>
      <option value="truyen-moi">Truyện mới</option>
      <option value="views">Top All</option>
      <option value="monthly">Top tháng</option>
      <option value="weekly">Top tuần</option>
      <option value="day">Top ngày</option>
      <option value="theo-doi">Theo dõi</option>
      <option value="binh-luan">Bình luận</option>
      <option value="chapter">Số chapter</option>
      <option value="follow">Top Follow</option>
    </select>
  );
}
