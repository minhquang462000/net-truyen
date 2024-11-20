import { IBook } from "@/interfaces";
import { formatDate } from "@/utils";
import Image from "next/image";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardPopupBookMain({
  book,
  position,
}: {
  book: IBook;
  position: { x: number; y: number };
}) {
  return (
    <div
      style={{ left: `${position.x + 20}px`, top: `${position.y}px` }}
      className={`w-[300px] absolute invisible lg:visible dark:bg-[#000] dark:border-[#333] hidden group-hover:block z-20  bg-white border border-[#5d5d5d] p-3 rounded-sm`}
    >
      <h4 className="font-semibold mb-1 text-wrap">{book?.name}</h4>
      <div className="flex gap-2">
        <Image
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt={book?.name}
          width={100}
          className="object-cover"
          height={180}
        />
        <ul className="text-sm flex flex-col gap-2 text-[#18b6ff]">
          <li className="flex items-center gap-x-1 leading-4 flex-wrap">
            <p className="font-medium"> Thể loại:</p>
            {book?.categories?.map((item, index) => (
              <p className="text-[#333] dark:text-white  text-xs" key={index}>
                {item?.name},
              </p>
            ))}
          </li>
          <li className="flex items-center gap-x-1 leading-4 flex-wrap">
            <p className="font-medium"> Tình trạng:</p>
            <p className="text-[#333] dark:text-white  text-xs">
              {book?.status === 1
                ? "Đăng tiến hành"
                : book?.status === 2
                ? "Hoàn thành"
                : "Sắp ra mắt"}
            </p>
          </li>
          <li className="flex items-center gap-x-1 leading-4 flex-wrap">
            <p className="font-medium"> Lượt xem:</p>
            <p className="text-[#333] dark:text-white  text-xs">{book?.views || 0}</p>
          </li>
          <li className="flex items-center gap-x-1 leading-4 flex-wrap">
            <p className="font-medium"> Ngày tạo:</p>
            <p className="text-[#333] dark:text-white  text-xs">
              {formatDate(book?.createdAt)}
            </p>
          </li>
        </ul>
      </div>
      <p className="font-light mt-2 leading-6 text-sm line-clamp-5">
        {book?.description}
      </p>
    </div>
  );
}
