import * as React from "react";

export interface IAppProps {}

export default function ListFilterBookMobile({
  setSort,
}: {
  setSort: (value: string) => void;
}) {
  return (
    <select
      onChange={(e) => setSort(e.target.value)}
      className="border md:hidden text-gray-600   dark:bg-white  border-gray-300 rounded p-1 px-2 w-full"
      name=""
      id=""
    >
      <option value="0:q:new">Ngày cập nhật</option>
      <option value="1:q:truyen-moi">Truyện mới</option>
      <option value="2:sortKey:views">Top All</option>
      <option value="3:sortKey:monthly">Top tháng</option>
      <option value="4:sortKey:weekly">Top tuần</option>
      <option value="5:sortKey:day">Top ngày</option>
      <option value="6:q:theo-doi">Theo dõi</option>
      <option value="7:binh-luan">Bình luận</option>
      <option value="8:q:chapter">Số chapter</option>
      <option value="9:q:follow">Top Follow</option>
    </select>
  );
}
