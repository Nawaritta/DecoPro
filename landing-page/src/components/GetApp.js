import Image from 'next/image'
import React from 'react'

const GetApp = () => {
    return (
        <div id='getapp' className='py-16 flex flex-col items-center text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-400 w-full'>
            <div className='flex flex-row gap-24 md:gap-36 mb-8 text-white'>
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>2000+</h3>
                    <p>Active users</p>
                </div>
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>100K</h3>
                    <p>Downloads</p>
                </div>
            </div>
            <h1 className='text-3xl text-blue-600 font-bold mb-8 uppercase'>Download Now on:</h1>
            <div className='flex flex-col md:flex-row gap-6 md:gap-12 justify-center'>
                <div>
                    <Image src='/playstore.png' alt='get app from playstore' width={270} height={25} />
                </div>
                <div className='flex flex-col items-center text-center'>
                    <Image src='/appstore.png' alt='get app from appstore' width={270} height={25} />
                    <p className='text-white pt-2'>Coming soon!</p>
                </div>
            </div>
        </div>
    )
}

export default GetApp