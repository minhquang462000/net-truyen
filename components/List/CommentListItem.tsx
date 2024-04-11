import * as React from "react";
import { FaComments, FaFacebookSquare } from "react-icons/fa";
import FacebookComment from "../Cards/FacebookComment";
import NettruyenComment from "../Cards/NettruyenComment";

export interface ICommentListItemProps {}

export default function CommentListItem(props: ICommentListItemProps) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const renderByTab = React.useCallback(() => {
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
      <tr className="w-full text-sm md:text-base border-b flex items-center text-center">
        <td
          onClick={() => setTabIndex(0)}
          className={`p-3 px-4 bg-white h-max cursor-pointer  border-t-[3px] border-l ${
            tabIndex === 0
              ? "border-t-[#ae4ad9] border border-b-white -mb-[2px]"
              : "text-[#288ad6] border-gray-100 border-b-2  bg-gray-100 hover:text-[#ae4ad9]"
          }`}
        >
          Facebook(1)
        </td>
        <td
          onClick={() => setTabIndex(1)}
          className={`p-3 px-4   h-max flex items-center gap-1 font-medium cursor-pointer border-t-[3px]  ${
            tabIndex === 1
              ? "border-t-[#ae4ad9] border border-b-white -mb-[2px]"
              : "text-[#288ad6] border-gray-100  bg-gray-100 hover:text-[#ae4ad9]"
          } `}
        >
          <FaComments />
          NetTruyen(511)
        </td>
      </tr>
      {renderByTab()}
    </div>
  );
}
