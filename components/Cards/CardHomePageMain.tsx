"use client";
import { IBook } from "@/interfaces";
import { FaComment, FaHeart, FaRegEye } from "react-icons/fa";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
import Image from "next/image";
import { handleUpdateView } from "@/api/updateView";
import Link from "next/link";
import { convertToSlug } from "@/utils";
import { useReviewBook } from "@/stores/addListBookRead";
import CardPopupBookMain from "./CardPopupBookMain";
import { useEffect, useRef, useState } from "react";
import { addListFavorite } from "@/api/favorite";
export default function CardHomePageMAin({ book }: { book: IBook }) {
  const { addListBookRead } = useReviewBook();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<any>(null);
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newX = event.clientX - containerRect.left;
        const newY = event.clientY - containerRect.top;

        // Giới hạn vị trí trong phần tử cha
        const limitedX = Math.max(0, Math.min(newX, containerRect.width));
        const limitedY = Math.max(0, Math.min(newY, containerRect.height));

        setPosition({
          x: limitedX,
          y: limitedY,
        });
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <div className="flex w-full   gap-2 flex-col">
      <div className="relative dark:border-white border border-transparent w-full cursor-pointer aspect-[2.5/3] rounded-md overflow-hidden text-sm">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <Image
            onClick={() => (handleUpdateView(book?._id), addListBookRead(book))}
            src={`${DOMAIN}/api/books/${book?.images[0]}`}
            alt={book?.name}
            width={200}
            height={300}
            className="object-cover w-full h-full"
          />
        </Link>
        <ul className="bg-[#000000b7] absolute font-sans p-1  left-0 right-0 bottom-0 flex gap-2  text-white items-center justify-start">
          <li className="flex items-center opacity-80 gap-1">
            <FaRegEye />
            {book?.views}
          </li>
          <li className="flex items-center opacity-80 gap-1">
            <FaComment />
            {book?.comments || 0}
          </li>
          <li onClick={() => addListFavorite(book?._id)}
            className="flex items-center opacity-80 gap-1">
            <FaHeart />
            {book?.follows || 0}
          </li>
        </ul>
      </div>
      <div ref={containerRef} className="relative group">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <h3
            onClick={() => (handleUpdateView(book?._id), addListBookRead(book))}
            className="font-medium line-clamp-2 cursor-pointer  leading-5  hover:text-blue-700 "
          >
            {book?.name}
          </h3>
        </Link>
        <CardPopupBookMain book={book} position={position} />
      </div>
      <ul className="text-xs flex mt-1 flex-col gap-2 ">
        <li className="flex justify-between">
        <Link href={`truyen/${convertToSlug(book?.name)}/chapter-01.html`}  className="hover:text-blue-700 font-medium">Chương 94</Link>{" "}
          <p className=" text-gray-400 italic">42 phút trước</p>
        </li>
        <li className="flex justify-between">
        <Link href={`truyen/${convertToSlug(book?.name)}/chapter-01.html`}  className="hover:text-blue-700 font-medium">Chương 93</Link>{" "}
          <p className=" text-gray-400 italic">2 giờ trước</p>
        </li>
        <li className="flex justify-between">
          <Link href={`truyen/${convertToSlug(book?.name)}/chapter-01.html`} className="hover:text-blue-700 font-medium">Chương 92</Link>{" "}
          <p className=" text-gray-400 italic">1 ngày trước</p>
        </li>
      </ul>
    </div>
  );
}
