"use client";
import { convertToSlug } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export interface IAppProps {}

export default function SearchHeader(props: IAppProps) {
  const [keySearch, setKeySearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/tim-truyen?search=${convertToSlug(keySearch)}`);
  };
  const handleKeyEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex  items-center justify-between w-full md:w-[400px]  bg-white">
      <input
        className="outline-none px-2 placeholder:text-gray-500 bg-transparent"
        placeholder="Tìm truyện..."
        onChange={(e) => setKeySearch(e.target.value)}
        onKeyPress={handleKeyEnter}
        type="text"
      />
      <IoMdSearch
        onClick={handleSearch}
        className="cursor-pointer hover:bg-gray-200 p-2 w-8 h-8"
      />
    </div>
  );
}
