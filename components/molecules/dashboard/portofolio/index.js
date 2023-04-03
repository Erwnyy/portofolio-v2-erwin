import Image from 'next/image'
import React, { useState } from 'react'
import portofolio from 'constants/dummy/menu1.json';
import Link from 'next/link';

const Index = () => {
    const [detail, setDetail] = useState([])
    console.log(detail)

    const handleModal = (id) => {
        // setOpenModal(true)
        const detail = portofolio.menu.find((x) => x.id === id);
        setDetail(detail)
    }

    return (
        <div className='flex flex-col mb-10 z-30'>
            <div className='mb-20 md:mb-10 mx-24 md:mx-5 flex flex-col md:items-center '>
                <p className='uppercase font-normal text-xl tracking-[9px] text-neutral-400 ml-1'>A CLIENT PROJECT.</p>
                <h2 className='font-bold md:text-[4vw] text-5xl whitespace-nowrap  text-neutral-900'>My Project journey</h2>
            </div>
            <div className='mx-11 md:mx-0 flex flex-wrap justify-center mb-20'>
                {portofolio?.menu?.map((item, idx) => (
                    <div key={idx} className='w-[35rem] h-[20rem] sm:w-[20rem] m-3 cursor-pointer'>
                        <div className="w-[100%] h-[100%] relative z-10 ">
                            <Link href={{
                                pathname: `/detail-portofolio`,
                                query: {
                                    id: item.id,
                                    nama: item.nama,
                                    image: item.image,
                                    desc: item.desc,
                                    madewith: item.madewith,
                                    github: item.github,
                                    link: item.link

                                 }
                        
                            }}
                                shallow={true}>
                            <div className=' flex justify-center items-center bg-black opacity-50 h-[20rem] hover:opacity-0 z-50 relative transition hover:duration-150 duration-300 ease-in-out '>
                                <h2 className=' uppercase font-normal md:text-lg text-xl tracking-[9px] text-neutral-100'>{item.nama}</h2>
                            </div>
                            <Image
                                src={item.image}
                                alt='nft'
                                layout='fill'
                                priority={true}
                                className=' duration-300 z-10'
                                objectFit='cover'
                            />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full  flex flex-col items-center'>
                <p className='uppercase font-normal text-lg tracking-[3px] text-neutral-800 ml-1 mb-5'>Looking for another project?</p>
                <div>
                <Link href="/archive">
                    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow cursor-pointer">
                        <div class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[1050ms] ease-out group-hover:w-full"></div>
                        <span class="relative text-black group-hover:text-white">See project!</span>
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Index