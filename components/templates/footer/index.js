import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Index = () => {
  const [dateState, setDateState] = useState(new Date());


  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className='flex flex-col items-center bg-gray-background'>
      <div className='w-3/4 md:h-[45rem]'>
        <div className='w-full h-[50vh] mb-10 border-t-[3px] ' >
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <h2 className='font-normal text-center text-lg tracking-[6px] text-neutral-400'>
                Get in touch
              </h2>
              <Link href='/contact'>
                <div className='pre flex items-center gap-2 lg:gap-5 relative cursor-pointer'>
                  <h2 className='text-center text-5xl font-bold lg:text-[4vw] whitespace-nowrap leading-none w-[100%] text-neutral-900 md:text-[6vw]'>Let`s Send Message</h2>
                  <h2 className='text-center text-3xl font-bold lg:text-[5vw] whitespace-nowrap leading-none w-[100%] text-neutral-900 translate-y-1 lg:translate-y-2'><BsArrowRight /></h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* footer clock */}
        <div className='w-full  flex justify-between md:flex-col-reverse' >
          <div className='flex w-full md:justify-center  '>
            <div className='flex md:w-1/2 w-1/4 justify-evenly text-neutral-900'>
              <AiFillGithub size={28} />
              <AiFillLinkedin size={28} />
              <AiOutlineInstagram size={28} />
            </div>
          </div>

          <div className='w-full md:flex md:justify-center flex justify-end '>
            <div className='flex mb-10 md:w-full w-3/4 md:justify-around justify-evenly'>
              <div className=' flex flex-col items-start'>
                <h2 className=' font-normal text-center text-lg tracking-[3px] text-neutral-400'>
                  LOCATION
                </h2>
                <h2 className='font-normal text-center text-lg tracking-[3px] text-black font-semibold '>
                  INDONESIA
                </h2>
              </div>

              <div className='flex flex-col items-center'>
                <h2 className='font-normal text-center text-lg tracking-[3px] text-neutral-400'>
                  CLOCK
                </h2>
                <h2 className='font-normal text-center text-lg tracking-[3px] text-black font-semibold '>
                  -
                </h2>
                {/* {dateState.map((e, index) => {
                <h2 className='font-normal text-center text-lg tracking-[3px] text-black font-semibold '>
                  {e}
                </h2>
              })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index