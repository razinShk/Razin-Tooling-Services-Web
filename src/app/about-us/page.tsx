import { Metadata } from 'next';
import { Target, Award, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Razin Tooling Services. 20+ years of expertise in industrial tooling, die proving, and manpower supply across India.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-16 sm:py-24 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Razin Tooling Services</h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        With over 5-20 years of combined professional experience, we are India's trusted partner for precision press tool installation, modification, and skilled manpower.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Legacy of Precision</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Headquartered in Akurdi, Pune - the heart of India's automotive manufacturing hub - Razin Tooling Services was founded to address the critical gap in precision die proving and tool commissioning.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our team is composed of seasoned professionals who have successfully commissioned complex tools for leading OEMs like Tata Motors and GE Stamp. We pride ourselves on resolving chronic tool concerns and ensuring seamless production runs.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-blue-600" size={24} />
                                    <span className="text-slate-800 font-medium">Pan-India Operational Footprint</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Award className="text-blue-600" size={24} />
                                    <span className="text-slate-800 font-medium">Proven Track Record with Tier-1 OEMs</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                                <Target size={40} className="text-blue-600 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                                <p className="text-sm text-slate-600">To deliver zero-defect tooling solutions and skilled manpower that drive Indian manufacturing forward.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center mt-8">
                                <Users size={40} className="text-blue-600 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Our Team</h3>
                                <p className="text-sm text-slate-600">Highly trained engineers and technicians dedicated to your project's precise execution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to upgrade your manufacturing capability?</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-slate-100 transition shadow-lg">
                        Consult with Our Experts Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
