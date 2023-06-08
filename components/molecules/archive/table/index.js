import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import portofolio from "constants/dummy/menu.json";
import Link from "next/link";

const Index = () => {
  console.log(portofolio, "user");
  return (
    <div className="w-full">
      {/* Commti */}
      <div>
        <p className="uppercase font-normal text-xl md:text-lg tracking-[9px] text-neutral-400 ml-1">
          ERWIN YULIYANTO 123123123123
        </p>
        <p className="uppercase font-normal text-xl md:text-lg tracking-[9px] text-neutral-400 ml-1">
          ERWIN YULIYANTO 123123123
        </p>
        <p className="font-bold text-[5rem] md:text-[3rem] text-neutral-900">
          Front End 123 1231231231
        </p>
        <p className="font-bold text-[5rem] md:text-[3rem] text-neutral-900 mb-4">
          Developer  123123123
        </p>
      </div>
      {/* end */}
      <div className="mb-20 mt-10 md:mb-10 mx-24 md:mx-4 flex flex-col ">
        <p className="uppercase font-normal text-xl tracking-[9px] text-neutral-400 ml-1">
          All.
        </p>
        <h2 className="font-bold md:text-[4vw] text-5xl whitespace-nowrap  text-neutral-900">
          My Project journey
        </h2>
      </div>
      <div className="mx-24 sm:w-full mt-10 flex md:mx-0 flex-col mb-[3rem] ">
        <table>
          <thead>
            <tr className="font-extrabold text-xl md:text-sm text-blueGray-500">
              <th className="w-16 p-2 ">No</th>
              <th className="w-[20rem] p-2 ">Title</th>
              <th className="w-[20rem] p-2 ">Build with</th>
              <th className="w-[3rem] p-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {portofolio?.menu?.map((item, index) => (
              <tr
                key={index}
                className=" hover:shadow-lg cursor-pointer text-blueGray-500 text-lg md:text-sm"
              >
                <td className="text-center w-16 p-2 ">{index + 1}</td>
                <td className="text-center p-2 ">{item.nama}</td>
                <td className="text-center p-2 ">awdawdawd</td>
                <td className="text-center p-2 flex justify-center ">
                  <div className="w-3/4  flex justify-evenly">
                    <Link href="/">
                      <AiFillGithub size={24} />
                    </Link>
                    <Link href="/">
                      <BiLinkExternal size={24} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
