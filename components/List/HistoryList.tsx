"use client";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import Image from "next/image";
import { useReviewBook } from "@/stores/addListBookRead";
import { convertToSlug } from "@/utils";
import Link from "next/link";
export interface IHistoryListProps { }
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;

export default function HistoryList(props: IHistoryListProps) {
  const { reviewBook, deleteBook } = useReviewBook();
  return (
    <div className="border-[1px] border-[#ddd] text-sm lg:text-base p-1 mb-4 md:p-2 w-full text-black">
      <nav className="flex items-center justify-between border-b p-1">
        <h3 className="md:text-lg text-base dark:text-white dark:hover:text-[#ff9601]  hover:text-[#ae4ad9] cursor-pointer hover:underline text-[#288ad6]">
          Lịch sử đọc truyện
        </h3>
        <p className="md:text-sm text-xs dark:text-white dark:hover:text-[#ff9601]   italic hover:text-blue-600 hover:underline cursor-pointer">
          Xem tất cả
        </p>
      </nav>
      <ul className="p-2 w-full flex flex-col gap-3">
        {reviewBook?.map((book, index) => (
          <li key={index} className="flex  justify-between gap-3 w-full items-center">
            <Image
              width={100}
              height={100}
              className="w-[70px] h-[50px] object-cover overflow-hidden"
              src={`${DOMAIN}/api/books/${book?.images[0]}`}
              alt=""
            />
            <div className=" flex w-3/4 gap-2 dark:text-white  flex-col ">
              <Link
                href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}
              >
                <h3 className=" w-full truncate  font-medium cursor-pointer hover:text-blue-600">
                  {book?.name}
                </h3>
              </Link>
              <div className="flex items-center md:text-sm text-xs  justify-between">
                <Link href={`/truyen/${convertToSlug(book?.name)}/chapter-1.html`}>
                  <p className="flex text-gray-400 items-center cursor-pointer hover:text-blue-600 ">
                    Đọc tiếp chương 1 <IoIosArrowForward />
                  </p>
                </Link>
                <p
                  onClick={() => deleteBook(book)}
                  className="flex italic items-center cursor-pointer dark:hover:text-[#ff0000] hover:text-blue-600 "
                >
                  {" "}
                  <IoIosClose className="text-lg md:text-xl" />
                  Xoá
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
