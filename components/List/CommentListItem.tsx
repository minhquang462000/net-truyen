'use client';
import { FaComments, FaFacebookSquare } from "react-icons/fa";
import FacebookComment from "../Cards/FacebookComment";
import NettruyenComment from "../Cards/NettruyenComment";
import { useCallback, useState } from "react";

export interface ICommentListItemProps {}

export default function CommentListItem(props: ICommentListItemProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <FacebookComment />;
      case 1:
        return <NettruyenComment />;
      default:
        return null;
    }
  }, [tabIndex]);
  return (
    <div className="w-full px-2">
      <ul className="w-full mb-2 text-sm md:text-base dark:text-[#ff9601] text-[#288ad6] border-b-[1px] border-[#ddd] flex items-center text-center">
        <li
          onClick={() => setTabIndex(0)}
          className={`p-2 px-4 dark:bg-[#423e3e] bg-white   h-max cursor-pointer border-t-2  ${
            tabIndex === 0
              ? "border-t-[#ae4ad9] dark:border-[#ff0000] mb-[-1px] border-x dark:border-x-[#ddd] dark:text-[#ff9601]   "
              : " dark:border-[#423e3e] border-transparent dark:hover:text-[#ff0000] hover:text-[#ae4ad9]"
          }`}
        >
          Facebook(1)
        </li>
        <li
          onClick={() => setTabIndex(1)}
          className={`p-2 px-4 dark:bg-[#423e3e] bg-white   h-max flex items-center  gap-1 font-medium cursor-pointer border-t-2  ${
            tabIndex === 1
              ? "border-t-[#ae4ad9] dark:text-[#ff9601] border-x dark:border-x-[#ddd] mb-[-1px] dark:border-[#ff0000]  "
               : " dark:border-[#423e3e] border-transparent  dark:hover:text-[#ff0000] hover:text-[#ae4ad9]"
          } `}
        >
          <FaComments />
          NetTruyen(511)
        </li>
      </ul>
      {renderByTab()}
    </div>
  );
}
