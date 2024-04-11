
import * as React from "react";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";

export interface IContentItemProps {}

export default function ContentItem(props: IContentItemProps) {
  const [showAllContent, setshowAllContent] = React.useState<boolean>(false);
  return (
    <nav className=" my-4 flex flex-col gap-2">
         <h1 className="flex items-center gap-1 lg:text-2xl  text-[#777676] border-b-2 border-[#288ad6]">
        {" "}
        <GrNotes />
        Nội dung truyện Kiếm Nghịch Thương Khung
      </h1>
      
      <nav
        className={` overflow-hidden text-sm lg:text-lg  flex flex-col gap-2 ${
          !showAllContent ? "h-[60px] lg:h-[85px] " : "h-max "
        } `}
      >
        <p>
          Chào mừng độc giả thân mến của{" "}
          <span className="hover:text-[#ae4ad9] text-[#288ad6]   hover:underline">
            NetTruyen
          </span>
          , Kiếm Nghịch Thương Khung là bộ truyện tranh hấp dẫn mà
          NettruyenCo.vn muốn mang đến cho các bạn. Đây là bộ truyện tranh nằm
          trong thể loại Action, Adventure, Manhua, Mystery, Shounen, Truyện Màu
          trên website của chúng tôi.
        </p>
        <p>
          Như các bạn đã biết, NetTruyenCo là website đọc truyện tranh với số
          lượng user gần như lớn nhất tại Việt Nam, chúng tôi luôn cố gắng cập
          nhật và tìm kiếm những bộ truyện mới nhất với đầy đủ thể loại như:
          <span className="hover:text-[#ae4ad9] ml-1 hover:underline cursor-pointer text-[#288ad6]  ">
            Truyện tranh ngôn tình
          </span>
          ,
          <span className="hover:text-[#ae4ad9] ml-1 hover:underline  cursor-pointer text-[#288ad6] ">
            {" "}
            truyện tranh xuyên không
          </span>
          , truyện manhua, đam mỹ, cổ đại... Đọc truyện tranh online tại website
          NetTruyenCo sẽ giúp chúng tôi có kinh phí duy trì và phát triển để xây
          dựng cộng đồng lớn mạnh hơn.
        </p>
        <p>
          Vì đánh bại kẻ đã khiến hắn tan cửa nát nhà, thiếu niên Huyền Thiên
          bước lên kiếm đạo tu hành. Từ thiếu niên ngây thơ đến nhất đại Kiếm
          Thần, đã từng cho rằng cường giả hiện tại đã như hạt bụi nhỏ. Một chỉ
          tru thần đều im lặng diệt, ta bằng vào ta kiếm nghịch thương khung!
          hành trình của hắn liền kia vô tận thương khung!
        </p>
        <p>
          {" "}
          Chúc các bạn có những trải nghiệm thú vị và mới mẻ khi đọc bộ truyện
          <span className="hover:text-[#ae4ad9] ml-1 hover:underline cursor-pointer text-[#288ad6]  ">
            Kiếm Nghịch Thương Khung
          </span>{" "}
          tại website NetTruyenCo. Chúng tôi rất sẵn lòng ghi nhận những đóng
          góp hoặc phản hồi về chất lượng webiste hay trải nghiệm của các bạn
          tại đây. Đừng ngại góp ý cho chúng tôi nhé!
        </p>
      </nav>
      <button
        onClick={() => setshowAllContent(!showAllContent)}
        className={`  hover:text-[#ff9900] lg:text-lg  `}
      >
        {showAllContent ? (
          <span className="hover:text-[#ae4ad9] flex gap-1 items-center hover:underline  text-[#288ad6]">
            Thu gọn <IoIosArrowUp />
          </span>
        ) : (
          <span className="hover:text-[#ae4ad9] flex gap-1 items-center hover:underline  text-[#288ad6]">
            Mở rộng <IoIosArrowDown />
          </span>
        )}
      </button>
    </nav>
  );
}
