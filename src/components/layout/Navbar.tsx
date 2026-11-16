"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "OEM Projects", href: "/projects" },
        { name: "Services", href: "/services" },
        { name: "Manpower", href: "/skilled-manpower" },
        { name: "About Us", href: "/about-us" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-ink text-plate-ink border-b-[3px] border-ink">
            <div className="container">
                <div className="flex justify-between items-center h-20 gap-6">
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <Link
                            href="/"
                            aria-label="Razin Tooling Services home"
                            className="inline-flex items-center gap-3 font-display font-bold text-xl sm:text-2xl uppercase text-plate-ink no-underline"
                        >
                            <img
                                src="/logo.svg"
                                alt=""
                                width={36}
                                height={36}
                                className="h-9 w-9 flex-shrink-0"
                            />
                            <span>Razin Tooling Services</span>
                        </Link>
                        <span className="hidden lg:inline-block text-sm text-paper border-l border-muted pl-4">
                            Asif N Shaikh, Pune
                        </span>
                    </div>

                    <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isCurrent = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={isCurrent ? "page" : undefined}
                                    className={`text-sm font-medium whitespace-nowrap transition-colors py-1 ${
                                        isCurrent
                                            ? "text-plate-ink underline decoration-accent decoration-2 underline-offset-4"
                                            : "text-paper hover:text-plate-ink no-underline"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href="tel:+919922957006"
                            className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-plate-ink no-underline hover:underline px-2 py-2 whitespace-nowrap"
                        >
                            <Phone size={16} aria-hidden="true" />
                            <span className="figure-num">+91 99229 57006</span>
                        </a>
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex btn btn--secondary"
                        >
                            Send Dossier / Inquire
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2.5 text-plate-ink border-2 border-paper bg-ink hover:bg-ink-2 active:translate-y-px transition-colors"
                            aria-expanded={isOpen}
                            aria-controls="mobile-site-menu"
                        >
                            <span className="visually-hidden">Toggle navigation menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div id="mobile-site-menu" className="md:hidden bg-ink border-t border-muted">
                    <div className="container py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                aria-current={pathname === link.href ? "page" : undefined}
                                className="block py-2.5 text-base font-medium text-plate-ink no-underline border-b border-ink-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3">
                            <a
                                href="tel:+919922957006"
                                className="btn btn--secondary w-full whitespace-nowrap"
                            >
                                Call +91 99229 57006
                            </a>
                            <Link
                                href="/contact"
                                className="btn btn--primary w-full whitespace-nowrap"
                                onClick={() => setIsOpen(false)}
                            >
                                Send RFQ
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
