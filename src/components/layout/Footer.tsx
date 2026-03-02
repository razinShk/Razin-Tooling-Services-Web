import Link from "next/link";
import { Mail, Phone, MapPin, Wrench, FileCheck, ShieldCheck } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                                Razin Tooling Services
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Leading industrial tooling and skilled manpower service provider. Specializing in tool installation, commissioning, and critical part proving across India.
                        </p>
                        <div className="flex gap-4">
                            {/* Trust Badges */}
                            <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded text-xs text-white shadow-sm border border-slate-700">
                                <ShieldCheck size={16} className="text-green-400" />
                                <span>20+ Yrs Exp</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded text-xs text-white shadow-sm border border-slate-700">
                                <FileCheck size={16} className="text-blue-400" />
                                <span>ISO Standard</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about-us" className="hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-blue-400 transition-colors text-sm">Case Studies</Link></li>
                            <li><Link href="/skilled-manpower" className="hover:text-blue-400 transition-colors text-sm">Skilled Manpower</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400 transition-colors text-sm">Industrial Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Our Services</h3>
                        <ul className="space-y-3 flex flex-col">
                            <li><Link href="/services/tool-installation-india" className="hover:text-blue-400 transition-colors text-sm">Tool Installation</Link></li>
                            <li><Link href="/services/die-proving-india" className="hover:text-blue-400 transition-colors text-sm">Die Proving</Link></li>
                            <li><Link href="/services/tool-modification" className="hover:text-blue-400 transition-colors text-sm">Tool Modification</Link></li>
                            <li><Link href="/services/critical-part-proving" className="hover:text-blue-400 transition-colors text-sm">Critical Part Proving</Link></li>
                            <li><Link href="/services/industrial-skilled-manpower" className="hover:text-blue-400 transition-colors text-sm">Industrial Manpower</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact HQ</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="top-1 relative text-blue-500 flex-shrink-0" size={18} />
                                <span className="text-sm">Akurdi, Pune – 411035<br />Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                                <a href="tel:+919922957006" className="text-sm hover:text-white transition">+91-9922957006</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                                <a href="mailto:shaikhasifn@rediffmail.com" className="text-sm hover:text-white transition">shaikhasifn@rediffmail.com</a>
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 space-y-1">
                            <p>Contact: Asif N Shaikh</p>
                            <p>GSTIN: 27NPAPS0212C1Z7</p>
                            <p>UDYAM: UDYAM-MH-26-0222848</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} Razin Tooling Services. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
