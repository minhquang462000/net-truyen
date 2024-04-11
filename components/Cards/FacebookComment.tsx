import * as React from "react";
import { FaFacebookSquare } from "react-icons/fa";

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
        <img
          className="w-16 hidden md:block h-14 rounded-full overflow-hidden"
          src="https://cdnnvd.com/nettruyen/thumb/nhiem-vu-cua-ke-manh-nhat.jpg"
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
          <img
            className="w-12 h-12 object-cover "
            src="https://cdnnvd.com/nettruyen/thumb/nhiem-vu-cua-ke-manh-nhat.jpg"
            alt=""
          />
          <div className="w-[85%] flex flex-col gap-2">
            <h2 className="font-bold hover:underline text-[#385898]">
              Nguyễn Minh Quang
            </h2>
            <p className="leading-5">
              Nội dung Comment abc bacb abc bac bac bac acb acb bac bac bacb acb
              abc bac bac ac ac acb ac ac ac{" "}
            </p>
            <ul className="flex  text-sm text-[#385898] gap-2">
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
                className="w-full h-max border p-2"
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
      <p className="flex gap-2 items-center text-[#385898] hover:underline py-2 border-t">
        <FaFacebookSquare size={20} />
        Fabook Comments Plugin
      </p>
    </nav>
  );
}
