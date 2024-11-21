"use client";
import { convertToSlug } from "@/utils";
import Link from "next/link";
import * as React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdFormatListBulleted } from "react-icons/md";

export interface IChapterListItemProps {
  bookName: string;
}

export default function ChapterListItem({ bookName }: IChapterListItemProps) {
  const [showAllChapter, setshowAllChapter] = React.useState<boolean>(false);
  return (
    <nav className=" my-4 font-medium flex flex-col gap-2">
      <h3 className="flex items-center gap-1 dark:text-[#ff9601] lg:text-lg   text-[#288ad6] border-b pb-1 dark:border-[#ff9601] border-[#288ad6]">
        {" "}
        <MdFormatListBulleted size={30} />
        Danh sách chương
      </h3>
      <div className="flex flex-col text-lg p-1 px-2">
        <th className="flex w-full justify-start font-normal">
          <td className="w-1/2 text-start">Số chương</td>
          <td className="w-1/2 text-start">Cập nhật</td>
        </th>
        <div
          className={`w-full ${
            !showAllChapter ? "h-[400px] lg:h-[800px]  " : "h-max "
          } flex flex-col justify-between border p-1`}
        >
          <ul
            className={` overflow-hidden   w-full text-sm rounded flex flex-col gap-2 `}
          >
            <li className="flex w-full justify-start border-b-[1px] border-gray-400 border-dashed py-2 px-1 font-normal">
              <p className="w-1/2  dark:hover:text-[#ff0000] hover:text-blue-600 text-start">
                <Link
                  href={`/truyen/${convertToSlug(bookName)}/chapter-460.html`}
                >
                  Chapter 460
                </Link>
              </p>

              <span className="w-1/2 text-start text-[#777676] italic">
                6 giờ trước
              </span>
            </li>
          </ul>
          <button
            onClick={() => setshowAllChapter(!showAllChapter)}
            className={`  hover:text-[#ff9900] lg:text-lg text-base flex w-full mt-2 justify-center border p-2 rounded`}
          >
            {!showAllChapter ? (
              <span className="hover:text-[#ae4ad9] flex gap-1 items-center hover:underline  text-[#288ad6]">
                <FaPlus />
                Xem thêm
              </span>
            ) : (
              <span className="hover:text-[#ae4ad9] flex gap-1 items-center hover:underline  text-[#288ad6]">
                <FaMinus /> Ẩn bớt
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
