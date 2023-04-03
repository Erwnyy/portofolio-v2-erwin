import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const Index = () => {
    const { query } = useRouter();
    console.log(query)
    return (
        <>
            <div className='w-full md:h-1/4'>
                <div className='mx-24 mt-14 flex justify-center md:mx-0'>
                    <div className="w-[75%] h-[75vh] md:h-[28vh] md:w-[90%] relative z-10">
                        {/* <Link href="/" shallow={true}> */}
                        <Image
                            src={query.image}
                            responsive="true"
                            fill
                            priority={true}
                            alt="..."
                        />
                        {/* </Link> */}
                    </div>
                </div>
                <div className='mx-24 mt-20 flex justify-center md:flex-col md:mx-5'>
                    <div className='w-1/2 md:w-full md:mb-10'>
                        <div className='w-full mb-12'>
                            <p className='uppercase font-normal text-xl md:text-lg tracking-[9px] text-neutral-400 ml-1'>PROJECT</p>
                            <p className='font-mono text-4xl md:text-lg font-normal tracking-[5px] text-black'>{query.nama}</p>
                        </div>
                        <div className='w-full mb-5'>
                            <p className='uppercase font-normal text-lg md:text-lg tracking-[9px] text-neutral-400 ml-1'>MADE WITH</p>
                            <p className='font-mono text-2xl md:text-lg text-black'>{query.madewith}</p>
                        </div>
                        <div className='w-full mb-5'>
                            <p className='uppercase font-normal text-lg md:text-lg tracking-[9px] text-neutral-400 ml-1'>PREVIEW</p>
                            <a href={query.link}>
                                <p className='font-mono text-xl md:text-lg text-black'>{query.link}</p>
                            </a>
                        </div>
                        <div className='w-full mb-5'>
                            <p className='uppercase font-normal text-lg md:text-lg tracking-[9px] text-neutral-400 ml-1'>GITHUB</p>
                            <p className='font-mono text-2xl md:text-lg text-black'>{query.github}</p>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-full '>
                        <div className='w-[100%]'>
                            <p className='font-mono text-2xl md:text-lg text-neutral-400'>{query.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index