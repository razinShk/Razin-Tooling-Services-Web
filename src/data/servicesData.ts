export interface ServicePageData {
    title: string;
    slug: string;
    metaDescription: string;
    heroSubtitle: string;
    intro: string[];
    features: { title: string; desc: string }[];
    process: { phase: string; desc: string }[];
    faqs: { q: string; a: string }[];
    relatedLocations: string[];
}

// Helper to generate consistent long-form content for demonstration and SEO weight
const generateLongContent = (serviceName: string, modifier: string) => {
    return [
        `In the fast-paced and hyper-competitive landscape of ${modifier} manufacturing, reliable ${serviceName.toLowerCase()} forms the very backbone of production stability. Razin Tooling Services recognizes that any disruption in the press shop translates to massive downstream losses. Our comprehensive ${serviceName.toLowerCase()} solutions are engineered to eliminate these bottlenecks permanently. Over the past two decades, our engineers have meticulously refined our approach to handle the most demanding tolerances and turnaround times in the industry.`,

        `The integration of advanced ${serviceName.toLowerCase()} protocols into your existing infrastructure requires a partner with both theoretical knowledge and deep, practical floor experience. We bridge this gap. By deploying our specialized teams directly to your site, we conduct exhaustive assessments of your current tooling setups. This immediate, hands-on methodology allows us to identify micro-inefficiencies that standard audits miss. As a result, our ${serviceName.toLowerCase()} interventions not only fix immediate issues but actively prolong the lifespan of your critical capital equipment.`,

        `Furthermore, the advent of high-tensile materials and complex progressive dies necessitates a paradigm shift in how ${serviceName.toLowerCase()} is executed. Legacy methods are no longer sufficient. We employ state-of-the-art diagnostic frameworks—combining structural analysis with real-time operational feedback—to ensure our ${serviceName.toLowerCase()} guarantees uninterrupted, zero-defect output. Whether scaling up production lines in Pune, Chennai, or anywhere across India, our unwavering commitment to quality ensures your operations remain globally competitive.`,

        `From initial consultation to final sign-off, our ${serviceName.toLowerCase()} workflow is fully transparent. We document every parametric adjustment, providing your internal engineering teams with a robust baseline for future maintenance. This collaborative approach transitions our relationship from a mere service provider to a strategic manufacturing partner. When you choose our ${serviceName.toLowerCase()}, you are investing in peace of mind, knowing that your most complex stamping and forming challenges are managed by India's foremost tooling experts.`
    ];
}

const generateFaqs = (serviceName: string) => [
    {
        q: `What is the typical turnaround time for your ${serviceName}?`,
        a: `Turnaround times vary based on the complexity and scale of the project. However, our rapid response teams across Maharashtra and Pan-India ensure that initial diagnostics are completed within 48 hours, with execution timelines rigorously optimized to minimize your downtime.`
    },
    {
        q: `Do you provide post-execution support for ${serviceName}?`,
        a: `Absolutely. We believe that ${serviceName} is an ongoing partnership. We provide comprehensive post-execution audits and 24/7 technical support to ensure your tools perform flawlessly under peak production loads.`
    },
    {
        q: `How do you ensure quality during the ${serviceName} process?`,
        a: `Quality is embedded in our DNA. We adhere to strict ISO-aligned protocols, utilizing multipoint inspection checklists and advanced metrology techniques throughout the ${serviceName} lifecycle. Every project is signed off by a senior engineer with 15+ years of domain experience.`
    }
];

export const servicesData: Record<string, ServicePageData> = {
    "tool-installation-india": {
        title: "Tool Installation Services in India",
        slug: "tool-installation-india",
        metaDescription: "Expert Press Tool Installation Services in India. Flawless commissioning of heavy tools for automotive and sheet metal OEMs.",
        heroSubtitle: "Precision Tool Setup for Zero-Defect Production",
        intro: generateLongContent("Tool Installation", "automotive"),
        features: [
            { title: "Precision Alignment", desc: "Using advanced calibration methods to ensure perfect die-to-press mating." },
            { title: "Load Balancing", desc: "Rigorous testing of tonnage distribution to prevent premature tool wear." },
            { title: "Safety Protocol Compliance", desc: "Adherence to all national safety standards during heavy lifting and rigging." },
            { title: "Trial Runs", desc: "Extensive dry and wet runs to simulate full production stress." }
        ],
        process: [
            { phase: "Pre-Installation Audit", desc: "Site readiness check and press bed inspection." },
            { phase: "Rigging & Positioning", desc: "Safe handling and positioning of multi-ton dies." },
            { phase: "Static Setup", desc: "Clamping and initial alignment checks without material." },
            { phase: "Dynamic Proving", desc: "Running material to verify dimensions and cosmetic quality." }
        ],
        faqs: generateFaqs("Tool Installation Services"),
        relatedLocations: ["Pune", "Chennai", "Gurugram", "Ahmedabad"]
    },
    "die-proving-india": {
        title: "Die Proving Services in India",
        slug: "die-proving-india",
        metaDescription: "Specialized Die Proving Services in India. We handle critical draws up to 210mm depth and complex geometric profiles.",
        heroSubtitle: "Validating Complex Dies Under Peak Stress",
        intro: generateLongContent("Die Proving", "press shop"),
        features: [
            { title: "Deep Draw Expertise", desc: "Proven track record of clearing tools with draws up to 210mm depths." },
            { title: "Forming Optimization", desc: "Adjusting blank holder forces and draw bead configurations to eliminate tearing and wrinkling." },
            { title: "Cosmetic Panel Checking", desc: "Ensuring Class-A surface finishes for outer body automotive panels." },
            { title: "Springback Control", desc: "Compensating for material springback through precise spotting and die face modification." }
        ],
        process: [
            { phase: "Baseline Assessment", desc: "Analyzing initial stamping defects and dimensional variations." },
            { phase: "Spotting & Grinding", desc: "Iterative blue-matching and grinding of die faces." },
            { phase: "Parameter Tuning", desc: "Optimizing press speed, cushion pressure, and lubrication." },
            { phase: "Batch Validation", desc: "Running a consecutive batch of 100+ parts to ensure process capability." }
        ],
        faqs: generateFaqs("Die Proving Services"),
        relatedLocations: ["Chakan", "Manesar", "Sanand", "Hosur"]
    },
    "tool-modification": {
        title: "Tool Modification Services",
        slug: "tool-modification",
        metaDescription: "In-press and off-press tool modification services to implement ECNs and resolve chronic production defects.",
        heroSubtitle: "Agile Engineering Changes for Dynamic Manufacturing",
        intro: generateLongContent("Tool Modification", "dynamic"),
        features: [
            { title: "In-Press Modifications", desc: "Performing critical adjustments without removing the die from the press to save downtime." },
            { title: "ECN Implementation", desc: "Rapidly integrating Engineering Change Notices securely and accurately." },
            { title: "Wear & Tear Overhaul", desc: "Rebuilding worn-out sections using advanced welding and machining techniques." },
            { title: "Scrap Reduction", desc: "Modifying trim profiles to optimize material yield and reduce waste." }
        ],
        process: [
            { phase: "Condition Analysis", desc: "Evaluating the current state of the tool against revised CAD data." },
            { phase: "Strategy Development", desc: "Formulating a modification plan that minimizes operational disruption." },
            { phase: "Precision Machining/Welding", desc: "Executing alterations via specialized tool room capabilities." },
            { phase: "Re-Proving", desc: "Validating the modified tool to confirm the ECN is fully addressed." }
        ],
        faqs: generateFaqs("Tool Modification"),
        relatedLocations: ["Pune", "Aurangabad", "Coimbatore", "Bhiwadi"]
    },
    // Automatically generating the rest of the generic shapes to save huge duplication
    ...[
        "critical-part-proving",
        "industrial-skilled-manpower",
        "automotive-tooling",
        "sheet-metal-tooling",
        "oem-supplier-tooling",
        "high-tensile-dp-790"
    ].reduce((acc, slug) => {
        let title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        acc[slug] = {
            title: `${title} Services`,
            slug: slug,
            metaDescription: `Industry leading ${title} services provided by Razin Tooling Services across India. Ensuring peak manufacturing performance.`,
            heroSubtitle: `Expert Solutions for ${title}`,
            intro: generateLongContent(title, "modern"),
            features: [
                { title: "Comprehensive Analysis", desc: "Deep-dive diagnostic approach to identify root causes." },
                { title: "Expert Intervention", desc: "Deploying seasoned professionals with decades of targeted experience." },
                { title: "Customized Solutions", desc: "Tailoring our methodologies to your specific press and material constraints." },
                { title: "Continuous Monitoring", desc: "Setting up frameworks for ongoing assessment and optimization." }
            ],
            process: [
                { phase: "Discovery", desc: "Understanding the precise challenges and desired outcomes." },
                { phase: "Planning", desc: "Creating a step-by-step roadmap for intervention." },
                { phase: "Execution", desc: "Hands-on implementation of the determined strategy." },
                { phase: "Validation", desc: "Rigorous testing to confirm all KPIs are met or exceeded." }
            ],
            faqs: generateFaqs(title),
            relatedLocations: ["Pune", "Mumbai", "Bangalore", "Noida"]
        };
        return acc;
    }, {} as Record<string, ServicePageData>)
};

export const getServiceSlugs = () => Object.keys(servicesData);
