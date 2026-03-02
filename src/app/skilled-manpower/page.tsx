import { Metadata } from 'next';
import Link from 'next/link';
import { Users, CheckCircle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Skilled Industrial Manpower',
    description: 'Hire 5-20 years experienced professionals. Skilled and semi-skilled manpower for press tool operations, installation, and manufacturing.',
};

export default function ManpowerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-16 sm:py-24 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Skilled Industrial Manpower</h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Deploying vetted, highly-experienced professionals to keep your production lines running without compromise.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="text-blue-600" size={32} />
                                The Razin Advantage
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Finding the right talent in the highly specialized field of press tools and die proving is a major bottleneck for many manufacturers. We solve this by providing on-demand, skilled manpower across India.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <ShieldCheck className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">5–20 Years Domain Experience</h4>
                                        <p className="text-sm text-slate-600 mt-1">Our personnel come with deep, practical knowledge of industry-standard tools and materials.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Ready for Immediate Deployment</h4>
                                        <p className="text-sm text-slate-600 mt-1">From installation to troubleshooting, our teams integrate seamlessly into your workflow.</p>
                                    </div>
                                </li>
                            </ul>

                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
                                Request Manpower Supply
                            </Link>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 text-center">Roles We Supply</h3>
                            <div className="space-y-4">
                                {[
                                    "Senior Tool Room Engineers",
                                    "Die Proving Specialists",
                                    "Press Tool Setters & Operators",
                                    "Tool Maintenance Technicians",
                                    "Quality Control Inspectors",
                                    "Semi-skilled Production Staff"
                                ].map((role, idx) => (
                                    <div key={idx} className="flex items-center gap-3 border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-lg text-slate-200 font-medium">{role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
