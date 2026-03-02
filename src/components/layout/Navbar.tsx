"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Manpower", href: "/skilled-manpower" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-700 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                                Razin Tooling Services
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                        >
                            Get a Quote
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-b border-slate-700 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 pb-2">
                            <Link
                                href="/contact"
                                className="block w-full text-center px-4 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
