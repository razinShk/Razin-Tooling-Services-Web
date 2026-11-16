import { Metadata } from "next";
import { Briefcase, FileSignature, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "OEM Case Studies & Completed Projects",
    description:
        "Verified press tool installation, 350-tool buyoff, 210 mm draw proving, and DP-790 die proving projects for Tata Motors, Gestamp, Panse Group, and JBM Haridwar.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>OEM &amp; Tier-1 project dossier</h1>
                    <p className="lead text-ink-2">
                        Four major automotive tool commissioning, buyoff, and DP-790 proving contracts.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container space-y-14">
                    {/* Project 1: Tata Motors */}
                    <article className="plate">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-4 bg-paper-2 border-2 border-ink p-6 space-y-5">
                                <div className="bg-plate border-2 border-ink p-4 flex items-center justify-center">
                                    <img
                                        src="/logos/tata-motors.svg"
                                        alt="Tata Motors Ltd"
                                        width={185}
                                        height={40}
                                        className="h-10 w-auto object-contain"
                                    />
                                </div>
                                <div className="space-y-2 border-t-2 border-ink pt-4">
                                    <h2>Tata Motors Ltd</h2>
                                    <p className="font-bold text-ink">Project X104 (Tata Nexon)</p>
                                    <p className="text-sm text-ink-2 flex items-center gap-2">
                                        <MapPin size={16} aria-hidden="true" />
                                        <span>Passenger Vehicle Division, Pune</span>
                                    </p>
                                </div>
                                <dl className="grid grid-cols-2 gap-3 pt-2 border-t border-rule text-sm">
                                    <div>
                                        <dt className="text-ink-2">Total Volume</dt>
                                        <dd className="figure-num font-bold text-lg text-ink">33 tools</dd>
                                    </div>
                                    <div>
                                        <dt className="text-ink-2">Max Draw Proved</dt>
                                        <dd className="figure-num font-bold text-lg text-ink">210&nbsp;mm</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="lg:col-span-8 space-y-6">
                                <div className="flex items-center gap-3 border-b-2 border-ink pb-4">
                                    <Briefcase size={22} className="text-ink flex-shrink-0" aria-hidden="true" />
                                    <h3>Scope of Work &amp; Commissioning</h3>
                                </div>
                                <p className="text-ink-2 leading-relaxed">
                                    We commissioned and proved press tools for the Tata Nexon (X104) passenger vehicle program, ensuring every outer and inner panel met strict cosmetic and structural tolerances before full-scale production.
                                </p>
                                <div className="bg-paper-2 p-6 border-2 border-ink space-y-4">
                                    <p className="font-bold text-ink">Verified Plant Deliverables</p>
                                    <ul className="space-y-3 list-none p-0 m-0">
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Volume:</strong> 10 distinct sheet-metal parts requiring 33 specialized press tools in total.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Deep-Draw Proving:</strong> Cleared critical draw proving at a 210&nbsp;mm draw depth without tearing, splitting, or flange wrinkling.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Project 2: GE Stamp Ltd */}
                    <article className="plate">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-4 bg-paper-2 border-2 border-ink p-6 space-y-5">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="bg-plate border-2 border-ink p-3 flex items-center justify-center">
                                        <img
                                            src="/logos/gestamp.svg"
                                            alt="Gestamp (GE Stamp Ltd)"
                                            width={175}
                                            height={40}
                                            loading="lazy"
                                            className="h-9 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="bg-plate border-2 border-ink p-3 flex items-center justify-center">
                                        <img
                                            src="/logos/skoda-vw.svg"
                                            alt="MQB-Kushaq Platform"
                                            width={195}
                                            height={40}
                                            loading="lazy"
                                            className="h-9 w-auto object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 border-t-2 border-ink pt-4">
                                    <h2>GE Stamp Ltd</h2>
                                    <p className="font-bold text-ink">Project MQB-Kushaq</p>
                                    <p className="text-sm text-ink-2 flex items-center gap-2">
                                        <MapPin size={16} aria-hidden="true" />
                                        <span>Chakan Industrial Belt, Pune</span>
                                    </p>
                                </div>
                                <dl className="grid grid-cols-2 gap-3 pt-2 border-t border-rule text-sm">
                                    <div>
                                        <dt className="text-ink-2">Tool Sets</dt>
                                        <dd className="figure-num font-bold text-lg text-ink">33 tools (6 parts)</dd>
                                    </div>
                                    <div>
                                        <dt className="text-ink-2">Steel Grade</dt>
                                        <dd className="figure-num font-bold text-lg text-ink">DP-790 (3.7&nbsp;mm)</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="lg:col-span-8 space-y-6">
                                <div className="flex items-center gap-3 border-b-2 border-ink pb-4">
                                    <Briefcase size={22} className="text-ink flex-shrink-0" aria-hidden="true" />
                                    <h3>Scope of Work &amp; High-Tensile Proving</h3>
                                </div>
                                <p className="text-ink-2 leading-relaxed">
                                    Appointed to prove tooling for the MQB-Kushaq platform at GE Stamp Ltd, we delivered repeatable dimensional control on high-tensile structural stampings requiring heavy tonnage and springback compensation.
                                </p>
                                <div className="bg-paper-2 p-6 border-2 border-ink space-y-4">
                                    <p className="font-bold text-ink">Verified Plant Deliverables</p>
                                    <ul className="space-y-3 list-none p-0 m-0">
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Volume:</strong> 6 structural parts across 33 complex progressive and transfer tool sets.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Material Grade:</strong> High-tensile dual-phase steel (DP-790) proved at sheet thicknesses up to 3.7&nbsp;mm.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Project 3: Panse Group of Companies */}
                    <article className="plate">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-4 bg-paper-2 border-2 border-ink p-6 space-y-5">
                                <div className="bg-plate border-2 border-ink p-4 flex items-center justify-center">
                                    <img
                                        src="/logos/panse-group.svg"
                                        alt="Panse Group of Companies"
                                        width={190}
                                        height={40}
                                        loading="lazy"
                                        className="h-10 w-auto object-contain"
                                    />
                                </div>
                                <div className="space-y-2 border-t-2 border-ink pt-4">
                                    <h2>Panse Group of Companies</h2>
                                    <p className="font-bold text-ink">Tata Sierra Project</p>
                                    <p className="text-sm text-ink-2 flex items-center gap-2">
                                        <MapPin size={16} aria-hidden="true" />
                                        <span>Panse Autocomp, Sanand, Gujarat</span>
                                    </p>
                                </div>
                                <dl className="grid grid-cols-2 gap-3 pt-2 border-t border-rule text-sm">
                                    <div>
                                        <dt className="text-ink-2">Tools Signed Off</dt>
                                        <dd className="figure-num font-bold text-lg text-ink">350 tools</dd>
                                    </div>
                                    <div>
                                        <dt className="text-ink-2">Plant Site</dt>
                                        <dd className="font-bold text-lg text-ink">Sanand, GJ</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="lg:col-span-8 space-y-6">
                                <div className="flex items-center gap-3 border-b-2 border-ink pb-4">
                                    <Briefcase size={22} className="text-ink flex-shrink-0" aria-hidden="true" />
                                    <h3>Scope of Work &amp; 350-Tool Buyoff</h3>
                                </div>
                                <p className="text-ink-2 leading-relaxed">
                                    Completed full tool buyoff for the Tata Sierra project, covering static and dynamic inspection alongside complete press-line installation at Panse Autocomp in Sanand, Gujarat.
                                </p>
                                <div className="bg-paper-2 p-6 border-2 border-ink space-y-4">
                                    <p className="font-bold text-ink">Verified Plant Deliverables</p>
                                    <ul className="space-y-3 list-none p-0 m-0">
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Volume:</strong> Completed tool buyoff across a total of 350 press tools.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Implementation:</strong> Static and dynamic checking followed by local tool installation at the Sanand facility.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3 text-ink-2">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>
                                                <strong className="text-ink">Part Proving:</strong> Proved critical body stampings including wheel arch inner, wheel arch outer, and cross member assemblies.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Project 4: The True Tooling & JBM Haridwar */}
                    <article className="plate">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-4 bg-paper-2 border-2 border-ink p-6 space-y-5">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="bg-plate border-2 border-ink p-3 flex items-center justify-center">
                                        <img
                                            src="/logos/the-true-tooling.svg"
                                            alt="The True Tooling"
                                            width={200}
                                            height={40}
                                            loading="lazy"
                                            className="h-9 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="bg-plate border-2 border-ink p-3 flex items-center justify-center">
                                        <img
                                            src="/logos/jbm-group.svg"
                                            alt="JBM Group Haridwar"
                                            width={175}
                                            height={40}
                                            loading="lazy"
                                            className="h-9 w-auto object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 border-t-2 border-ink pt-4">
                                    <h2>The True Tooling</h2>
                                    <p className="font-bold text-ink">Project P113 (at JBM Haridwar)</p>
                                    <p className="text-sm text-ink-2 flex items-center gap-2">
                                        <MapPin size={16} aria-hidden="true" />
                                        <span>JBM Manufacturing Plant, Haridwar</span>
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-8 space-y-6">
                                <div className="flex items-center gap-3 border-b-2 border-ink pb-4">
                                    <Briefcase size={22} className="text-ink flex-shrink-0" aria-hidden="true" />
                                    <h3>Scope of Work &amp; Line Installation</h3>
                                </div>
                                <p className="text-ink-2 leading-relaxed">
                                    Completed the press tool installation phase for Project P113 at the JBM manufacturing facility in Haridwar on behalf of our client, The True Tooling.
                                </p>
                                <div className="bg-paper-2 p-6 border-2 border-ink space-y-4">
                                    <p className="font-bold text-ink">Installed Panel &amp; Cross-Member Tooling</p>
                                    <ul className="space-y-2.5 list-none p-0 m-0 text-ink-2">
                                        <li className="flex items-start gap-3">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>Panel Member Floor Front Inner (RH &amp; Rear)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>Cross Member Panel Rear Cab &amp; Cross Member Grill Mounting</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>Panel Cross Member Front Upper &amp; Upper Button</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FileSignature className="text-ink mt-1 flex-shrink-0" size={18} aria-hidden="true" />
                                            <span>Panel Floor Front &amp; Panel Fender Outer Extension (LH/RH)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="band--cast py-16">
                <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h2>Have a critical tool launch or buyoff ahead?</h2>
                        <p className="text-ink-2 mt-2">
                            Send your tool list or part drawings directly to Asif N Shaikh for an immediate deployment plan.
                        </p>
                    </div>
                    <Link href="/contact" className="btn btn--primary">
                        Let’s Discuss Solutions
                    </Link>
                </div>
            </section>
        </div>
    );
}
