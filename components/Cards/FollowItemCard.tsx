'use client';
import { removeBookFavorite, updateBookFavorite } from "@/api/favorite";
import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaComment, FaHeart, FaRegEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export interface IFollowItemCardProps { }
import { Popconfirm } from "antd";
import type { PopconfirmProps } from "antd";
export default function FollowItemCard({ book }: { book: IBook }) {
  const router = useRouter();
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    
    removeBookFavorite(book?._id);
    router.refresh();
  };
  const cancel: PopconfirmProps["onCancel"] = (e) => {
  };
  return (
    <div
      className="flex w-full  gap-2 flex-col">
      <div onClick={() => handleUpdateView(book?._id)} className="relative w-full cursor-pointer aspect-[2.5/3] rounded-md overflow-hidden text-sm">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover"
            src={`${DOMAIN}/api/books/${book?.images[0]}`}
            alt=""
          />
        </Link>
        <ul className="bg-[#000000b7] absolute font-sans p-1  left-0 right-0 bottom-0 flex gap-2  text-white items-center justify-start">
          <li className="flex items-center opacity-80 gap-1">
            <FaRegEye />
            {book?.views}
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaComment />
            {book?.comments}
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaHeart />
            {book?.follows}
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between py-1 font-semibold text-sm">
        <p
          className={`flex items-center  ${book?.read ? "text-[#ffd21d]" : "text-[#23a903]"}  hover:underline`}>
          <TiTick size={20} /> {book?.read ? "Đã đọc" : "Chưa đọc"}
        </p>
        <Popconfirm
          title="Bỏ theo dôi ???"
          description={`Bạn muốn bỏ theo dõi truyện ${book?.name}?`}
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <button
            className="flex items-center text-[#d9534f] hover:text-[#ae4ad9] hover:underline"
          >
            <IoClose className="text-lg" />
            Bỏ theo dôi
          </button>
        </Popconfirm>

      </div>
      <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
        <h3 onClick={() => handleUpdateView(book?._id)}
          className="font-medium cursor-pointer  leading-5  hover:text-blue-700 ">
          {book?.name}
        </h3>
      </Link>
      <ul className="text-xs flex mt-1 flex-col gap-2 ">
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 94</button>{" "}
          <button className=" text-gray-400 italic">42 phút trước</button>
        </li>
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 93</button>{" "}
          <button className=" text-gray-400 italic">2 giờ trước</button>
        </li>
        <li className="flex justify-between">
          <button className="hover:text-blue-700 font-medium">Chương 92</button>{" "}
          <button className=" text-gray-400 italic">1 ngày trước</button>
        </li>
      </ul>
    </div>
  );
}
