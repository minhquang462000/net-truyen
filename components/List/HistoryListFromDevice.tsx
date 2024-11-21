
import { IBook } from "@/interfaces";
import HistoryItemCard from "../Cards/HistoryItemCard";

export interface IHistoryListFromDeviceProps { }

export default function HistoryListFromDevice(
  { reviewBook }: { reviewBook: IBook[] }
) {
  return (
    <div className="w-full mt-4 min-h-[500px]">
      <p className="my-2">
        Bạn chưa đọc truyện nào.
      </p>
      <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
        {reviewBook?.map((item, index) =>
          <HistoryItemCard list="device" key={index} book={item} />)}
      </div>
    </div>
  );
}
