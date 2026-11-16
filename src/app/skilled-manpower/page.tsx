import { Metadata } from "next";
import Link from "next/link";
import { Users, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Skilled Industrial Toolroom Manpower",
    description:
        "Hire 5 to 20 years experienced toolroom engineers, die provers, and press tool setters across India from Razin Tooling Services, Pune.",
};

const roles = [
    {
        role: "Senior Tool Room Engineers",
        exp: "10 to 20 yrs",
        scope: "Full press-line commissioning, CAD-to-die audit, and OEM buyoff sign-off.",
    },
    {
        role: "Die Proving Specialists",
        exp: "8 to 20 yrs",
        scope: "210 mm deep draws, DP-790 springback compensation, and Class-A panel spotting.",
    },
    {
        role: "Press Tool Setters & Operators",
        exp: "5 to 15 yrs",
        scope: "Rigging, bolster clamping, cushion pressure setup, and transfer-bar synchronization.",
    },
    {
        role: "Tool Maintenance & ECN Technicians",
        exp: "5 to 18 yrs",
        scope: "In-press welding, trim edge rebuilding, and preventive die overhaul.",
    },
    {
        role: "Sheet-Metal Quality Inspectors",
        exp: "5 to 15 yrs",
        scope: "Checking-fixture validation, blue-matching verification, and batch clearance.",
    },
    {
        role: "Production Press Crew",
        exp: "5 to 10 yrs",
        scope: "High-volume tandem and progressive press line operation under OEM safety standards.",
    },
];

export default function ManpowerPage() {
    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>Skilled industrial manpower</h1>
                    <p className="lead text-ink-2">
                        Vetted toolmakers and die provers with 20 years of press experience.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-6 space-y-6">
                            <h2 className="flex items-center gap-3">
                                <Users className="text-ink flex-shrink-0" size={32} aria-hidden="true" />
                                Seasoned hands on your press floor
                            </h2>
                            <p className="text-ink-2 leading-relaxed">
                                Finding toolmakers who can read a split flange or spot a DP-790 draw die without trial-and-error scrap is one of the hardest bottlenecks in Indian manufacturing. We deploy our own veteran crews across Pune, Chakan, Sanand, Haridwar, Chennai, and Gurugram.
                            </p>

                            <ul className="space-y-4 list-none p-0 m-0">
                                <li className="well border-2 border-ink flex items-start gap-3">
                                    <ShieldCheck className="text-ink flex-shrink-0 mt-0.5" size={22} aria-hidden="true" />
                                    <div>
                                        <p className="font-bold text-ink">5 to 20 Years Domain Experience</p>
                                        <p className="text-sm text-ink-2 mt-1">
                                            Every specialist has worked on live OEM and Tier-1 press lines including Tata Motors, Gestamp, Panse Group, and JBM facilities.
                                        </p>
                                    </div>
                                </li>
                                <li className="well border-2 border-ink flex items-start gap-3">
                                    <CheckCircle className="text-ink flex-shrink-0 mt-0.5" size={22} aria-hidden="true" />
                                    <div>
                                        <p className="font-bold text-ink">Immediate Shift Integration</p>
                                        <p className="text-sm text-ink-2 mt-1">
                                            From new model launches to emergency breakdown recovery, our crews integrate directly into your plant safety and quality protocols.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-2">
                                <Link href="/contact" className="btn btn--primary">
                                    Request Manpower Supply
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-6">
                            <figure
                                className="photo-frame w-full min-w-0 h-[320px]"
                                data-slot="manpower-workshop"
                                data-alt="Automotive die proving engineers inspecting a stamped car body panel beside a press tool"
                            >
                                <img
                                    src="/images/library/workshop-spanners-bench.jpg"
                                    width={1920}
                                    height={1402}
                                    loading="lazy"
                                    alt="Automotive toolmakers inspecting a freshly stamped car body door and wheel-arch panel in a press shop"
                                />
                            </figure>
                            <p className="caption">
                                Toolmakers equipped for in-press spotting, blue-matching, and multi-ton die alignment.
                            </p>
                            <p data-credits className="text-xs text-ink-2">
                                Photographs:{" "}
                                <a href="https://commons.wikimedia.org/wiki/File:Railway_workshop_museum_exhibition_in_Ljubljana,_Slovenia.jpg">
                                    Petar Milošević
                                </a>{" "}
                                (CC BY-SA 4.0, Wikimedia Commons).
                            </p>
                        </div>
                    </div>

                    <div className="plate space-y-6">
                        <h2>Roles we deploy across India</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {roles.map((item) => (
                                <div key={item.role} className="bg-paper-2 border-2 border-ink p-5 space-y-2">
                                    <div className="flex items-baseline justify-between gap-2 border-b border-ink pb-2">
                                        <h3>{item.role}</h3>
                                        <span className="figure-num text-sm font-bold text-ink">{item.exp}</span>
                                    </div>
                                    <p className="text-sm text-ink-2 leading-relaxed">{item.scope}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
