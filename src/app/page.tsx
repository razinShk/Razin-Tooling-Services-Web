import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2, Wrench, Settings, Users } from "lucide-react";

const oemPartners = [
  {
    name: "Tata Motors Ltd",
    logo: "/logos/tata-motors.svg",
    width: 185,
    height: 40,
    program: "Project X104 (Tata Nexon)",
    location: "Pune, Maharashtra",
    volume: "33 tools (10 parts)",
    spec: "210 mm critical deep-draw proving without splits or wrinkles on passenger body panels.",
  },
  {
    name: "Gestamp (GE Stamp Ltd)",
    logo: "/logos/gestamp.svg",
    width: 175,
    height: 40,
    program: "Project MQB-Kushaq",
    location: "Chakan, Pune",
    volume: "33 tool sets (6 parts)",
    spec: "High-tensile DP-790 steel die proving up to 3.7 mm gauge with springback compensation.",
  },
  {
    name: "Panse Group (Panse Autocomp)",
    logo: "/logos/panse-group.svg",
    width: 190,
    height: 40,
    program: "Tata Sierra Program",
    location: "Sanand, Gujarat",
    volume: "350 tools buyoff",
    spec: "Static and dynamic tool buyoff, press installation, and proving for wheel arch inner, outer, and cross members.",
  },
  {
    name: "The True Tooling",
    logo: "/logos/the-true-tooling.svg",
    width: 200,
    height: 40,
    program: "Project P113",
    location: "JBM Facility, Haridwar",
    volume: "6 major panel lines",
    spec: "Complete press installation for floor front inner, rear cab cross member, grill mounting, and fender extensions.",
  },
  {
    name: "JBM Group",
    logo: "/logos/jbm-group.svg",
    width: 175,
    height: 40,
    program: "Project P113 Press Line",
    location: "SIDCUL, Haridwar",
    volume: "6 assembly tool sets",
    spec: "On-site rigging, bed alignment, load balancing, and trial validation on JBM Haridwar stamping lines.",
  },
  {
    name: "Škoda / VW MQB Platform",
    logo: "/logos/skoda-vw.svg",
    width: 195,
    height: 40,
    program: "MQB-A0-IN Kushaq",
    location: "Chakan Cluster, Pune",
    volume: "33 progressive & draw dies",
    spec: "Dimensional metrology clearance and production batch run sign-off for high-strength structural stampings.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Stage Hero */}
      <section className="py-12 lg:py-20 border-b-[3px] border-ink">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h1>416 press tools proved for OEMs</h1>
              <p className="lead text-ink-2">
                Tool installation, 210&nbsp;mm draw proving, and 20-year toolmakers from Pune.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/projects" className="btn btn--primary">
                  Inspect OEM Ledger
                </Link>
                <Link href="/contact" className="btn btn--secondary">
                  Send Tooling RFQ
                </Link>
              </div>
              <dl className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-ink">
                <div>
                  <dt className="text-sm text-ink-2">Max draw proved</dt>
                  <dd className="figure-num text-2xl font-bold text-ink mt-1">210&nbsp;mm</dd>
                </div>
                <div className="border-l border-rule pl-4">
                  <dt className="text-sm text-ink-2">High-tensile gauge</dt>
                  <dd className="figure-num text-2xl font-bold text-ink mt-1">DP-790</dd>
                </div>
                <div className="border-l border-rule pl-4">
                  <dt className="text-sm text-ink-2">Crew experience</dt>
                  <dd className="figure-num text-2xl font-bold text-ink mt-1">5 to 20 yrs</dd>
                </div>
              </dl>
            </div>

            {/* Signature: OEM Commissioning & Logo Plate + Toolroom Slot */}
            <div className="lg:col-span-7 space-y-6">
              <div className="plate space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b-2 border-ink">
                  <h2 className="text-2xl">Commissioned OEM &amp; Tier-1 Plants</h2>
                  <span className="text-sm text-ink-2 figure-num">
                    UDYAM-MH-26-0222848
                  </span>
                </div>

                {/* 3 + 3 Monochrome Logo Grid (craft.md § 9) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {oemPartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="bg-paper-2 border-2 border-ink p-3 flex items-center justify-center min-h-[68px]"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                        className="max-h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch pt-2">
                  <figure
                    className="md:col-span-7 photo-frame w-full min-w-0 h-[220px]"
                    data-slot="hero"
                    data-alt="Heavy automotive sheet-metal stamping die and car body panel press at Razin Tooling Services"
                  >
                    <img
                      src="/images/library/toolroom-lathe-centres.jpg"
                      width={1920}
                      height={1065}
                      alt="Heavy automotive press tool and car body panel stamping die inside an OEM stamping press"
                      style={{ objectPosition: "50% 50%" }}
                      fetchPriority="high"
                    />
                  </figure>
                  <div className="md:col-span-5 min-w-0 bg-ink text-plate-ink p-5 flex flex-col justify-center space-y-2.5 border-2 border-ink relative z-10">
                    <div className="flex items-center gap-3">
                      <img
                        src="/logo.svg"
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 flex-shrink-0"
                      />
                      <p className="font-display font-bold text-lg uppercase text-plate-ink">
                        Asif N Shaikh
                      </p>
                    </div>
                    <p className="text-sm text-paper">
                      Proprietor &amp; Lead Tooling Specialist, Akurdi, Pune 411035
                    </p>
                    <p className="text-sm figure-num text-plate-ink font-bold">
                      <a href="tel:+919922957006" className="no-underline hover:underline">
                        +91 99229 57006
                      </a>
                    </p>
                    <p className="text-xs figure-num text-paper">
                      GSTIN: 27NPAPS0212C1Z7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: OEM Commissioning Ledger (Table composition) */}
      <section className="py-20 lg:py-28">
        <div className="container space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <h2>Verified OEM commissioning record</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="lead text-ink-2">
                Every tool count, draw depth, and material grade below comes directly from our signed plant buyoffs.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-labelledby="oem-ledger-caption"
            className="table-wrapper"
          >
            <table className="ledger-table">
              <caption id="oem-ledger-caption">
                Completed press tool installation, buyoff, and die proving contracts across India
              </caption>
              <thead>
                <tr>
                  <th scope="col">Client &amp; OEM</th>
                  <th scope="col">Vehicle &amp; Project</th>
                  <th scope="col">Plant &amp; Location</th>
                  <th scope="col">Tool Volume</th>
                  <th scope="col">Critical Spec &amp; Proving</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="flex flex-col gap-2">
                      <img
                        src="/logos/tata-motors.svg"
                        alt="Tata Motors Ltd"
                        width={150}
                        height={32}
                        loading="lazy"
                        className="h-8 w-auto object-contain"
                      />
                      <span>Tata Motors Ltd</span>
                    </div>
                  </th>
                  <td className="font-medium text-ink">Project X104 (Tata Nexon)</td>
                  <td className="text-ink-2">Pune, Maharashtra</td>
                  <td className="figure-num font-bold text-ink">33 tools (10 parts)</td>
                  <td className="text-ink-2">
                    Proved critical draws up to 210&nbsp;mm depth with zero tearing or wrinkling on outer and inner panels.
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="flex flex-col gap-2">
                      <img
                        src="/logos/gestamp.svg"
                        alt="Gestamp (GE Stamp Ltd)"
                        width={145}
                        height={32}
                        loading="lazy"
                        className="h-8 w-auto object-contain"
                      />
                      <span>GE Stamp Ltd (Gestamp)</span>
                    </div>
                  </th>
                  <td className="font-medium text-ink">Project MQB-Kushaq (Škoda / VW)</td>
                  <td className="text-ink-2">Chakan, Pune</td>
                  <td className="figure-num font-bold text-ink">33 tool sets (6 parts)</td>
                  <td className="text-ink-2">
                    Cleared high-tensile DP-790 steel stampings up to 3.7&nbsp;mm thickness with full springback control.
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="flex flex-col gap-2">
                      <img
                        src="/logos/panse-group.svg"
                        alt="Panse Group of Companies"
                        width={155}
                        height={32}
                        loading="lazy"
                        className="h-8 w-auto object-contain"
                      />
                      <span>Panse Group of Companies</span>
                    </div>
                  </th>
                  <td className="font-medium text-ink">Tata Sierra Project</td>
                  <td className="text-ink-2">Panse Autocomp, Sanand, Gujarat</td>
                  <td className="figure-num font-bold text-ink">350 tools buyoff</td>
                  <td className="text-ink-2">
                    Executed static and dynamic checking, press installation, and proving for wheel arch inner, outer, and cross members.
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="flex flex-col gap-2">
                      <img
                        src="/logos/the-true-tooling.svg"
                        alt="The True Tooling"
                        width={160}
                        height={32}
                        loading="lazy"
                        className="h-8 w-auto object-contain"
                      />
                      <span>The True Tooling (at JBM Group)</span>
                    </div>
                  </th>
                  <td className="font-medium text-ink">Project P113</td>
                  <td className="text-ink-2">JBM Facility, Haridwar</td>
                  <td className="figure-num font-bold text-ink">6 major panel lines</td>
                  <td className="text-ink-2">
                    Installed tools for floor front inner (RH &amp; rear), rear cab cross member, grill mounting, front upper cross member, and fender extensions (LH/RH).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-sm text-ink-2">
              Need references or signed completion reports for vendor registration?
            </p>
            <Link href="/projects" className="btn btn--secondary">
              Read Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Cast Figure Plate (Formwork Range composition) */}
      <section className="band--cast py-20 lg:py-24">
        <div className="container">
          <div className="plate">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-ink pb-6 lg:pb-0 lg:pr-8">
                <p className="display-num text-7xl sm:text-8xl lg:text-9xl text-ink">
                  350
                </p>
                <p className="text-lg font-bold text-ink mt-2">
                  Press tools signed off in a single OEM program
                </p>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h2>From static buyoff to 100-part batch clearance</h2>
                <p className="text-ink-2 leading-relaxed">
                  For the Tata Sierra program with Panse Group in Sanand, Gujarat, our engineers completed static checking, dynamic press trials, and shop-floor installation across 350 tools, proving critical wheel-arch and cross-member stampings on schedule.
                </p>
                <div className="flex flex-wrap gap-6 pt-2 text-sm font-medium text-ink">
                  <span>Zero-defect blue-matching</span>
                  <span>Blank-holder force tuning</span>
                  <span>On-site ECN welding &amp; spotting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Bento Capability Grid (Bento composition: 7+5 over 5+7) */}
      <section className="py-20 lg:py-28">
        <div className="container space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <h2>Four ways we clear press-shop bottlenecks</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="lead text-ink-2">
                Deploy our team for turnkey tool commissioning or augment your shift with seasoned toolmakers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Lead Bento Tile (7 cols) */}
            <div className="lg:col-span-7 plate flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 border-b-2 border-ink pb-4">
                  <h3>Critical Die Proving &amp; DP-790 Spotting</h3>
                  <Settings size={24} className="flex-shrink-0 text-ink" aria-hidden="true" />
                </div>
                <p className="text-ink-2 leading-relaxed">
                  We prove deep draws up to 210&nbsp;mm and high-tensile DP-790 structural dies up to 3.7&nbsp;mm thick. Our die specialists adjust draw beads, binder pressures, and die faces to eliminate splitting, wrinkling, and springback.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-rule">
                <span className="figure-num text-sm font-bold text-ink">
                  Class-A outer panels &amp; AHSS structural members
                </span>
                <Link href="/services/die-proving-india" className="btn btn--secondary">
                  Inspect Die Proving
                </Link>
              </div>
            </div>

            {/* Tile 2 (5 cols with photograph slot) */}
            <div className="lg:col-span-5 well flex flex-col justify-between space-y-6 border-2 border-ink">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3>Heavy Tool Installation</h3>
                  <Wrench size={24} className="flex-shrink-0 text-ink" aria-hidden="true" />
                </div>
                <figure
                  className="photo-frame w-full min-w-0 h-[200px]"
                  data-slot="bento-install"
                  data-alt="Automotive tandem press line with multi-ton car body draw dies during installation"
                >
                  <img
                    src="/images/library/toolroom-grinding-wheels.jpg"
                    width={1920}
                    height={1266}
                    loading="lazy"
                    alt="Multi-ton automotive sheet-metal stamping press line and car body draw dies"
                  />
                </figure>
                <p className="text-sm text-ink-2 leading-relaxed">
                  Rigging, press-bed alignment, tonnage balancing, and dynamic trial runs for tandem and transfer press lines across India.
                </p>
              </div>
              <Link href="/services/tool-installation-india" className="btn btn--secondary w-full">
                Inspect Tool Installation
              </Link>
            </div>

            {/* Tile 3 (5 cols) */}
            <div className="lg:col-span-5 well flex flex-col justify-between space-y-6 border-2 border-ink">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-ink pb-3">
                  <h3>Skilled Toolroom Manpower</h3>
                  <Users size={24} className="flex-shrink-0 text-ink" aria-hidden="true" />
                </div>
                <p className="text-ink-2 leading-relaxed">
                  Supply of vetted toolroom engineers, die provers, press setters, and maintenance technicians with 5 to 20 years of hands-on OEM floor experience.
                </p>
                <ul className="space-y-2 text-sm text-ink list-none p-0 m-0">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="flex-shrink-0 text-ink" aria-hidden="true" />
                    <span>Senior Die Proving Specialists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="flex-shrink-0 text-ink" aria-hidden="true" />
                    <span>Press Tool Setters &amp; ECN Fitters</span>
                  </li>
                </ul>
              </div>
              <Link href="/services/industrial-skilled-manpower" className="btn btn--secondary w-full">
                Request Manpower Roster
              </Link>
            </div>

            {/* Tile 4 (7 cols) */}
            <div className="lg:col-span-7 band--ink p-8 border-[3px] border-ink flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3>In-Press ECN Modifications &amp; Full Service Scope</h3>
                <p className="text-paper leading-relaxed">
                  When Engineering Change Notices (ECNs) or chronic stamping defects hit during a launch, pulling a multi-ton die off the bolster costs days. We execute precision in-press welding, spotting, and trim-line modifications right on your press bed in Pune, Chakan, Sanand, Haridwar, Chennai, and Gurugram.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-muted">
                <span className="text-sm text-paper">
                  48-hour diagnostic dispatch across major auto clusters
                </span>
                <Link href="/services" className="btn btn--secondary">
                  Browse All 9 Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Shareable Digital Visiting Card & Pune HQ Dispatch (Hire Close) */}
      <section className="band--cast py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Digital Visiting Card Plate */}
            <div className="lg:col-span-6 plate flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="border-b-2 border-ink pb-4 flex flex-wrap justify-between items-baseline gap-2">
                  <h2>Direct Visiting Card &amp; RFQ</h2>
                  <span className="text-sm font-bold text-ink">Akurdi, Pune HQ</span>
                </div>
                <p className="text-ink-2 leading-relaxed">
                  Bookmark or forward this page to your procurement and toolroom heads. Call or message Asif N Shaikh directly for immediate manpower deployment, die proving quotes, or vendor registration documents.
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-paper-2 p-4 border-2 border-ink">
                    <dt className="text-xs text-ink-2">Key Contact</dt>
                    <dd className="font-bold text-base text-ink mt-1">Asif N Shaikh</dd>
                  </div>
                  <div className="bg-paper-2 p-4 border-2 border-ink">
                    <dt className="text-xs text-ink-2">Direct Mobile &amp; WhatsApp</dt>
                    <dd className="figure-num font-bold text-base text-ink mt-1">
                      <a href="tel:+919922957006">+91 99229 57006</a>
                    </dd>
                  </div>
                  <div className="bg-paper-2 p-4 border-2 border-ink">
                    <dt className="text-xs text-ink-2">GST Registration</dt>
                    <dd className="figure-num font-bold text-base text-ink mt-1">27NPAPS0212C1Z7</dd>
                  </div>
                  <div className="bg-paper-2 p-4 border-2 border-ink">
                    <dt className="text-xs text-ink-2">MSME UDYAM</dt>
                    <dd className="figure-num font-bold text-base text-ink mt-1">UDYAM-MH-26-0222848</dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-3 pt-4 border-t-2 border-ink">
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919922957006" className="btn btn--secondary whitespace-nowrap">
                    <Phone size={16} aria-hidden="true" />
                    Call +91 99229 57006
                  </a>
                  <Link href="/contact" className="btn btn--secondary whitespace-nowrap">
                    <Mail size={16} aria-hidden="true" />
                    Send Project Scope
                  </Link>
                </div>
                <p className="text-xs text-ink-2 flex items-center gap-2">
                  <MapPin size={14} aria-hidden="true" />
                  <span>Headquarters: Akurdi, Pimpri-Chinchwad, Pune 411035, Maharashtra</span>
                </p>
                <p data-credits className="text-xs text-ink-2">
                  Photographs:{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Haltern_am_See,_Sythen,_Quarzwerke,_Werkzeug_in_der_Werkzeughalle_--_2014_--_4059.jpg">
                    Dietmar Rabich
                  </a>{" "}
                  (CC BY-SA 4.0, Wikimedia Commons),{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Haltern_am_See,_Sythen,_Werkzeughalle_der_Quarzwerke_--_2015_--_01117.jpg">
                    Dietmar Rabich
                  </a>{" "}
                  (CC BY-SA 4.0, Wikimedia Commons).
                </p>
              </div>
            </div>

            {/* Map Frame */}
            <div className="lg:col-span-6 border-[3px] border-ink bg-paper-2 min-h-[420px] flex flex-col">
              <div className="bg-ink text-plate-ink px-5 py-3 flex items-center justify-between text-sm">
                <span className="font-bold">Akurdi Industrial Hub, Pune 411035</span>
                <span className="figure-num">18.6472° N, 73.7667° E</span>
              </div>
              <div className="flex-grow min-h-[370px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.634125301886!2d73.7667232252533!3d18.647161860000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sAkurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "370px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location of Razin Tooling Services in Akurdi, Pune"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
