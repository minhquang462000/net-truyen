"use client";
import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { useReviewBook } from "@/stores/addListBookRead";
import { convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

export interface IAppProps {
  book: IBook;
  index: number;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardBookTop({ book, index }: IAppProps) {
  const { addListBookRead } = useReviewBook();
  return (
    <div className="w-full dark:border-b dark:border-white h-[70px] lg:h-[80px] text-sm md:text-base gap-2 lg:py-3   p-2 py-3  flex justify-between items-center">
      <span
        className={`w-1/12 text-xl text-end font-medium
         ${index === 0
            ? "text-[#2980b9]"
            : index === 1
              ? "text-[#27ae60]"
              : index === 2
                ? "text-[#d35400]"
                : "text-[#a3a3a3]"
          }
          font-sans`}
      >
        {index !== 9 ? `0${index + 1}` : 10}
      </span>
      <Image
        width={100}
        height={100}
        className="w-[70px] h-[50px] object-cover overflow-hidden"
        src={`${DOMAIN}/api/books/${book?.images[0]}`}
        alt=""
      />
      <nav className="flex flex-col w-8/12  h-full  justify-between">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <h3
            onClick={() => (handleUpdateView(book?._id), addListBookRead(book))}
            className="font-medium w-full cursor-pointer hover:text-blue-600 truncate"
          >
            {book?.name}
          </h3>
        </Link>
        <span className="flex items-center md:text-sm text-xs justify-between ">
          <Link href={`/truyen/${convertToSlug(book?.name)}/chapter-59.html`}>
            <p className="font-medium cursor-pointer hover:text-blue-600">
              Chương 59
            </p>
          </Link>
          <span className="flex gap-1 text-gray-500 italic font-light items-center">
            <FaRegEye /> 4k
          </span>
        </span>
      </nav>
    </div>
  );
}
