import { getListCategory } from "@/api/category";
import { ICategory, IFilter } from "@/interfaces";
import Link from "next/link";
export default async function CategoryList({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <ul className="border w-full grid grid-cols-2 p-2">
      <li className="col-span-2 dark:text-[#ff9601] text-[#2980b9] font-bold py-2">
        Thể loại
      </li>
      <li className="border-y col-span-2 hover:text-[#ae4ad9] p-1 cursor-pointer py-2">
        Tất cả
      </li>
      {categories?.map((category: ICategory, index: number) => (
        <Link href={`/tim-truyen/${category?._id}.html`}>
          <li
            key={index}
            className="border-b col-span-1 hover:text-[#ae4ad9] p-1 cursor-pointer py-2"
          >
            {category?.name.split(" ").slice(0, 2).join(" ")}
          </li>
        </Link>
      ))}
    </ul>
  );
}
