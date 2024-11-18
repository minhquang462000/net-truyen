'use client'
import { IoIosArrowUp } from "react-icons/io";
export default function ButtonBackToTopPage() {

    // Cuộn lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <button
            onClick={scrollToTop}
            className='  font-bold  w-[40px] h-[40px] fixed bottom-[30px] right-5 border border-[#ddd] hover:border-[#9f9f9f]  rounded-md  z-[999] flex items-center justify-center '>
            <IoIosArrowUp size={20} color="#ee2c74" />
        </button>
    );
}
