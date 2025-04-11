import React from 'react'
import Facebook from './icons/facebook'
import Whatsapp from './icons/whatsapp'
import X from './icons/x'
import Link from 'next/link'
import Github from './icons/github'
import Instagram from './icons/instagram'
import Linkedin from './icons/linkedin'


export default function Footer() {
    return (
        <div className='relative z-10 bg-base-300'>
            <footer className="footer container sm:footer-horizontal mx-auto text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link href={'https://twitter.com/marsahadji'} target='_blank'>
                        <X />
                    </Link>
                    <Link href={'https://wa.me/22870046628'} target='_blank'>
                        <Whatsapp />
                    </Link>
                    <Link href={'https://www.facebook.com/marsahadji'} target='_blank'>
                        <Facebook />
                    </Link>
                    <Link href={'https://www.github.com/marsahadji'} target='_blank'>
                        <Github />
                    </Link>
                    <Link href={'https://www.instagram.com/marsahadji'} target='_blank'>
                        <Instagram />
                    </Link>
                    <Link href={'https://www.linkedin.com/marsahadji'} target='_blank'>
                        <Linkedin />
                    </Link>
                </nav>
            </footer>
        </div>
    )
}