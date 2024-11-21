import { IBook } from "@/interfaces";
import CardIfoAccountPage from "../Cards/CardIfoAccountPage";
import FollowItemCard from "../Cards/FollowItemCard";
import RootPagination from "../RootPagination";
export interface IFollowListUnreadProps {
  followListRead: IBook[];
  total: number;
  page: number
}

export default function FollowListUnread({ followListRead, total, page }: IFollowListUnreadProps) {
  return (
    <div className="w-full mt-4 min-h-[500px]">
      {followListRead.length === 0 ? <p className="text-gray-500 mt-5 font-light italic">
        Bạn chưa theo dõi truyện nào ...</p> :
        <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
          {followListRead?.map((item, index) => <FollowItemCard key={index} book={item} />)}
        </div>}
      <RootPagination page={page} limit={20} total={total} />
    </div>
  );
}
