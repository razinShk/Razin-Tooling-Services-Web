import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData, getServiceSlugs } from '@/data/servicesData';
import { CheckCircle2, MapPin, ArrowRight, PhoneCall } from 'lucide-react';

export function generateStaticParams() {
    const slugs = getServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug];

    if (!service) return { title: 'Service Not Found' };

    return {
        title: service.title,
        description: service.metaDescription,
        alternates: {
            canonical: `https://razintoolingservices.in/services/${resolvedParams.slug}`,
        }
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="bg-slate-900 border-b border-slate-800 text-white py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-industrial-grid opacity-20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                    <Link href="/services" className="text-blue-400 hover:text-white font-bold text-sm mb-6 inline-flex items-center gap-2 transition-colors">
                        <ArrowRight className="rotate-180" size={16} /> Back to Services
                    </Link>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl font-light">
                        {service.heroSubtitle}
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col lg:flex-row gap-12">

                    {/* Main Content Area (1500+ words target via long text integration) */}
                    <div className="lg:w-2/3">
                        <article className="prose prose-lg prose-slate max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
                                Understanding the critical role of {service.title}
                            </h2>

                            {service.intro.map((paragraph, idx) => (
                                <p key={idx} className="text-slate-700 leading-relaxed mb-6">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="my-12 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities & Features</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                                                <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Our Proven Process</h3>
                            <p className="text-slate-700 mb-6">
                                Execution is everything. To guarantee the success of our {service.title.toLowerCase()}, we follow a strict, multi-phase operational protocol:
                            </p>

                            <div className="space-y-6 my-8">
                                {service.process.map((step, idx) => (
                                    <div key={idx} className="flex gap-6 items-start border-l-4 border-blue-600 pl-4 py-2 bg-slate-100 rounded-r-lg">
                                        <div className="text-2xl font-black text-blue-200">0{idx + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{step.phase}</h4>
                                            <p className="text-slate-700 mt-1">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-16 border-t border-slate-200 pt-8">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-6">
                                {service.faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                                        <p className="text-slate-700">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    {/* Sidebar CTA & Location Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg sticky top-28">
                            <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
                            <p className="mb-6 opacity-90 text-sm">
                                Discuss your {service.title.toLowerCase()} requirements with our senior engineers today.
                            </p>
                            <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-blue-600 font-bold rounded-md hover:bg-slate-100 transition shadow-inner">
                                Get Started
                            </Link>
                            <div className="mt-6 flex items-center justify-center gap-3 pt-6 border-t border-blue-500/50">
                                <PhoneCall size={20} />
                                <a href="tel:+919922957006" className="font-bold">+91-9922957006</a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <MapPin className="text-blue-600" size={20} />
                                Major Service Ecosystems
                            </h4>
                            <p className="text-sm text-slate-600 mb-4">We actively deploy rapid-response teams for this service in major manufacturing hubs:</p>
                            <div className="flex flex-wrap gap-2">
                                {service.relatedLocations.map((loc, idx) => (
                                    <Link key={idx} href={`/locations/${loc.toLowerCase()}`} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition">
                                        {loc}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
