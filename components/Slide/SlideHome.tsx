import * as React from 'react';
import { GoClock } from 'react-icons/go';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import Slider from "react-slick";
export interface ISlideHomeProps {
}
const listImg = [
    "https://cdnnvd.com/nettruyen/thumb/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.jpg",
    "https://cdnnvd.com/nettruyen/thumb/gui-em-nguoi-bat-tu.jpg",
    "https://cdnnvd.com/nettruyen/thumb/kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-ri-no-kanojo.jpg",
    "https://cdnnvd.com/nettruyen/thumb/man-cap-tra-xanh-xuyen-khong-thanh-tieu-dang-thuong.jpg",
    "https://cdnnvd.com/nettruyen/thumb/anh-ay-rat-hay-treu-choc-toi.jpg"


]
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

export default function SlideHome(props: ISlideHomeProps) {
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
                }
            }
            ,
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
                }
            }
            ,
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
                }
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
                }
            }
        ]
    };
    return (
        <nav className='w-full m'>
            <h1 className='flex items-center w-full gap-1 text-lg text-[#2980b9] mb-3'>NetTruyen - Truyện đề cử <IoIosArrowForward /></h1>
            <Slider {...settings}>
                {listImg.map((item, index) => {
                    return (
                        <div key={index} className='w-full h-[220px] '>
                            <div

                                className="w-[95%] cursor-pointer relative h-full  m-auto"
                            >
                                <img className="h-full w-full object-cover" src={item} alt="img" />
                                <nav className="bg-[#0000009a] absolute font-sans px-2 p-1 left-0 right-0 bottom-0 flex flex-col text-white items-center justify-center">
                                    <h1 className="text-lg">Tên Truyện tranh</h1>
                                    <span className='flex w-full justify-between text-xs '>
                                        <p>Chương 460</p>
                                        <p className='flex gap-1 items-center italic'><MdOutlineWatchLater /> 6 ngày trước</p>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </nav>
    );
}
