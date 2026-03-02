import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locationsData, getLocationBySlug } from '@/data/locationsData';
import { MapPin, Factory, Users, Wrench, FileCheck2, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
    return locationsData.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const location = getLocationBySlug(resolvedParams.city);
    if (!location) return { title: 'Location Not Found' };

    return {
        title: `Leading Tooling Services in ${location.city}, ${location.state}`,
        description: location.metaDescription,
        alternates: {
            canonical: `https://razintoolingservices.in/locations/${location.slug}`,
        }
    };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const location = getLocationBySlug(resolvedParams.city);

    if (!location) notFound();

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">

            {/* City Hero */}
            <section className="bg-slate-900 border-b border-slate-800 text-white py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-industrial-grid opacity-20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold mb-6">
                        <MapPin size={18} />
                        {location.city}, {location.state}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Premium Industrial Tooling in {location.city}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                        Deploying elite technical manpower and advanced press tooling solutions to support {location.ecosystem}.
                    </p>
                </div>
            </section>

            {/* Main Location Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-2/3">
                        <article className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Strengthening {location.city}'s Manufacturing Backbone
                            </h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                As {location.ecosystem}, {location.city} demands the highest standard of manufacturing precision and speed. Razin Tooling Services is strategically positioned to serve OEMs, Tier-1, and Tier-2 suppliers in the {location.city} industrial belt, bringing over two decades of localized expertise right to your press shop floor.
                            </p>

                            <p className="text-slate-700 leading-relaxed mb-10">
                                Any disruption in stamping or die proving translates to significant downstream delays. Our rapid-response teams are capable of reaching facilities across {location.city} at a moment's notice to execute critical tool installations, complex die proving, and emergency modifications. We deeply understand the material constraints, tight schedules, and cosmetic requirements unique to manufacturers operating within {location.state}.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Core Services in {location.city}</h3>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12 not-prose">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <Wrench className="text-blue-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Tool Installation</h4>
                                    <p className="text-slate-600 text-sm">Rigorous setup and robust calibration of heavy progressive dies directly at your {location.city} facility.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <FileCheck2 className="text-blue-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Die Proving</h4>
                                    <p className="text-slate-600 text-sm">Resolving wrinkling, tearing, and springback for complex geometries and High Tensile DP-790 parts.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <Factory className="text-blue-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">In-Press Modifications</h4>
                                    <p className="text-slate-600 text-sm">Implementing engineering change notices (ECNs) efficiently without completely pulling the tool.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <Users className="text-blue-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">Skilled Manpower Supply</h4>
                                    <p className="text-slate-600 text-sm">Supplying 5-20 year experienced toolmakers and engineers to augment your local {location.city} workforce.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Partner With Us?</h3>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Operating heavily inside {location.city}, we recognize that every hour of downtime has massive financial implications. Our approach relies on data-backed precision, allowing us to hit the ground running. Whether it's a massive commissioning project comparable to our work on the Tata Nexon, or proving high-tensile material lines, our portfolio highlights an unwavering commitment to zero defects. We don't just fix tools; we optimize your complete stamping process for maximum yield.
                            </p>
                        </article>
                    </div>

                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Start Strong in {location.city}</h3>
                            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                                Need immediate tooling assistance or skilled manpower at your {location.city} facility? Our technical experts are ready to deploy.
                            </p>
                            <Link href="/contact" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
                                Request a Quote <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-4">Nearby Manufacturing Hubs</h4>
                            <ul className="space-y-3">
                                {locationsData.filter(l => l.state === location.state && l.slug !== location.slug).slice(0, 5).map(loc => (
                                    <li key={loc.slug}>
                                        <Link href={`/locations/${loc.slug}`} className="text-blue-600 hover:text-blue-800 transition flex items-center gap-2">
                                            <MapPin size={16} /> Services in {loc.city}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
