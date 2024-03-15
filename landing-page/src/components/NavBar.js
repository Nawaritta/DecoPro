import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Button from './Button'

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-gray-800 w-full">
            <Image src="/decoprologo.png" alt="decopro logo" width={120} height={50} />
            <div className="flex md:hidden">
                <button id="hamburger" onClick={() => { toggleMenu() }}>
                    <Image className={`toggle ${isMenuOpen ? 'hidden' : 'block'}`} src="/menu.png" width={40} height={40} />
                    <img className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`} src="/close-window.png" width={40} height={40} />
                </button>
            </div>
            <div
                className={`toggle ${isMenuOpen ? '' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-gray-500 md:border-none`}>
                <a href="#"
                    className="block md:inline-block text-slate-100 hover:text-orange-400 px-3 py-3 border-b-2 border-gray-500 md:border-none">Features
                </a>
                <a href="#"
                    className="block md:inline-block text-slate-100 hover:text-orange-400 px-3 py-3 border-b-2 border-gray-500 md:border-none">How It Works
                </a>
                <a href="#"
                    className="block md:inline-block text-slate-100 hover:text-orange-400 px-3 py-3 border-b-2 border-gray-500 md:border-none">Contact
                </a>
            </div>
            <a href="#"
                className={`toggle ${isMenuOpen ? '' : 'hidden'} md:flex w-full md:w-auto px-4 py-2 text-right text-slate-50 bg-orange-400 hover:bg-white hover:text-orange-400 md:rounded-full`}>Get The App
            </a>

        </nav>
    )
}

export default NavBar