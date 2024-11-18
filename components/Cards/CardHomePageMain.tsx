'use client'
import { IBook } from "@/interfaces";
import { FaComment, FaHeart, FaRegEye } from "react-icons/fa";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL
import Image from "next/image";
import { handleUpdateView } from "@/api/updateView";
import Link from "next/link";
import { convertToSlug } from "@/utils";
export default function CardHomePageMAin({ book }: { book: IBook }) {
  return (
    <div className="flex w-full   gap-2 flex-col">
      <div className="relative dark:border-white border border-transparent w-full cursor-pointer h-[220px] rounded-md overflow-hidden text-sm">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <Image
            onClick={() => handleUpdateView(book?._id)}
            src={`${DOMAIN}/api/books/${book?.images[0]}`}
            alt={book?.name}
            width={200}
            height={300}
            className="object-cover w-full h-full" />
        </Link>
        <ul className="bg-[#000000b7] absolute font-sans p-1  left-0 right-0 bottom-0 flex gap-2  text-white items-center justify-start">
          <li className="flex items-center opacity-80 gap-1">
            <FaRegEye />
            {book?.views}
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaComment />
            {book?.views}
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaHeart />
            {book?.views}
          </li>
        </ul>
      </div>
      <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
        <h3 onClick={() => handleUpdateView(book?._id)} className="font-medium line-clamp-2 cursor-pointer  leading-5  hover:text-blue-700 ">
          {book?.name}
        </h3></Link>
      <ul className="text-xs flex mt-1 flex-col gap-2 ">
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 94</button>{" "}
          <button className=" text-gray-400 italic">42 phút trước</button>
        </li>
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 93</button>{" "}
          <button className=" text-gray-400 italic">2 giờ trước</button>
        </li>
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 92</button>{" "}
          <button className=" text-gray-400 italic">1 ngày trước</button>
        </li>
      </ul>
    </div>
  );
}
