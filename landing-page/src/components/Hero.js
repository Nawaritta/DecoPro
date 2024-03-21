import React, { useState } from 'react'
import dynamic from 'next/dynamic';


const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Hero = () => {
    return (
        <div id='hero' className='relative bg-purple-400 h-screen-minus-header w-full overflow-hidden'>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover filter brightness-[.25]"
                autoPlay
                loop
                muted
            >
                <source src="/hero_video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl md:text-9xl text-orange-400 font-bold">DecoPro</h1>
                <p className='text-lg md:text-xl text-center'>Discover the art of virtual interior design.
                </p>
            </div>
        </div>
    )
}

export default Hero