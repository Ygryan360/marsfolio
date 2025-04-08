"use client"; // Composant client car il utilise des interactions (e.g., menu mobile)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "À propos", href: "/about" },
        { name: "Mon travail", href: "/work" },
        { name: "Ressources", href: "/resources" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="navbar shadow fixed top-0 w-full z-50 backdrop-blur-sm bg-background/85">
            <div className="navbar-start">
                {/* Logo ou nom */}
                <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
                    Mars
                </Link>
            </div>

            {/* Menu pour desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-lg">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bouton CTA pour desktop */}
            <div className="navbar-end hidden lg:flex">
                <Link href="/contact" className="btn btn-primary">Travaillons ensemble</Link>
            </div>

            {/* Menu burger pour mobile */}
            <div className="navbar-end lg:hidden">
                <button
                    className="btn btn-ghost z-[51]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Menu déroulant pour mobile */}
            {isOpen && (
                <div className="lg:hidden fixed w-screen h-screen top-0 left-0 z-50 bg-primary-content/70 flex flex-col justify-end items-center">
                    <ul className="menu px-4 pt-8 pb-4 justify-center items-center bg-base-100 w-full rounded-t-3xl">
                        {navLinks.map((link) => (
                            <li key={link.href} className="text-lg flex justify-center items-center py-2">
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="btn-wide "
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="btn btn-primary mt-2 btn-wide">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                Travaillons ensemble
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}