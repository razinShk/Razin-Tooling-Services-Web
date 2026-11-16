import { Metadata } from "next";
import { Target, Award, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Razin Tooling Services",
    description:
        "Founded by Asif N Shaikh in Akurdi, Pune. 20+ years of experience in press tool installation, 210 mm deep-draw proving, and skilled industrial manpower.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>About Razin Tooling Services</h1>
                    <p className="lead text-ink-2">
                        Two decades of press tool commissioning and die proving from Akurdi, Pune.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 space-y-6">
                            <h2>Built on the press shop floor</h2>
                            <p className="text-ink-2 leading-relaxed">
                                Headquartered in Akurdi, Pune, at the centre of India’s automotive manufacturing corridor, Razin Tooling Services was established by Asif N Shaikh to solve the hardest physical bottleneck in sheet-metal stamping: taking multi-ton press tools from initial delivery to zero-defect batch production.
                            </p>
                            <p className="text-ink-2 leading-relaxed">
                                Over the past two decades, our engineers and toolmakers have commissioned and proved more than 416 tools for leading automotive programs, including Tata Motors’ Nexon (X104) and Sierra lines, Gestamp’s MQB-Kushaq high-tensile DP-790 dies, and Project P113 at JBM Haridwar.
                            </p>
                            <ul className="space-y-3 list-none p-0 m-0 pt-2">
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-ink flex-shrink-0" size={22} aria-hidden="true" />
                                    <span className="font-bold text-ink">
                                        Pan-India deployment across Pune, Chakan, Sanand, Haridwar, Chennai, and Gurugram
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Award className="text-ink flex-shrink-0" size={22} aria-hidden="true" />
                                    <span className="font-bold text-ink">
                                        UDYAM registered (UDYAM-MH-26-0222848) &amp; GST compliant (27NPAPS0212C1Z7)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                            <div className="plate space-y-3">
                                <Target size={32} className="text-ink" aria-hidden="true" />
                                <h3>Our Mission</h3>
                                <p className="text-sm text-ink-2 leading-relaxed">
                                    To deliver zero-defect press tool commissioning, deep-draw proving, and veteran toolmakers that keep India’s automotive stamping lines running on schedule.
                                </p>
                            </div>
                            <div className="well border-2 border-ink space-y-3">
                                <Users size={32} className="text-ink" aria-hidden="true" />
                                <h3>Our Leadership &amp; Crew</h3>
                                <p className="text-sm text-ink-2 leading-relaxed">
                                    Led directly by Asif N Shaikh (+91 9922957006), every site team is staffed by specialists with 5 to 20 years of hands-on press room experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="band--cast py-16">
                <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h2>Ready to discuss your upcoming tool buyoff or press line?</h2>
                        <p className="text-ink-2 mt-2">
                            Connect directly with Asif N Shaikh for vendor registration or an on-site assessment.
                        </p>
                    </div>
                    <Link href="/contact" className="btn btn--primary">
                        Consult With Our Team
                    </Link>
                </div>
            </section>
        </div>
    );
}
