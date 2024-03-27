import React from 'react'

const HowItWorks = () => {
    return (
        <section id='howitworks' className="relative p-6 bg-gradient-to-b from-amber-500 to-pink-500 text-gray-100">
            <div className='absolute right-0 -top-12 md:-top-24'>
                <img src='/phone_bg.png' className='w-32 md:w-56' />
            </div>
            <div className="relative container mx-auto z-10">
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-orange-900">How it works</span>
                <h2 className="max-sm:text-2xl text-3xl md:text-5xl font-bold text-center text-gray-50">Decide with Ease<br /> Design with Confidence<br />
                    <span className='text-orange-800'>In Few Steps</span>
                </h2>
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    <div className="flex flex-col p-8 space-y-4 rounded-3xl bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-pink-500 text-gray-900">1</div>
                        <p className="text-2xl">
                            Scan Your Space
                        </p>
                        <p>Utilize the app to scan your room with your device&apos;s camera, allowing the app to create a digital representation of your space.</p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-3xl bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-pink-500 text-gray-900">2</div>
                        <p className="text-2xl">
                            Furnish and Decorate
                        </p>
                        <p> Browse through a variety of 3D furniture and decor items. Place them virtually within your room to visualize how they look and fit in your space.</p>
                    </div>
                    <div className="relative flex flex-col p-8 space-y-4 rounded-3xl bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-pink-500 text-gray-900">3</div>
                        <p className="text-2xl">
                            Experience and Adjust
                        </p>
                        <p>Use augmented reality to see your design come to life within your actual room. Adjust and customize furniture placements and styles until you achieve the desired look.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks