"use client";
import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { useReviewBook } from "@/stores/addListBookRead";
import { convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import Slider from "react-slick";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
const NextArrow = (props: any) => {
  const { onClick, currentSlide } = props;
  return (
    <button
      className={` border shadow-md shadow-black hover:opacity-70 opacity-40 flex justify-center items-center text-gray-600   w-[40px] h-[40px] absolute right-4 z-10 top-[40%] rounded-lg bg-white `}
      onClick={onClick}
    >
      <span>
        <IoIosArrowForward size={25} />
      </span>
    </button>
  );
};
const PrevArrow = (props: any) => {
  const { onClick, currentSlide } = props;
  return (
    <button
      className={` border shadow-md shadow-black hover:opacity-70 opacity-40 flex justify-center items-center text-gray-600   w-[40px] h-[40px] absolute left-4 z-10 top-[40%] rounded-lg bg-white `}
      onClick={onClick}
    >
      <span>
        <IoIosArrowBack size={25} />
      </span>
    </button>
  );
};

export default function SlideHome({ bookData }: { bookData: IBook[] }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  const { addListBookRead } = useReviewBook();
  return (
    <nav className="w-full">
      <h3 className="flex items-center w-full gap-1 dark:text-[#ff9601] text-lg text-[#2980b9] mb-3">
        NetTruyen - Truyện đề cử <IoIosArrowForward />
      </h3>
      <Slider {...settings}>
        {bookData.map((book, index) => {
          return (
            <Link
              href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}
              key={index}
              className=" "
            >
              <div
                onClick={() => (
                  handleUpdateView(book?._id), addListBookRead(book)
                )}
                className="lg:w-[95%] w-[98%] aspect-[2.5/3] cursor-pointer relative border-transparent border dark:border-white h-full  m-auto"
              >
                <Image
                  src={`${DOMAIN}/api/books/${book?.images[0]}`}
                  alt={book?.name}
                  width={200}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="bg-[#000] bg-opacity-70 absolute font-sans px-2 p-1 left-0 right-0 bottom-0 flex flex-col text-white items-center justify-center">
                  <h4 className="text-base mb-1 line-clamp-1">{book?.name}</h4>
                  <span className="flex w-full justify-between text-xs ">
                    <p>Chương 460</p>
                    <p className="flex gap-1 items-center italic">
                      <MdOutlineWatchLater /> 6 ngày trước
                    </p>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </nav>
  );
}
