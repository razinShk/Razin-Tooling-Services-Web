export interface LocationData {
    city: string;
    state: string;
    slug: string;
    ecosystem: string;
    metaDescription: string;
}

export const locationsData: LocationData[] = [
    { city: "Pune", state: "Maharashtra", slug: "pune", ecosystem: "the cornerstone of India's automotive sector", metaDescription: "Premium tool installation and die proving services in Pune. Partnering with top OEMs in Maharashtra." },
    { city: "Mumbai", state: "Maharashtra", slug: "mumbai", ecosystem: "a diverse and rapidly growing manufacturing hub", metaDescription: "Expert industrial manpower and press tooling solutions in Mumbai." },
    { city: "Chakan", state: "Maharashtra", slug: "chakan", ecosystem: "a specialized zone for heavy automotive assembly and tier-1 suppliers", metaDescription: "Specialized tooling services for automotive suppliers in Chakan." },
    { city: "Nashik", state: "Maharashtra", slug: "nashik", ecosystem: "an emerging epicenter for precision engineering", metaDescription: "Zero-defect tool commissioning and optimization in Nashik." },
    { city: "Aurangabad", state: "Maharashtra", slug: "aurangabad", ecosystem: "a critical ecosystem for auto components and sheet metal parts", metaDescription: "Reliable die proving and modification services in Aurangabad." },
    { city: "Chennai", state: "Tamil Nadu", slug: "chennai", ecosystem: "the 'Detroit of India', boasting massive OEM presences", metaDescription: "Top-tier press tool installation and skilled manpower in Chennai." },
    { city: "Coimbatore", state: "Tamil Nadu", slug: "coimbatore", ecosystem: "a traditional powerhouse of engineering and textile machinery", metaDescription: "Industrial tooling and die proving solutions in Coimbatore." },
    { city: "Hosur", state: "Tamil Nadu", slug: "hosur", ecosystem: "a major industrial belt supporting auto giants and heavy machinery", metaDescription: "Expert tooling support and critical part proving in Hosur." },
    { city: "Bangalore", state: "Karnataka", slug: "bangalore", ecosystem: "a blend of advanced aerospace and precision automotive manufacturing", metaDescription: "High-tech tooling solutions and ECN modifications in Bangalore." },
    { city: "Ahmedabad", state: "Gujarat", slug: "ahmedabad", ecosystem: "a robust center for diverse industrial machining", metaDescription: "Skilled manpower and tool installation services in Ahmedabad." },
    { city: "Sanand", state: "Gujarat", slug: "sanand", ecosystem: "the modern automotive manufacturing capital of Western India", metaDescription: "Specialized die proving and press tool services in Sanand." },
    { city: "Vadodara", state: "Gujarat", slug: "vadodara", ecosystem: "a hub for heavy engineering and equipment manufacturing", metaDescription: "Comprehensive tool room and stamping solutions in Vadodara." },
    { city: "Gurugram", state: "Haryana", slug: "gurugram", ecosystem: "a massive node for passenger vehicle production and tier-1 support", metaDescription: "Automotive tooling services and manpower in Gurugram." },
    { city: "Manesar", state: "Haryana", slug: "manesar", ecosystem: "a dedicated automotive corridor known for high-volume outputs", metaDescription: "Expert die proving and press setup in Manesar." },
    { city: "Noida", state: "Uttar Pradesh", slug: "noida", ecosystem: "a strategic, fast-paced manufacturing and electronics corridor", metaDescription: "Precision tooling and commissioning operations in Noida." },
    { city: "Indore", state: "Madhya Pradesh", slug: "indore", ecosystem: "a rapidly expanding zone for auto-components and heavy stamping", metaDescription: "Industrial tooling and modification experts in Indore." },
    { city: "Pithampur", state: "Madhya Pradesh", slug: "pithampur", ecosystem: "Central India's prominent auto hub and special economic zone", metaDescription: "Specialized auto tooling and setup services in Pithampur." },
    { city: "Bhiwadi", state: "Rajasthan", slug: "bhiwadi", ecosystem: "a vital industrial gateway bordering the national capital region", metaDescription: "High-tensile material tooling and skilled manpower in Bhiwadi." }
];

export const getLocationBySlug = (slug: string) => locationsData.find(loc => loc.slug === slug);
