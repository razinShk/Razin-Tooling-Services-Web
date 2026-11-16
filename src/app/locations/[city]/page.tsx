import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locationsData, getLocationBySlug } from "@/data/locationsData";
import { MapPin, Factory, Users, Wrench, FileCheck2 } from "lucide-react";

export function generateStaticParams() {
    return locationsData.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const location = getLocationBySlug(resolvedParams.city);
    if (!location) return { title: "Location Not Found" };

    return {
        title: `Press Tooling & Die Proving Services in ${location.city}, ${location.state}`,
        description: location.metaDescription,
        alternates: {
            canonical: `https://razintoolingservices.in/locations/${location.slug}`,
        },
    };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const location = getLocationBySlug(resolvedParams.city);

    if (!location) notFound();

    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>Industrial tooling in {location.city}</h1>
                    <p className="lead text-ink-2">
                        Press tool installation, 210&nbsp;mm draw proving, and toolmakers in {location.city}, {location.state}.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 space-y-10">
                        <article className="space-y-6">
                            <h2 className="border-b-2 border-ink pb-4">
                                Supporting {location.city}’s Stamping &amp; OEM Plants
                            </h2>
                            <p className="text-ink-2 leading-relaxed">
                                As {location.ecosystem}, {location.city} demands strict manufacturing precision and rapid turnaround. Razin Tooling Services serves OEMs, Tier-1, and Tier-2 stampers across the {location.city} industrial belt, bringing two decades of shop-floor expertise directly to your press line.
                            </p>
                            <p className="text-ink-2 leading-relaxed">
                                Any disruption in stamping or die proving causes downstream assembly delays. Our rapid-response crews reach facilities across {location.city} at short notice to execute heavy tool installations, complex die proving, and in-press modifications tailored to manufacturers in {location.state}.
                            </p>

                            <h3>Core Services Deployed in {location.city}</h3>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="well border-2 border-ink space-y-2">
                                    <Wrench className="text-ink" size={26} aria-hidden="true" />
                                    <p className="font-bold text-lg text-ink">Tool Installation</p>
                                    <p className="text-ink-2 text-sm">
                                        Precision setup and calibrated load balancing of heavy progressive and transfer dies at your {location.city} plant.
                                    </p>
                                </div>
                                <div className="well border-2 border-ink space-y-2">
                                    <FileCheck2 className="text-ink" size={26} aria-hidden="true" />
                                    <p className="text-ink-2 text-sm">
                                        <strong className="text-ink block text-lg mb-1">Die Proving</strong>
                                        Resolving wrinkling, tearing, and springback for 210&nbsp;mm draws and high-tensile DP-790 stampings.
                                    </p>
                                </div>
                                <div className="well border-2 border-ink space-y-2">
                                    <Factory className="text-ink" size={26} aria-hidden="true" />
                                    <p className="font-bold text-lg text-ink">In-Press Modifications</p>
                                    <p className="text-ink-2 text-sm">
                                        Executing Engineering Change Notices (ECNs) on the bolster without pulling the tool off the press.
                                    </p>
                                </div>
                                <div className="well border-2 border-ink space-y-2">
                                    <Users className="text-ink" size={26} aria-hidden="true" />
                                    <p className="font-bold text-lg text-ink">Skilled Manpower Supply</p>
                                    <p className="text-ink-2 text-sm">
                                        Supplying 5 to 20 year experienced toolmakers and die provers to augment your {location.city} workforce.
                                    </p>
                                </div>
                            </div>

                            <h3>Proven OEM Record</h3>
                            <p className="text-ink-2 leading-relaxed">
                                Whether commissioning a 350-tool buyoff program like Tata Sierra in Sanand, proving 210&nbsp;mm deep draws for Tata Nexon, or clearing 3.7&nbsp;mm DP-790 tools for Gestamp, our crew focuses on repeatable dimensional clearance and zero-defect production runs.
                            </p>
                        </article>
                    </div>

                    <aside className="lg:col-span-4 space-y-8">
                        <div className="plate space-y-4">
                            <h3>Deploy in {location.city}</h3>
                            <p className="text-sm text-ink-2 leading-relaxed">
                                Need immediate tooling support or experienced toolmakers at your {location.city} facility?
                            </p>
                            <Link href="/contact" className="btn btn--primary w-full">
                                Request a Quote
                            </Link>
                        </div>

                        <div className="well border-2 border-ink space-y-4">
                            <h3 className="text-xl">Nearby Industrial Clusters</h3>
                            <ul className="space-y-2.5 list-none p-0 m-0">
                                {locationsData
                                    .filter((l) => l.state === location.state && l.slug !== location.slug)
                                    .slice(0, 5)
                                    .map((loc) => (
                                        <li key={loc.slug}>
                                            <Link
                                                href={`/locations/${loc.slug}`}
                                                className="text-sm font-medium text-ink hover:underline flex items-center gap-2"
                                            >
                                                <MapPin size={16} aria-hidden="true" />
                                                <span>Services in {loc.city}</span>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
