import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wrench, Navigation2, FileCheck2, Settings2, Users2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Comprehensive industrial tooling services including Installation, Die Proving, Modification, and Skilled Manpower in India.',
};

const services = [
    {
        title: 'Tool Installation Services in India',
        slug: 'tool-installation-india',
        description: 'Specialized installation of heavy press tools. We ensure exact alignment and setup for immediate production readiness across all major industrial hubs in India.',
        icon: Wrench,
    },
    {
        title: 'Die Proving Services in India',
        slug: 'die-proving-india',
        description: 'Expert die proving for complex components. We handle critical draws (up to 210mm depth) and resolve material flow concerns effectively.',
        icon: FileCheck2,
    },
    {
        title: 'Tool Modification Services',
        slug: 'tool-modification',
        description: 'On-site and off-site tool modifications to accommodate engineering changes (ECNs) and resolve chronic production defects.',
        icon: Settings2,
    },
    {
        title: 'Critical Part Proving Services',
        slug: 'critical-part-proving',
        description: 'Specialized proving for high-tensile materials (like DP-790) and complex geometries, ensuring zero scrap rates.',
        icon: Navigation2,
    },
    {
        title: 'Industrial Skilled Manpower Services',
        slug: 'industrial-skilled-manpower',
        description: 'Deploying extensively trained and highly experienced (5-20 years) manpower for press shops and tool rooms.',
        icon: Users2,
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-16 sm:py-24 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Core Services</h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Delivering robust, end-to-end tooling solutions to maximize your press shop's efficiency and output quality.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full group hover:shadow-xl hover:border-blue-500/30 transition-all">
                                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link href={`/services/${service.slug}`} className="text-blue-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto pt-6 border-t border-slate-100">
                                        View Service Details <ArrowRight size={18} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
