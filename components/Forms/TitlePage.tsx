import Link from 'next/link';
import * as React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface IAppProps {
}

export default function TitlePage({ titlePage }: { titlePage: string }) {
    return (
        <ul className="flex font-medium   flex-wrap  text-[#288ad6]  items-center gap-1 lg:text-base text-sm">
            <Link href="/">
                {" "}
                <li className="hover:text-[#ae4ad9] dark:hover:text-white dark:text-white cursor-pointer hover:underline ">
                    Trang chủ
                </li>
            </Link>

            <li className=" hover:text-[#ae4ad9] dark:text-[#ff9601] dark:hover:text-[#ff0000]  h cursor-pointer flex items-center gap-1 hover:underline ">
                {" "}
                <MdKeyboardDoubleArrowRight color="gray" />
                {titlePage}
            </li>
        </ul>
    );
}
