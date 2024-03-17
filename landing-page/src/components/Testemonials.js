import React, { useRef, useState, useEffect } from 'react'
import TestemonialsData from '@/data/TestimonialsData'
import Image from 'next/image';

const Testemonials = () => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(imageRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    let isLeft = false;
    return (
        <section className="my-8 relative">
            <div className='absolute left-4 -top-20'>
                <Image src={isVisible ? '/light_lamp_on.png' : '/light_lamp_off.png'} alt='lamp background' width='100' height='150' />

            </div>
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 gap-12">
                <div className='relative'>
                    <h1 className="absolute w-full text-2xl md:text-4xl font-bold leading-none text-purple-900 bottom-1 right-1">Testimonial Highlights</h1>
                    <h1 className="text-2xl md:text-4xl font-bold leading-none text-purple-100">Testimonial Highlights</h1>
                </div>

                <div ref={imageRef} className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    {TestemonialsData.map((element, key) => {
                        isLeft = !isLeft;
                        return <div key={key} className="flex flex-col items-center  lg:mx-12">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-purple-500">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 text-lg italic text-gray-100">{element.description}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-purple-500">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-20 h-1 my-2 rounded-lg bg-violet-900"></span>
                            <p className='text-purple-950'>{element.user}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Testemonials