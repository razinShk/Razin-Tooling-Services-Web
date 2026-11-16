import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, getServiceSlugs } from "@/data/servicesData";
import { CheckCircle2, MapPin, PhoneCall } from "lucide-react";

export function generateStaticParams() {
    const slugs = getServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug];

    if (!service) return { title: "Service Not Found" };

    return {
        title: service.title,
        description: service.metaDescription,
        alternates: {
            canonical: `https://razintoolingservices.in/services/${resolvedParams.slug}`,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = servicesData[resolvedParams.slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>{service.title}</h1>
                    <p className="lead text-ink-2">{service.heroSubtitle}</p>
                    <div className="pt-2">
                        <Link href="/services" className="btn btn--secondary">
                            Return to All Services
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 space-y-12">
                        <article className="space-y-6">
                            <h2 className="border-b-2 border-ink pb-4">
                                Shop-floor scope for {service.title}
                            </h2>
                            {service.intro.map((paragraph, idx) => (
                                <p key={idx} className="text-ink-2 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </article>

                        <div className="plate space-y-6">
                            <h3>Core Capabilities &amp; Tolerances</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex gap-3 items-start bg-paper-2 p-4 border-2 border-ink">
                                        <CheckCircle2 className="text-ink flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                                        <div>
                                            <p className="font-bold text-ink">{feature.title}</p>
                                            <p className="text-ink-2 text-sm mt-1">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3>Four-Stage Execution Protocol</h3>
                            <ol className="grid sm:grid-cols-2 gap-6 list-decimal list-inside p-0 m-0">
                                {service.process.map((step, idx) => (
                                    <li key={idx} className="well border-2 border-ink space-y-2">
                                        <span className="font-bold text-lg text-ink">{step.phase}</span>
                                        <p className="text-ink-2 text-sm leading-relaxed">{step.desc}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="space-y-6 border-t-2 border-ink pt-10">
                            <h2>Technical Questions</h2>
                            <div className="space-y-4">
                                {service.faqs.map((faq, idx) => (
                                    <div key={idx} className="well border-2 border-ink space-y-2">
                                        <h3 className="text-xl">{faq.q}</h3>
                                        <p className="text-ink-2 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-8">
                        <div className="plate space-y-5">
                            <h3>Request Site Deployment</h3>
                            <p className="text-sm text-ink-2 leading-relaxed">
                                Discuss your {service.title.toLowerCase()} schedule directly with Asif N Shaikh and our Pune toolroom leads.
                            </p>
                            <Link href="/contact" className="btn btn--primary w-full">
                                Send Tooling RFQ
                            </Link>
                            <div className="pt-4 border-t-2 border-ink flex items-center justify-between gap-2">
                                <span className="text-sm text-ink-2 flex items-center gap-2">
                                    <PhoneCall size={16} aria-hidden="true" />
                                    Direct Line
                                </span>
                                <a href="tel:+919922957006" className="figure-num font-bold text-ink">
                                    +91-9922957006
                                </a>
                            </div>
                        </div>

                        <div className="well border-2 border-ink space-y-4">
                            <h3 className="text-xl flex items-center gap-2">
                                <MapPin size={20} aria-hidden="true" />
                                Active Service Clusters
                            </h3>
                            <p className="text-sm text-ink-2">
                                Rapid-response toolmakers deployed across these industrial hubs:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.relatedLocations.map((loc, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/locations/${loc.toLowerCase()}`}
                                        className="btn btn--secondary"
                                    >
                                        {loc}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
