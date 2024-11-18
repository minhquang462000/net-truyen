'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import CardBookTop from "../Cards/CardBookTop";
import { IBook } from "@/interfaces";
export interface ICardTopWeekProps { }
const API_URL = process.env.NEXT_PUBLIC_API_URL
export default function ListBookTop(props: ICardTopWeekProps) {
  const [sortKey, setSortKey] = useState("monthly");
  const [bookData, setBookData] = useState<IBook[]>([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(`${API_URL}/api/client/books?sortKey=${sortKey}`);
        setBookData(res.data);
      }
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [sortKey])
  return (
    <section className="w-full dark:text-white col-span-4 ">
      <ul className="w-full text-sm md:text-base grid grid-cols-3 text-center">
        <li onClick={() => setSortKey("monthly")}
          className={`py-2    h-max dark:bg-[#423e3e] cursor-pointer border-t-2 border-l  border-transparent hover:border-t-[#ae4ad9] dark:hover:border-t-[#ff0000] 
          ${sortKey === "monthly" ? "border-t-[#ae4ad9] dark:text-[#ff9601] border-x border-x-[#c9c9c9] bg-white dark:bg-[#423e3e] dark:border-t-[#ff0000]" : "bg-[#ECF0F1] dark:hover:text-[#ff9601] border-white dark:hover:bg-[#423e3e] hover:bg-white "}`}>
          Top Tháng
        </li>
        <li onClick={() => setSortKey("weekly")}
          className={`py-2   h-max dark:bg-[#423e3e]  cursor-pointer border-t-2 border-gray-100  hover:border-t-[#ae4ad9] dark:hover:border-t-[#ff0000] 
            ${sortKey === "weekly" ? "border-t-[#ae4ad9] dark:text-[#ff9601] border-x border-x-[#c9c9c9] bg-white dark:bg-[#423e3e] dark:border-t-[#ff0000]" : "bg-[#ECF0F1] dark:hover:text-[#ff9601] dark:hover:bg-[#423e3e] border-white hover:bg-white"}`}>
          Top Tuần
        </li>
        <li onClick={() => setSortKey("day")}
          className={`py-2  h-max dark:bg-[#423e3e] cursor-pointer border-t-2 border-gray-100  hover:border-t-[#ae4ad9] dark:hover:border-t-[#ff0000]
            ${sortKey === "day" ? "border-t-[#ae4ad9] dark:text-[#ff9601] bg-white dark:bg-[#423e3e] border-x border-x-[#c9c9c9] dark:border-t-[#ff0000]" : "bg-[#ECF0F1] dark:hover:text-[#ff9601] dark:hover:bg-[#423e3e] border-white hover:bg-white"}`}>
          Top Ngày
        </li>
      </ul>
      <section className="border-x border-b w-full  border-x-[#c9c9c9]">
        {bookData.map((book, index) => (
          <CardBookTop key={index} index={index} book={book} />
        ))}
      </section>
    </section>
  );
}
