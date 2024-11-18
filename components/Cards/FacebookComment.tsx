import * as React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import df_avatar from "@/public/images/anonymous.png";
export interface IFacebookCommentProps {}

export default function FacebookComment(props: IFacebookCommentProps) {
  const [showbtnPost, setShowbtnPost] = React.useState(false);
  const [showinputReply, setShowInputReply] = React.useState(false);
  return (
    <nav className="flex flex-col p-2">
      <section className="flex text-sm pb-5 border-b -[1px] justify-between">
        <b>1 comment</b>
        <div className="flex  items-center gap-1">
          <p className="">Sort by</p>
          <select
            className="border border-gray-400 font-medium  rounded"
            name=""
            id=""
          >
            <option value="">Newest</option>
            <option value="">Oldest</option>
          </select>
        </div>
      </section>
      <section className="py-8  flex gap-2 ">
        <Image
          width={100}
          height={100}
          className="w-10 h-10  object-cover "
          src={df_avatar}
          alt=""
        />
        <nav className="w-full  flex flex-col">
          <textarea
            onClick={() => setShowbtnPost(true)}
            name=""
            id=""
            placeholder="Add a comment"
            className="w-full h-max border p-2"
          />
          <div
            className={`w-full p-2 text-end border ${!showbtnPost && "hidden"}`}
          >
            {" "}
            <button className="p-[2px] rounded px-2  bg-[#385898] font-bold w-max text-white">
              Post
            </button>
          </div>
        </nav>
      </section>
      <ul className="w-full flex flex-col py-2 gap-3">
        <li className="flex  gap-2">
          <Image
            width={100}
            height={100}
            className="w-10 h-10  object-cover "
            src={df_avatar}
            alt=""
          />
          <div className="w-[85%] flex flex-col gap-2">
            <h2 className="font-bold hover:underline text-[#385898]  dark:text-[#3f94d5]">
              Nguyễn Minh Quang
            </h2>
            <p className="leading-5">
              Nội dung Comment abc bacb abc bac bac bac acb acb bac bac bacb acb
              abc bac bac ac ac acb ac ac ac{" "}
            </p>
            <ul className="flex  text-sm text-[#385898] dark:text-[#3f94d5] gap-2">
              <li className="hover:underline cursor-pointer">Like</li>
              <li
                onClick={() => setShowInputReply(true)}
                className="hover:underline cursor-pointer"
              >
                Reply
              </li>
              <li className="hover:underline cursor-pointer">Mark as spam</li>
              <li className="text-[#767676] hover:underline cursor-pointer">
                20w ago
              </li>
            </ul>
            <nav
              className={`w-full  flex flex-col ${!showinputReply && "hidden"}`}
            >
              <textarea
                name=""
                id=""
                placeholder="Add a reply"
                className="w-full h-max outline-none text-black border p-2"
              />
              <div
                className={`w-full p-2 flex gap-1 justify-end text-end border `}
              >
                {" "}
                <button
                  onClick={() => setShowInputReply(false)}
                  className="border px-2 py-[2px] border-gray-600 rounded font-bold"
                >
                  Cancel
                </button>
                <button className="p-[2px] rounded px-2  bg-[#385898] font-bold w-max text-white">
                  Post
                </button>
              </div>
            </nav>
          </div>
        </li>
      </ul>
      <p className="flex gap-2 items-center text-[#385898] dark:text-[#3f94d5] hover:underline py-2 border-t">
        <FaFacebookSquare size={20} />
        Fabook Comments Plugin
      </p>
    </nav>
  );
}
