"use client";
import { useEffect, useState } from "react";
import FollowListUnread from "./FollowListUnread";
import { IBook } from "@/interfaces";
import axios from "axios";
import ListBookTop from "./ListBookTop";
import { useReloadPage } from "@/stores/reload";
export interface IAppProps {
  followList: IBook[];
  total: number;
  page: number
  userId: string
  listBookByView: IBook[]
}
const API_URL = process.env.NEXT_PUBLIC_API_URL
export default function SelectPageFollow({ followList, total, page, userId, listBookByView }: IAppProps) {  
  const [isRead, setIsRead] = useState("");
  const [listBook, setListBook] = useState(followList);
  const [totalList, setTotalList] = useState(total);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/favorite/${userId}?read=${isRead}&page=${page}`);
        setListBook(res.data);
        setTotalList(res.headers["x-total-count"]);
      } catch (e) { console.log(e); }
    }
    fetchData();
  }, [isRead, page, followList])
  return (
    <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
      <section className="lg:col-span-8  w-full">
        <nav className="w-full flex border-b-[1px] border-gray-500 justify-center">
          <h4
            onClick={() => setIsRead("")}
            className={`p-2 px-4 dark:hover:text-[#ff9601]  text-[#288ad6] hover:text-[#ae4ad9]  ${isRead === "" ? "border-b-4 dark:text-[#ff9601] dark:border-[#ff0000] border-[#d0b32e] font-bold" : " dark:text-white"
              } cursor-pointer -mb-[2px] `}
          >
            Mới cập nhật
          </h4>
          <h4
            onClick={() => setIsRead("false")}
            className={`p-2 px-4 text-[#288ad6] dark:hover:text-[#ff9601]  hover:text-[#ae4ad9] ${isRead === "false" ? "border-b-4 dark:text-[#ff9601] dark:border-[#ff0000] border-[#d0b32e] font-bold" : "dark:text-white"
              }  cursor-pointer -mb-[2px] `}
          >
            Chưa đọc
          </h4>
        </nav>
        {listBook.length > 0 ? <FollowListUnread total={totalList} page={page} followListRead={listBook} /> : <p className="text-gray-500 mt-5 font-light italic">
          Bạn chưa theo dõi truyện nào ...</p>}
        {/* <ChangePage /> */}
        <h5 className="font-bold text-xl mt-6">Bình luận facebook</h5>
        <p className="text-gray-500 mt-2 font-light italic">Chưa có bình luận nào...</p>
      </section>
      <div className="lg:col-span-4">
        <ListBookTop booksInit={listBookByView} />
      </div>
    </div>
  );
}
