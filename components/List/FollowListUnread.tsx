import { IBook } from "@/interfaces";
import Cookies from "js-cookie";
import CardIfoAccountPage from "../Cards/CardIfoAccountPage";
import FollowItemCard from "../Cards/FollowItemCard";
import RootPagination from "../RootPagination";
export interface IFollowListUnreadProps {
  followListRead: IBook[];
  total: number;
  page: number
}

export default function FollowListUnread({ followListRead, total, page }: IFollowListUnreadProps) {
  const user = Cookies.get("user");
  return (
    <div className="w-full mt-4 min-h-[500px]">
      {!user ? <CardIfoAccountPage /> :
        <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
          {followListRead?.map((item, index) => <FollowItemCard key={index} book={item} />)}
        </div>}
      <RootPagination page={page} limit={20} total={total} />
    </div>
  );
}
