import Image from 'next/image'
import React, { useState } from 'react'
import SmoothScrollLink from './SmoothScrollLink';
import Link from 'next/link';

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-gray-800 w-full">
            <Link href='/'>
                <Image src="/decoprologo.png" alt="decopro logo" width={120} height={50} />
            </Link>
            <div className="flex md:hidden">
                <button id="hamburger" onClick={() => { toggleMenu() }}>
                    <Image className={`toggle ${isMenuOpen ? 'hidden' : 'block'}`} src="/menu.png" width={40} height={40} alt='menu icon' />
                    <img className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`} src="/close-window.png" width={40} height={40} alt='close menu icon' />
                </button>
            </div>
            <div
                className={`toggle ${isMenuOpen ? '' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-gray-500 md:border-none`}>
                <Link href="#features"
                    className="block md:inline-block text-slate-100 hover:text-orange-400 px-3 py-3 border-b-2 border-gray-500 md:border-none">Features
                </Link>
                <Link href="#howitworks"
                    className="block md:inline-block text-slate-100 hover:text-orange-400 px-3 py-3 border-b-2 border-gray-500 md:border-none">How It Works
                </Link>
                <Link href="#contact"
                    className="block md:inline-block text-slate-100 hover:text-orange-400 px-3 py-3 border-b-2 border-gray-500 md:border-none">Contact
                </Link>
            </div>
            <Link href="#getapp" scroll={true}
                className={`toggle ${isMenuOpen ? '' : 'hidden'} md:flex w-full md:w-auto px-4 py-2 text-right text-slate-50 bg-orange-400 hover:bg-white hover:text-orange-400 md:rounded-full`}>Get The App
            </Link>

        </nav>
    )
}

export default NavBar