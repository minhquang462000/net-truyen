import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export interface IInfoCardProps {
}

export default function InfoCard (props: IInfoCardProps) {
  return (
    <nav className="flex  bg-white   gap-1 border border-[#4080ff] w-full h-10  items-center ">
    <FaInfoCircle className="text-white text-xs p-3 w-10 h-full bg-[#4080ff]" />
    <p className="text-xs font-medium text-[#ff0000] p-1">
      Không truy cập web giả mạo để tránh bị hack tài khoản
    </p>
  </nav>
  );
}
