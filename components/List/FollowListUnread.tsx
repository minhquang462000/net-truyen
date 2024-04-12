import Link from "next/link";
import * as React from "react";

export interface IFollowListUnreadProps {}

export default function FollowListUnread(props: IFollowListUnreadProps) {
  return (
    <div className="w-full mt-4 min-h-[500px]">
      <p className="my-2">
        Bạn chưa theo dõi truyện nào cả. Để theo dõi truyện, nhấn vào Theo dõi
        như hình bên dưới: Bạn nên{" "}
        <Link
          className="text-[#288ad6] hover:text-[#ae4ad9]  hover:underline"
          href="/auth/login"
        >
          Đăng nhập
        </Link>{" "}
        để truy cập truyện đã theo dõi của bạn ở bất cứ đâu
      </p>
      <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
        
      </div>
    </div>
  );
}
