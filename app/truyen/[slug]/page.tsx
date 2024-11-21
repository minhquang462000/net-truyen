import CardTopMonth from "@/components/List/ListBookTop";
import ContentItem from "@/components/Cards/ContentItem";
import ItemCardMain from "@/components/Cards/ItemCardMain";
import ChapterListItem from "@/components/List/ChaterListItem";
import CommentListItem from "@/components/List/CommentListItem";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import * as React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IBook, ICategory, IFilter, PropParams } from "@/interfaces";
import { Metadata, ResolvingMetadata } from "next";
import { getListBooks, getOneBook } from "@/api/books";
export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const book = await getOneBook(id as string);
  return {
    title: book?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: book?.description,
    openGraph: {
      title: book?.name,
      description: book?.description,
      type: "website",
      images: [
        `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book?.images[0]}`,
      ],
    },
  };
}
export default async function page({ params, searchParams }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const bookData = await getOneBook(id as string);
  const { data: bookTopMonth }: { data: IBook[] } = (await getListBooks({
    sortKey: "monthly",
  } as IFilter)) || { data: [] };
  return (
    <MainLayout>
      <main className="w-full font-medium lg:w-[1200px] dark:text-white dark:bg-[#252525] bg-white flex flex-col gap-5 p-4 m-auto">
        <ul className="flex dark:text-[#ff9601] flex-wrap  text-[#288ad6]  items-center gap-1  text-sm">
          <Link href="/">
            {" "}
            <li className="hover:text-[#ae4ad9] dark:hover:text-[#ff0000]  hover:underline ">
              Trang chủ
            </li>
          </Link>
          <Link href="/tim-truyen">
            <li className=" hover:text-[#ae4ad9] dark:hover:text-[#ff0000] flex items-center gap-1 hover:underline ">
              {" "}
              <MdKeyboardDoubleArrowRight color="gray" />
              Thể loại
            </li>
          </Link>
          <li className="hover:text-[#ae4ad9] dark:hover:text-white dark:text-white cursor-pointer flex items-center gap-1 hover:underline ">
            {" "}
            <MdKeyboardDoubleArrowRight color="gray" />
            {bookData?.name}
          </li>
        </ul>
        <section className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <div className="lg:col-span-8 w-full">
            <ItemCardMain book={bookData} />
            <ContentItem book={bookData} />
            <ChapterListItem  bookName={bookData?.name}/>
            <CommentListItem />
          </div>
          <CardTopMonth booksInit={bookTopMonth} />
        </section>
      </main>
    </MainLayout>
  );
}
