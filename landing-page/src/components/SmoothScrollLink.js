import Link from 'next/link';
import { useEffect } from 'react';

const SmoothScrollLink = ({ href, children }) => {
    useEffect(() => {
        const smoothScroll = (e) => {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        };

        const link = document.querySelector(href);
        if (link) {
            link.addEventListener('click', smoothScroll);
        }

        return () => {
            if (link) {
                link.removeEventListener('click', smoothScroll);
            }
        };
    }, [href]);

    return (
        <Link href={href}>{children}</Link>
    );
};

export default SmoothScrollLink;
