import Image from 'next/image'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Snack from './Snack';

const Contact = () => {
    const snackContent = [
        {
            type: 'SUCCESS',
            message: "Your message has been successfully sent. Thank you for reaching out!"
        },
        {
            type: 'FAILED',
            message: 'Oops! Message delivery failed. Please try again later.'
        }
    ]

    const [isSent, setIsSent] = useState(false);
    const displaySnack = () => {
        setIsSent(true);
    }

    const hideSnack = () => {
        setIsSent(false);
    }

    const [snack, setSnack] = useState({});
    const changeSnackContent = (val) => {
        setSnack(snackContent[val]);
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fb5a3dn', 'template_k0noqvl', form.current, {
                publicKey: 'w06702Jbv6zhKCzuW',
            })
            .then(
                () => {
                    changeSnackContent(0);
                    console.log('Email sent SUCCESSFULLY!');
                },
                (error) => {
                    changeSnackContent(1);
                    console.log('FAILED...', error.text);
                },
            );
        displaySnack();
    }

    return (
        <div id='contact' className="grid w-full grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gradient-to-b from-blue-800 to-indigo-900 text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
                    <div className="text-gray-300">Step into the world of AR interior design! Need a hand, have a question, or just want to share your awe-inspiring creations? Let&apos;s connect and bring your dream space to life, one virtual room at a time!</div>
                </div>
                <Image src="/couch.png" alt="" className="p-6 w-[300] h-60 md:h-64" width={425} height={100} />
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" name="user_name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800" required />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" name="user_email" type="email" className="w-full p-3 rounded bg-gray-800" required />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" name="message" rows="3" className="w-full p-3 rounded bg-gray-800" required></textarea>
                </div>
                <button type="submit" value="Send" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-400 hover:bg-white text-white hover:text-orange-400">Send Message</button>
            </form>

            <Snack sent={isSent} type={snack["type"]} message={snack["message"]} hideSnack={hideSnack} />
        </div>
    )
}

export default Contact