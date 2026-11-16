import { Metadata } from "next";
import Link from "next/link";
import { Wrench, Navigation2, FileCheck2, Settings2, Users2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Press Tooling & Die Proving Services",
    description:
        "Press tool installation, 210 mm deep-draw die proving, in-press ECN modification, DP-790 part proving, and skilled industrial manpower across India.",
};

const services = [
    {
        title: "Tool Installation Services in India",
        slug: "tool-installation-india",
        spec: "Tandem & Transfer Lines",
        description:
            "Heavy press tool rigging, bed alignment, load balancing, and static/dynamic buyoff for immediate production readiness across Indian auto hubs.",
        icon: Wrench,
    },
    {
        title: "Die Proving Services in India",
        slug: "die-proving-india",
        spec: "Up to 210 mm Draw Depth",
        description:
            "Die spotting, blue-matching, draw-bead tuning, and cushion optimization to eliminate splits and wrinkles on complex outer and inner panels.",
        icon: FileCheck2,
    },
    {
        title: "Tool Modification Services",
        slug: "tool-modification",
        spec: "In-Press & Off-Press ECNs",
        description:
            "On-site and off-site tool modifications to execute Engineering Change Notices (ECNs) and resolve chronic stamping defects with minimal press downtime.",
        icon: Settings2,
    },
    {
        title: "Critical Part Proving Services",
        slug: "critical-part-proving",
        spec: "DP-790 up to 3.7 mm",
        description:
            "Specialized proving for high-tensile steels (DP-790) and complex structural geometries, compensating for springback and die wear.",
        icon: Navigation2,
    },
    {
        title: "Industrial Skilled Manpower Services",
        slug: "industrial-skilled-manpower",
        spec: "5 to 20 Years Experience",
        description:
            "Deploying vetted toolroom engineers, die provers, press setters, and maintenance technicians directly to your press shop floor.",
        icon: Users2,
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>Press shop &amp; toolroom services</h1>
                    <p className="lead text-ink-2">
                        End-to-end tool installation, die proving, ECN modification, and skilled manpower.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container space-y-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isPlate = idx === 0 || idx === 3;
                        return (
                            <article
                                key={service.slug}
                                className={isPlate ? "plate" : "well border-2 border-ink"}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                    <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r-2 border-ink pb-4 lg:pb-0 lg:pr-6">
                                        <div className="flex items-center justify-between gap-3">
                                            <h2 className="text-2xl">{service.title}</h2>
                                            <Icon size={24} className="text-ink flex-shrink-0" aria-hidden="true" />
                                        </div>
                                        <p className="figure-num text-sm font-bold text-ink-2">
                                            Specification: {service.spec}
                                        </p>
                                    </div>
                                    <div className="lg:col-span-5">
                                        <p className="text-ink-2 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="lg:col-span-3 flex lg:justify-end">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className={idx === 0 ? "btn btn--primary w-full lg:w-auto" : "btn btn--secondary w-full lg:w-auto"}
                                        >
                                            Inspect Specification
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
