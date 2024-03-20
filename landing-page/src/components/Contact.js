import Image from 'next/image'
import React, { useRef } from 'react'

const Contact = () => {
    return (
        <div className="grid w-full grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gradient-to-b from-blue-800 to-indigo-900 text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="text-gray-300">Step into the world of AR interior design! Need a hand, have a question, or just want to share your awe-inspiring creations? Let's connect and bring your dream space to life, one virtual room at a time!</div>
                </div>
                <Image src="/couch.png" alt="" className="p-6 w-[300] h-60 md:h-64" width={425} height={100} />
            </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded bg-gray-800" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-800"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-400 hover:bg-white text-white hover:text-orange-400">Send Message</button>
            </form>
        </div>
    )
}

export default Contact