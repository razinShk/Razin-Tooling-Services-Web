import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="band--ink border-t-[3px] border-ink pt-16 pb-10 relative z-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            aria-label="Razin Tooling Services home"
                            className="inline-flex items-center gap-3 font-display font-bold text-2xl uppercase text-plate-ink no-underline"
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
                        <p className="text-sm text-paper leading-relaxed">
                            Press tool installation, 210 mm deep-draw die proving, in-press modifications, and 5 to 20 year toolmakers for Indian automotive OEMs and Tier-1 stampers.
                        </p>
                        <dl className="grid grid-cols-2 gap-3 pt-2 text-xs">
                            <div className="border border-muted p-2.5">
                                <dt className="font-bold text-plate-ink">GSTIN</dt>
                                <dd className="figure-num text-paper mt-0.5">27NPAPS0212C1Z7</dd>
                            </div>
                            <div className="border border-muted p-2.5">
                                <dt className="font-bold text-plate-ink">UDYAM</dt>
                                <dd className="figure-num text-paper mt-0.5">UDYAM-MH-26-0222848</dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <h3 className="text-lg font-display font-bold uppercase text-plate-ink mb-4">
                            Company Dossier
                        </h3>
                        <ul className="space-y-2.5 list-none p-0 m-0">
                            <li>
                                <Link href="/projects" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    OEM Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/skilled-manpower" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    Skilled Manpower
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    Technical Notes
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    Contact & RFQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-display font-bold uppercase text-plate-ink mb-4">
                            Toolroom Services
                        </h3>
                        <ul className="space-y-2.5 list-none p-0 m-0">
                            <li>
                                <Link href="/services/tool-installation-india" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    Tool Installation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/die-proving-india" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    Die Proving (210 mm Draw)
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/tool-modification" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    In-Press Tool Modification
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/critical-part-proving" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    DP-790 Critical Part Proving
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/industrial-skilled-manpower" className="text-sm text-paper hover:text-plate-ink transition-colors">
                                    Industrial Manpower Supply
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-display font-bold uppercase text-plate-ink mb-4">
                            Direct Dispatch HQ
                        </h3>
                        <ul className="space-y-3 list-none p-0 m-0">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-plate-ink" aria-hidden="true" />
                                <span className="text-sm text-paper">
                                    Akurdi, Pune 411035, Maharashtra, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0 text-plate-ink" aria-hidden="true" />
                                <a href="tel:+919922957006" className="text-sm figure-num text-plate-ink hover:underline">
                                    +91-9922957006 (Asif N Shaikh)
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0 text-plate-ink" aria-hidden="true" />
                                <a href="mailto:shaikhasifn@rediffmail.com" className="text-sm text-plate-ink hover:underline">
                                    shaikhasifn@rediffmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-ink-2 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-paper">
                    <div className="space-y-1">
                        <p>© {currentYear} Razin Tooling Services, Akurdi, Pune.</p>
                        <p data-credits>
                            Photographs:{" "}
                            <a href="https://commons.wikimedia.org/wiki/File:Haltern_am_See,_Sythen,_Quarzwerke,_Werkzeug_in_der_Werkzeughalle_--_2014_--_4059.jpg">
                                Dietmar Rabich
                            </a>{" "}
                            (CC BY-SA 4.0, Wikimedia Commons),{" "}
                            <a href="https://commons.wikimedia.org/wiki/File:Haltern_am_See,_Sythen,_Werkzeughalle_der_Quarzwerke_--_2015_--_01117.jpg">
                                Dietmar Rabich
                            </a>{" "}
                            (CC BY-SA 4.0, Wikimedia Commons),{" "}
                            <a href="https://commons.wikimedia.org/wiki/File:Railway_workshop_museum_exhibition_in_Ljubljana,_Slovenia.jpg">
                                Petar Milošević
                            </a>{" "}
                            (CC BY-SA 4.0, Wikimedia Commons).
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="text-paper hover:text-plate-ink transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-paper hover:text-plate-ink transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
