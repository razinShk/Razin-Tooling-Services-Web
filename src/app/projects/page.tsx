import { Metadata } from 'next';
import { Briefcase, Factory, FileSignature } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Case Studies & Projects',
    description: 'View our successful projects and case studies with Tata Motors Ltd and GE Stamp Ltd. High tension die proving and robust tool commissioning.',
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-16 sm:py-24 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Major Projects Completed</h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        A showcase of our precision execution for large-scale Indian OEMs, resolving complex tooling challenges under tight deadlines.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">

                    {/* Project 1 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                        <div className="bg-blue-600 p-8 md:w-1/3 flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMTIgMTJhNiA2IDAgMTAwLTEyIDYgNiAwIDAwMCAxMnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==')] mix-blend-overlay"></div>
                            <Factory size={48} className="mb-6 relative z-10" />
                            <h3 className="text-sm font-bold tracking-widest uppercase mb-2 relative z-10 text-blue-200">Automotive Sector</h3>
                            <h2 className="text-3xl font-bold mb-2 relative z-10">Tata Motors Ltd</h2>
                            <p className="text-blue-100 relative z-10">Project X104 (Nexon vehicle)</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Briefcase className="text-blue-600" />
                                Scope of Work
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                We successfully commissioned and proved tools for the highly anticipated Tata Nexon project, ensuring that every panel met the strict cosmetic and structural integrity standards required for the passenger vehicle segment.
                            </p>
                            <div className="bg-slate-100 p-6 rounded-lg mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Key Achievements:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Volume:</strong> 10 distinct parts requiring 33 specialized tools in total.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Complexity:</strong> Successfully achieved a critical draw proving with a massive 210mm depth without tearing or wrinkling.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row-reverse">
                        <div className="bg-slate-800 p-8 md:w-1/3 flex flex-col justify-center text-white relative overflow-hidden">
                            <Factory size={48} className="mb-6 relative z-10 text-blue-400" />
                            <h3 className="text-sm font-bold tracking-widest uppercase mb-2 relative z-10 text-slate-400">Component Manufacturing</h3>
                            <h2 className="text-3xl font-bold mb-2 relative z-10">GE Stamp Ltd</h2>
                            <p className="text-slate-300 relative z-10">Project MQB-Kushaq</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Briefcase className="text-blue-600" />
                                Scope of Work
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Appointed to prove tooling for the robust MQB platform, we delivered high-precision results for high-tensile materials, an application that requires exceptional tool durability and strict parameter control.
                            </p>
                            <div className="bg-slate-100 p-6 rounded-lg mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Key Achievements:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Volume:</strong> 6 parts necessitating 33 complex tool sets.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Material Challenges:</strong> High tensile material (DP-790) handled flawlessly with thicknesses reaching up to 3.7mm.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                        <div className="bg-emerald-700 p-8 md:w-1/3 flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMTIgMTJhNiA2IDAgMTAwLTEyIDYgNiAwIDAwMCAxMnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==')] mix-blend-overlay"></div>
                            <Factory size={48} className="mb-6 relative z-10" />
                            <h3 className="text-sm font-bold tracking-widest uppercase mb-2 relative z-10 text-emerald-200">Tools Buyoff & Commissioning</h3>
                            <h2 className="text-3xl font-bold mb-2 relative z-10">Panse Group of Companies</h2>
                            <p className="text-emerald-100 relative z-10">Tata Sierra Project</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Briefcase className="text-blue-600" />
                                Scope of Work
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Successfully completed tool buyoff for the Tata Sierra project, including comprehensive static and dynamic checking, as well as complete tool installation at Panse Autocomp in Sanand, Gujarat.
                            </p>
                            <div className="bg-slate-100 p-6 rounded-lg mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Key Achievements:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Volume:</strong> Successfully completed tool buyoff for a total of 350 tools.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Implementation:</strong> Perfect execution of static and dynamic checking, followed by seamless local tool installation at the Sanand facility.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Part Proving:</strong> Successfully completed part proving for critical components including wheel arch inner, wheel arch outer, and cross member.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row-reverse">
                        <div className="bg-violet-800 p-8 md:w-1/3 flex flex-col justify-center text-white relative overflow-hidden">
                            <Factory size={48} className="mb-6 relative z-10 text-violet-300" />
                            <h3 className="text-sm font-bold tracking-widest uppercase mb-2 relative z-10 text-violet-300">Tool Installation</h3>
                            <h2 className="text-3xl font-bold mb-2 relative z-10">The True Tooling</h2>
                            <p className="text-violet-100 relative z-10">Project P113</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Briefcase className="text-blue-600" />
                                Scope of Work
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Successfully completed the tool installation phase for the P113 project at the JBM manufacturing facility located in Haridwar, on behalf of our client The True Tooling.
                            </p>
                            <div className="bg-slate-100 p-6 rounded-lg mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Key Achievements:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Location & Client:</strong> Successfully executed for The True Tooling at JBM Haridwar.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <span><strong>Implementation:</strong> Ensured complete, precision tool installation for Project P113.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <FileSignature className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                                        <div className="flex flex-col">
                                            <span><strong>Installed Parts & Tools:</strong> Major components installed include:</span>
                                            <ul className="list-disc list-inside mt-2 text-sm text-slate-600 space-y-1">
                                                <li>Panel Member Floor Front Inner (RH & Rear)</li>
                                                <li>Cross Member Panel Rear Cab</li>
                                                <li>Cross Member Grill Mounting</li>
                                                <li>Panel Cross Member Front Upper & Upper Button</li>
                                                <li>Panel Floor Front</li>
                                                <li>Panel Fender Outer Extension (LH-RH)</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-slate-100 py-16 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Have a challenging project ahead?</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
                        Let's Discuss Solutions
                    </Link>
                </div>
            </section>
        </div>
    );
}
