'use client'
import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { useReviewBook } from "@/stores/addListBookRead";
import { convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export interface IHistoryListItemCardProps {
  book: IBook, list?: string 
 }
export default function HistoryItemCard({ book, list }: IHistoryListItemCardProps) {
  const { deleteBook } = useReviewBook();
  const router = useRouter();
  const handleDelete = (book: IBook) => {
    if (list === "device") {
      deleteBook(book);
      router.refresh();
    } else {

    }
  }
  return (
    <div className=" w-full ">
      <div className="w-full rounded overflow-hidden relative aspect-[2.5/3]   ">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <Image
            onClick={() => handleUpdateView(book?._id)}
            width={200}
            height={250}
            className="w-full h-full object-cover"
            src={`${DOMAIN}/api/books/${book?.images[0]}`}
            alt=""
          />
        </Link>
        <button onClick={() => handleDelete(book)}
          className="flex hover:text-[#ff0000] absolute py-1 md:py-2  bottom-0  text-white w-full justify-center font-medium bg-[#000000b9] items-center   ">
          {" "}
          <IoIosClose className="text-2xl" />
          Xoá
        </button>
      </div>

      <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
        <h3 onClick={() => handleUpdateView(book?._id)} className=" w-full leading-6 mt-2  cursor-pointer hover:text-blue-600">
          {book?.name}
        </h3>
      </Link>
      <p className="flex  text-sm text-gray-400 items-center cursor-pointer hover:text-blue-600 ">
        Đọc tiếp chương 1 <IoIosArrowForward />
      </p>
    </div>
  );
}
