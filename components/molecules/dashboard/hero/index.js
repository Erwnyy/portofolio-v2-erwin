import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <div className='flex flex-col mb-20 items-center '>
            <div className='flex md:flex-col-reverse justify-around  w-[95%] border-b-4 border-indigo-500 border-2'>
                <div className=' w-1/2 md:w-full mt-28 md:mt-0  z-30  ml-24 md:ml-0'>
                    <div className='mb-6 flex flex-col md:items-center z-50'>
                        <p className='uppercase font-normal text-xl md:text-lg tracking-[9px] text-neutral-400 ml-1'>ERWIN YULIYANTO</p>
                        <p className='font-bold text-[5rem] md:text-[3rem] text-neutral-900'>Front End</p>
                        <p className='font-bold text-[5rem] md:text-[3rem] text-neutral-900 mb-4'>Developer</p>
                        <div className='flex md:justify-center'>
                            <span className='font-sans md:text-center text-slate-400 text-lg'>A Front end developer who loves Web Development, Mobile App Development and Artificial Intelligence. Currently, on his 3rd year of study at university.</span>
                        </div>
                    </div>
                    <div className=' w-1/2 md:w-full flex md:justify-center '>
                        <div className='cursor-pointer'>
                            <Link href="/archive" shallow={true}>
                                <button className='cursor-pointer mr-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8  border-b-4 border-blue-700 hover:border-blue-500 rounded'>My Project</button>
                            </Link>
                        </div>
                        <div className='cursor-pointer '>
                            <a href='https://github.com/Erwnyy' >
                                <button className='cursor-pointer mr-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8  border-b-4 border-blue-700 hover:border-blue-500 rounded'>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 md:w-full md:ml-0 h-[100vh] flex justify-center md:h-[43vh] object-top '>
                    <div className=" w-[100%] h-[200%] right-0 relative mt-[-230px] md:bg-slate-200 md:h-[20rem] md:bottom-0 md:border-4 md:mt-[23px] md:w-[20rem] md:rounded-full z-10">
                        {/* <Link href="/" shallow={true}> */}
                        <Image
                            src="/image/foto3.png"
                            responsive="true"
                            fill
                            priority={true}
                            alt="..."
                            className='object-cover md:object-cover rounded-full

                            '
                        />
                        {/* <Image
                            style={{ listStyle: "none", borderRadius: "15px" }}
                            src="/image/foto3.png"
                            alt="..."
                            className='object-cover animate-waving-hand drop-shadow-2xl'
                            layout="fill"
                            objectFit="content"
                        /> */}
                        {/* </Link> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Index