"use client";
import { IBook } from "@/interfaces";
import * as React from "react";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";

export interface IContentItemProps {}

export default function ContentItem({ book }: { book: IBook }) {
  const [showAllContent, setShowAllContent] = React.useState<boolean>(false);
  const categories = book?.categories
    ?.map((category) => category?.name)
    .join(", ");
  return (
    <nav className=" my-4 dark:te flex flex-col gap-2">
      <h3 className="flex items-center gap-1 dark:text-[#ff9601] lg:text-lg   text-[#288ad6] border-b pb-1 dark:border-[#ff9601] border-[#288ad6]">
        {" "}
        <GrNotes />
        {`Nội dung truyện ${book?.name}`.replace(/(\s\w)/g, (match) =>
          match.toUpperCase()
        )}
      </h3>

      <nav
        className={` overflow-hidden text-sm  font-light  flex flex-col gap-2 ${
          !showAllContent ? "h-[60px] lg:h-[85px] " : "h-max "
        } `}
      >
        <p>
          Chào mừng độc giả thân mến của{" "}
          <span className="hover:text-[#ae4ad9] text-[#288ad6] dark:text-[#ff9601] dark:hover:text-[#ff0000]   hover:underline">
            NetTruyen
          </span>
          , {book?.name} là bộ truyện tranh hấp dẫn mà appTruyenMQ.vn muốn mang
          đến cho các bạn. Đây là bộ truyện tranh nằm trong thể loại{" "}
          <span className="mr-1">{categories}</span>
          trên website của chúng tôi.
        </p>
        <p className="whitespace-pre-line">{book?.description}</p>
        <p>
          {" "}
          Chúc các bạn có những trải nghiệm thú vị và mới mẻ khi đọc bộ truyện
          <span className="hover:text-[#ae4ad9] ml-1 dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:underline cursor-pointer text-[#288ad6]  ">
            {book?.name}
          </span>{" "}
          tại website appTruyenMQ. Chúng tôi rất sẵn lòng ghi nhận những đóng
          góp hoặc phản hồi về chất lượng webiste hay trải nghiệm của các bạn
          tại đây. Đừng ngại góp ý cho chúng tôi nhé!
        </p>
      </nav>
      <button
        onClick={() => setShowAllContent(!showAllContent)}
        className={`  hover:text-[#ff9900]  text-[#288ad6] dark:text-[#ff9601]  `}
      >
        {showAllContent ? (
          <span className="hover:text-[#ae4ad9] dark:hover:text-[#ff0000] flex gap-1 items-center hover:underline  ">
            Thu gọn <IoIosArrowUp />
          </span>
        ) : (
          <span className="hover:text-[#ae4ad9] dark:hover:text-[#ff0000] flex gap-1 items-center hover:underline ">
            Mở rộng <IoIosArrowDown />
          </span>
        )}
      </button>
    </nav>
  );
}
