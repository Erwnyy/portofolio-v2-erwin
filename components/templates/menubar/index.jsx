import Image from "next/image";
import Service from "./service";
import Link from "next/link";
import { BiCategoryAlt, BiSearchAlt, BiCart, BiHome } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Index = ({ type = "LIGHT" }) => {
  // const { renderResource, navbarMenu, router } = Service({
  //   type,
  // });

  return (
    <div className="flex flex-col items-start ">
      <div className='lg:h-full z-50 fixed bottom-0 w-[31vh] md:w-full'>
        <div className="flex h-full items-center pt-5 md:items-end md:justify-center">
          <div className="flex items-center justify-around h-[50vh] w-[9vh] m-6 md:m-2 py-5 bg-dark-1 rounded-full lg:flex-col sm:w-full md:h-[10vh] md:h-[9vh] md:w-[24rem]">
            <Link href="/">
              <div className="flex items-center justify-center text-white hover:text-blue-300">
                <div className="pb-[5px] h-[40px] w-[40px] flex justify-center items-center bg-dark-2 rounded-full" >
                  <BiHome size={23} />
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center text-slate-50 text-sm hover:text-blue-300">
                <div className="pb-[5px] h-[40px] w-[40px] flex justify-center items-center bg-dark-2 rounded-full" >
                  <BiHome size={23} />
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center text-white hover:text-blue-300">
                <div className="pb-[5px] h-[40px] w-[40px] flex justify-center items-center bg-dark-2 rounded-full" >
                  <BiHome size={23} />
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center text-white hover:text-blue-300">
                <div className="pb-[5px] h-[40px] w-[40px] flex justify-center items-center bg-dark-2 rounded-full" >
                  <MdDarkMode size={23} />
                  {/* <MdLightMode size={23} /> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
