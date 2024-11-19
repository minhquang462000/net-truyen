"use client";
import { useCallback, useState } from "react";
import FollowListNewUpdate from "./FollowListNewUpdate";
import FollowListUnread from "./FollowListUnread";

export interface IAppProps {}

export default function SelectPageFollow(props: IAppProps) {
  const [tabindex, setTabIndex] = useState(0);
  const renderByTab = useCallback(() => {
    switch (tabindex) {
      case 0:
        return <FollowListNewUpdate />;
      case 1:
        return <FollowListUnread />;
      default:
        return null;
    }
  }, [tabindex]);
  return (
    <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
      <section className="lg:col-span-8  w-full">
        <nav className="w-full flex border-b-[1px] border-gray-500 justify-center">
          <h4
            onClick={() => setTabIndex(0)}
            className={`p-2 px-4 text-[#288ad6] hover:text-[#ae4ad9]  ${
              tabindex === 0 && "border-b-4 border-[#d0b32e] font-bold"
            } cursor-pointer -mb-[2px] `}
          >
            Mới cập nhật
          </h4>
          <h4
            onClick={() => setTabIndex(1)}
            className={`p-2 px-4 text-[#288ad6] hover:text-[#ae4ad9] ${
              tabindex === 1 && "border-b-4 border-[#d0b32e] font-bold"
            }  cursor-pointer -mb-[2px] `}
          >
            Chưa đọc
          </h4>
        </nav>
        {renderByTab()}
        {/* <ChangePage /> */}
        <h1 className="font-bold text-xl mt-5">Bình luận facebook</h1>
      </section>

      {/* <CardTopMonth /> */}
    </div>
  );
}
